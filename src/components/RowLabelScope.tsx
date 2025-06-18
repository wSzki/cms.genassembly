
'use client'

import { useRowLabel } from '@payloadcms/ui'

const RowLabelScope = () => {
  const { data, rowNumber } = useRowLabel<any>()
  const d = useRowLabel<any>()
  console.log('d', d)

  const customLabel = `${data.title || data.item|| data.name || ""}`
  const customSubLabel = `${data.type ? `- ${data.type}`:""}`

  const index = `${String(rowNumber ? rowNumber + 1 : 1).padStart(2, '0')}`

  return <div><i>{index} /</i>  {customLabel} {customSubLabel}</div>
}

export default RowLabelScope
