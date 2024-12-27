import { Button } from '@/components/ui/button'
import { Bell } from 'lucide-react'
import React from 'react'

type Props = {}

const Notifications = (props: Props) => {
  return (
    <Button className='rounded-full bg-transparent'>
        <Bell
        color='#FFA500'
        fill='#FFA500'
        />
    </Button>
  )
}

export default Notifications