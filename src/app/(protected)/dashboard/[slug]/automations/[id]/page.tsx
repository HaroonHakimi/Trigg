import AutomationBreadCrumb from '@/components/global/bread-crumbs/automations'
import React from 'react'

type Props = {
    params: {id: string}
}

// WIP: Set some metadata studd

const Page = ({ params }: Props) => {
    // WIP: prefetch user atomation data
  return (
    <div className='flex flex-col items-center gap-y-20'>
        <AutomationBreadCrumb id={params.id}/>
    </div>
  )
}

export default Page