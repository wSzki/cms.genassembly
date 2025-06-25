import { redirect } from 'next/navigation'

import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'
import fs from 'fs'
import path from 'path'

import config from '@/payload.config'

interface ImageInfo {
  projectName: string
  filename: string
  imageType: string
}

export default async function HomePage() {
  redirect('/admin')
  return <></>
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  const allProjects= await payload.find({collection: 'projects', depth:8, limit:1000})
  const allMedia= await payload.find({collection: 'media', depth:8, limit:1000})
  console.log(allProjects)
  
  // Filter projects that have 1 OR LESS images, then extract projectTitle and id
  const projectInfo = allProjects.docs
    .filter((project: any) => !project.images || !Array.isArray(project.images) || project.images.length <= 1)
    .map((project: any) => ({
      id: project.id,
      projectTitle: project.projectTitle,
      imageCount: project.images?.length || 0
    }))
  
  console.log('Project IDs and Titles (with 1 or less images):', projectInfo)

  // Read the data.json file
  const dataPath = path.join(process.cwd(), 'src/app/(payload)/data.json')
  const jsonData = JSON.parse(fs.readFileSync(dataPath, 'utf8'))
  
  // Extract all image filenames with project names
  const imageInfoList: ImageInfo[] = []
  
  // Helper function to strip file extension
  const stripFileExtension = (filename: string): string => {
    return filename.replace(/\.(jpg|jpeg|png|gif|webp|svg|bmp|tiff|ico)$/i, '')
  }
  
  // Helper function to normalize filename (convert all spaces to underscores)
  const normalizeFilename = (filename: string): string => {
    return filename.replace(/\s+/g, '_')
  }
  
  // Process projectPage array only
  if (jsonData.projectPage && Array.isArray(jsonData.projectPage)) {
    jsonData.projectPage.forEach((project: any) => {
      const projectName = project.title || 'Unknown Project'
      
      // Extract from images array only
      if (project.images && Array.isArray(project.images)) {
        project.images.forEach((image: any) => {
          if (image.fields?.file?.fileName) {
            const originalFilename = image.fields.file.fileName
            const processedFilename = stripFileExtension(originalFilename)
            const normalizedFilename = normalizeFilename(processedFilename)
            console.log(`Original: "${originalFilename}" -> Processed: "${processedFilename}" -> Normalized: "${normalizedFilename}"`)
            imageInfoList.push({
              projectName,
              filename: normalizedFilename,
              imageType: 'gallery'
            })
          }
        })
      }
    })
  }
  
  console.log('All image filenames with project names:', imageInfoList)

  // Debug: Log project titles from both sources
  console.log('Payload CMS Project Titles:', projectInfo.map((p: any) => p.projectTitle))
  console.log('Data.json Project Names:', [...new Set(imageInfoList.map((img: any) => img.projectName))])
  
  // More detailed debugging
  console.log('All unique project names from data.json:')
  const uniqueDataJsonProjects = [...new Set(imageInfoList.map((img: any) => img.projectName))]
  uniqueDataJsonProjects.forEach((name, index) => {
    console.log(`${index + 1}. "${name}"`)
  })
  
  console.log('All Payload CMS project titles:')
  projectInfo.forEach((project, index) => {
    console.log(`${index + 1}. "${project.projectTitle}"`)
  })

  // Aggregate images by project title
  const aggregatedProjects = projectInfo.map((project: any) => {
    const projectTitle = project.projectTitle?.toLowerCase().trim() || ''
    const matchingImages = imageInfoList
      .filter((imageInfo: any) => imageInfo.projectName?.toLowerCase().trim() === projectTitle?.toLowerCase().trim())
      .map((imageInfo: any) => imageInfo.filename)
    
    // Remove duplicates
    const uniqueImages = [...new Set(matchingImages)]
    
    return {
      projectTitle: project.projectTitle,
      id: project.id,
      images: uniqueImages
    }
  })

  console.log('Aggregated projects with images:', aggregatedProjects)
  
  // Process allMedia to create a lookup map
  const mediaLookup = new Map()
  allMedia.docs.forEach((media: any) => {
    if (media.filename) {
      // Strip .webp extension from media filename and normalize
      const cleanMediaFilename = stripFileExtension(media.filename)
      const normalizedMediaFilename = normalizeFilename(cleanMediaFilename)
      mediaLookup.set(normalizedMediaFilename, media.id)
    }
  })
  
  // Match aggregated projects with media IDs
  const finalResult = aggregatedProjects.map((project: any) => {
    const matchedImages = project.images.map((filename: string) => {
      const mediaId = mediaLookup.get(filename)
      return {
        filename,
        id: mediaId || null
      }
    })
    
    return {
      projectTitle: project.projectTitle,
      id: project.id,
      images: matchedImages
    }
  })
  
  console.log('Final result with media IDs:', JSON.stringify(finalResult, null, 2))
  
  // Log all images that don't have matching IDs
  console.log('\n=== IMAGES WITHOUT MATCHING IDs ===')
  let totalMissingImages = 0
  
  finalResult.forEach((project: any) => {
    const missingImages = project.images.filter((img: any) => img.id === null)
    if (missingImages.length > 0) {
      console.log(`\nProject: "${project.projectTitle}" (ID: ${project.id})`)
      console.log(`Missing ${missingImages.length} images:`)
      missingImages.forEach((img: any, index: number) => {
        console.log(`  ${index + 1}. "${img.filename}"`)
        totalMissingImages++
      })
    }
  })
  
  console.log(`\nTotal images without matching IDs: ${totalMissingImages}`)
  console.log('=====================================\n')
  
  // Update all projects with their corresponding images
  const updateProjectsWithImages = async () => {
    console.log(`Starting to update ${finalResult.length} projects...`)
    
    // First, let's examine the structure of an existing project
    if (finalResult.length > 0) {
      try {
        const sampleProject = await payload.findByID({
          collection: 'projects',
          id: finalResult[0].id,
          overrideAccess: true,
        })
        console.log('Sample project structure:', JSON.stringify(sampleProject, null, 2))
      } catch (error) {
        console.error('Failed to fetch sample project:', error)
      }
    }
    
    let successCount = 0
    let errorCount = 0
    let skippedCount = 0
    
    for (const project of finalResult) {
      try {
        const mediaIds = project.images
          .filter((img: any) => img.id !== null)
          .map((img: any) => img.id)
        
        if (mediaIds.length > 0) {
          console.log(`Attempting to update project "${project.projectTitle}" with media IDs:`, mediaIds)
          
          // Convert media IDs to the correct format for the images array field
          const imagesArray = mediaIds.map((mediaId: string) => ({
            image: mediaId
          }))
          
          await payload.update({
            collection: 'projects',
            id: project.id,
            data: { images: imagesArray },
            overrideAccess: true,
          })
          successCount++
          console.log(`✅ Updated project "${project.projectTitle}" with ${mediaIds.length} images`)
        } else {
          skippedCount++
          console.log(`⚠️ Skipped project "${project.projectTitle}" - no matching images found`)
        }
      } catch (error) {
        errorCount++
        console.error(`❌ Failed to update project "${project.projectTitle}":`, error)
      }
    }
    
    console.log(`\n=== UPDATE SUMMARY ===`)
    console.log(`✅ Successful updates: ${successCount}`)
    console.log(`⚠️ Skipped (no images): ${skippedCount}`)
    console.log(`❌ Failed updates: ${errorCount}`)
    console.log(`Total projects processed: ${finalResult.length}`)
    console.log('=====================\n')
  }
  
  // Execute the update function
  await updateProjectsWithImages()

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`
  // redirect('/admin');

  return (
    <div className="">
      <h1>Image Filenames from data.json</h1>
      <div className="space-y-4">
        {imageInfoList.map((imageInfo, index) => (
          <div key={index} className="border p-3 rounded">
            <strong>Project:</strong> {imageInfo.projectName}<br />
            <strong>Filename:</strong> {imageInfo.filename}<br />
            <strong>Type:</strong> {imageInfo.imageType}
          </div>
        ))}
      </div>
    </div>
  )
}


// export default async function HomePage() {
  // redirect("/admin")
  // return <>hello</>
  // const headers = await getHeaders()
  // const payloadConfig = await config
  // const payload = await getPayload({ config: payloadConfig })
  // const { user } = await payload.auth({ headers })

  // const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`
  // next.js auto redirect to /admin 

  

  // return (
  //   <div className="home">
  //     <div className="content">
  //       <picture>
  //         <source srcSet="https://raw.githubusercontent.com/payloadcms/payload/main/packages/ui/src/assets/payload-favicon.svg" />
  //         <Image
  //           alt="Payload Logo"
  //           height={65}
  //           src="https://raw.githubusercontent.com/payloadcms/payload/main/packages/ui/src/assets/payload-favicon.svg"
  //           width={65}
  //         />
  //       </picture>
  //       {!user && <h1>Welcome to your new project.</h1>}
  //       {user && <h1>Welcome back, {user.email}</h1>}
  //       <div className="links">
  //         <a
  //           className="admin"
  //           href={payloadConfig.routes.admin}
  //           rel="noopener noreferrer"
  //           target="_blank"
  //         >
  //           Go to admin panel
  //         </a>
  //         <a
  //           className="docs"
  //           href="https://payloadcms.com/docs"
  //           rel="noopener noreferrer"
  //           target="_blank"
  //         >
  //           Documentation
  //         </a>
  //       </div>
  //     </div>
  //     <div className="footer">
  //       <p>Update this page by editing</p>
  //       <a className="codeLink" href={fileURL}>
  //         <code>app/(frontend)/page.tsx</code>
  //       </a>
  //     </div>
  //   </div>
  // )
// }
