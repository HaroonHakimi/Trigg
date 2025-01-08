import { Button } from '@/components/ui/button'
import React from 'react'
import Loader from '../loader'
import { ActiveAutomation } from '@/icons/active-automation'
import { useQueryAutomation } from '@/hooks/use-queries'
import { useMutationData } from '@/hooks/use-mutation-data'

type Props = {
  id: string
}

const ActivateAutomationButton = ({ id }: Props) => {
  const { data } = useQueryAutomation(id)
  const { mutate, isPending } = useMutationData(['activate'],
    (data: {state: boolean}) => activateAutomation(id, data.state)
  )
   
  return (
    <Button className='lg: px-10 bg-gradient-to-br hover:opacity-80 text-white
    rounded-full from-[#ff8c00] font-medium to-[#653801] ml-4'>
        <Loader state={false}>
            <ActiveAutomation/>
            <p className='lg:inline hidden'>
                {/* {data?.data?.active ? 'Disable' : 'Activate'} */} Activate
            </p>
        </Loader>
    </Button>
  )
}

export default ActivateAutomationButton