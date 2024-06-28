import { Express, Router } from "express"
import FastGlob = require("fast-glob");
import { adaptRoute } from "../adapters/express.adapter";

//define todas as rotas, pegando de todas as controllers
export default async (app: Express): Promise<void> => {
    const router = Router()

    //pega todas as controllers
    let controllers = FastGlob.sync(`src/app/presentation/controllers/v1/**/*.ts`)

    controllers.map(async (file) => {
        //importa as controllers
        const fileImport = (await import(`./../../../${file}`))
        let routeInfo: any
        let controller: any
        const middlewares: any[] = []

        //pega as informações do arquivo controller (routeInfo e controller, que é a classe)
        for (const key in fileImport) {
            if (key === 'routeInfo') {
                routeInfo = fileImport[key]
            } else {
                controller = new fileImport[key]()
                //??? igual a: controller = new GetAllUsersController() ???
            }
        }

        router[routeInfo.method](routeInfo.path, middlewares, adaptRoute(controller))
    })

    app.use('/api/v1', router)
}

