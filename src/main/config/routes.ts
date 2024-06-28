import { Router, type Express } from 'express'
import FastGlob from 'fast-glob'

export default (app: Express): void => {
    FastGlob.sync(`**/main/routes/**routes.ts`).map(async (file) => {
        const route = (await import(`../../../${file}`)).default
        route(app)
    })
}