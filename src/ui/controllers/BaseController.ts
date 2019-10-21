import { Get } from "@nestjs/common";

export class BaseController {
    private routeMethods = {
        'get': Get
    };

    public addRoute(
        httpMethod: string,
        path: string = '/',
        handler: any,
    ) {
        
    }
}