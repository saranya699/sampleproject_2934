import { Request, Response, NextFunction } from "express";
import { sampleController } from '../controller/sampleController';


export class Routes {
    private sample: sampleController = new sampleController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/sample').post(this.sample.GpCreate);
     }

}