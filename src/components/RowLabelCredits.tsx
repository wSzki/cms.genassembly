
'use client'

import { useRowLabel } from '@payloadcms/ui'

const RowLabelScope = () => {
  const { data, rowNumber } = useRowLabel<any>()
  const d = useRowLabel<any>()
  console.log('d', d)

  const customLabel = `${data.item||''}`
  const index = `${String(rowNumber || 0 + 1).padStart(2, '0')}`

  return <div><i>{index} /</i>  {customLabel}</div>
}

export default RowLabelScope
