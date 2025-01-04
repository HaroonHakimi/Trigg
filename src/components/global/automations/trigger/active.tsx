import React from 'react'

type Props = {
    type: string
    keywords: {
        id: string
        word: string
        automationId: string | null
    }
}

const ActiveTrigger = (props: Props) => {
  return (
    <div>ActiveTrigger</div>
  )
}

export default ActiveTrigger