import { redirect } from 'next/navigation'

export default async function HomePage() {
  redirect("/admin")
  return <></>
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
}
