//Arquivo responsável pelas interfaces de request e response das requisições

export interface HttpRequest {
    body?: any
    params?: any
    query?: any
    headers?: any
    nextFunction: Function
}

export interface HttpResponse {
    statusCode: number
    body: any
    headers?: any
    path?: string
    pathFolderTemp?: string
}
