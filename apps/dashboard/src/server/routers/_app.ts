import { z } from 'zod'
import { procedure, router } from '../trpc'

import { botsRepositoryRouter } from './bots/repository'

export const appRouter = router({
  hello: procedure
    .input(
      z.object({
        text: z.string()
      })
    )
    .query((opts) => {
      return {
        greeting: `hello ${opts.input.text}`
      }
    }),
  repository: botsRepositoryRouter
})
// export type definition of API
export type AppRouter = typeof appRouter
