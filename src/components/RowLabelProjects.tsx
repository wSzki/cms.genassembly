
'use client'
import { useRowLabel } from '@payloadcms/ui'
import React, { useEffect } from 'react'

const RowLabelScope = () => {
    const { data, rowNumber } = useRowLabel<any>()
    const [projectData, setProjectData] = React.useState<any>()
    const d = useRowLabel<any>()

    useEffect(() => {
        const res = fetch(`/api/projects/${d.data.projectItem}?depth=1&draft=false&locale=undefined`)
            .then(res => res.json().then(data => setProjectData(data)))
        .catch(err => console.log(err))
    }, [d.data.projectItem])
    console.log(projectData)

    const customLabel = `${data.title || data.item|| data.name || ""}`
    const customSubLabel = `${data.type ? `- ${data.type}`:""}`

    const index = `${String(rowNumber ? rowNumber + 1 : 1).padStart(2, '0')}`

    return <div><i>{index} /</i>  {projectData?.projectTitle} {projectData?.projectSubtitle} - {projectData?.projectDate}</div>
}

export default RowLabelScope
