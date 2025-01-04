import { useQueryAutomation } from '@/hooks/use-queries'
import React from 'react'
import ActiveTrigger from './active'

type Props = {
    id: string
}

const Trigger = ({ id }: Props) => {
  const { data } = useQueryAutomation(id)
  
  if (data?.data && data?.data?.trigger.length > 0) {
    return (
      <div className='flex flex-col gap-y-y items-center'>
        <ActiveTrigger/>
      </div>
    )
  }
}

export default Trigger