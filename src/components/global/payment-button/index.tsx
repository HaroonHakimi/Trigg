import { Button } from '@/components/ui/button'
import React from 'react'

type Props = {}

const PaymentButton = (props: Props) => {
    // WIP get subscription details
    // WIP loading state
  return (
    <Button className='bg-gradient-to-br text-white/90  font-bold
    rounded-full from-[#FFDBBB] via-[#FF8C00] to-[#c65102]'>
        Upgrade
    </Button>
  )
}

export default PaymentButton