export * from '@uptrace/web'

import { setupErrorHandler } from './vue'
import { Vue, VueRouter } from './types'

export interface Options {
  app: Vue
  router?: VueRouter
}

export function instrumentVue(opts: Options) {
  setupErrorHandler(opts.app)
}