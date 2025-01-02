import React from 'react'
import { useMutationData } from './use-mutation-data'
import { createAutomations } from '@/actions/automations'


export const useCreateAutomation = () => {
  const { isPending, mutate } = useMutationData(
    ['create-automation'],
    () => createAutomations(),
    'user-automations'
  )

  return { isPending, mutate}
}
