import { Button } from '@/components/ui/button'
import React from 'react'
import Loader from '../loader'
import { AutomationDuoToneWhite } from '@/icons'

type Props = {}

const CreateAutomation = (props: Props) => {
    // WIP create automation in database using mtutate
  return (
    <Button className='lg:px-10 py-6 bg-gradient-to-bl hover:opacity-80
    text-white/80 rounded-full from-[#C76E00] to-[#FF8C00] font-medium'>
        <Loader state={false}>
            <AutomationDuoToneWhite/>
            <p className='lg:inline hidden'>Create and Automation</p>
        </Loader>
    </Button>
  )
}

export default CreateAutomation