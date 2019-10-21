export interface ResponseInterface {
    message: string,
    data: any
}

export interface RequestInterface {
    query?: any,
    body?: any,
    params?: any
}

export interface IContext {
    user_id: string,
    entity_id: string
}