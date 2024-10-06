import { createMutation, createQuery, getQueryClientContext } from '@tanstack/svelte-query'

type DocResponse = {
  note: string
}
export const viewDoc = () =>
  createQuery({
    queryKey: ['viewDoc'],
    queryFn: async (): Promise<DocResponse> => {
      const res = await fetch(`http://localhost:3000/doc`)
      return await res.json()
    }
  })

type UpdateRequest = {
  note: string
}
export const useUpdateDoc = () => {
  const queryClient = getQueryClientContext()

  return createMutation({
    mutationFn: async (body: UpdateRequest) => {
      const res = await fetch(`http://localhost:3000/doc`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
      await res.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['viewDoc'] })
    }
  })
}
