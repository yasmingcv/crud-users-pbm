import { HttpRequest, HttpResponse } from "./http";

//essa interface é implementada em todas as controllers, 
//pois elas sempre vão receber um HttpRequest e retornar um HttpResponse
export interface Controller{
    handle: (httpRequest: HttpRequest) => Promise<HttpResponse>
}