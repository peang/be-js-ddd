export interface ResponseInterface {
    message: string,
    data: any
}

export interface RequestInterface {
    query?: any,
    body?: any,
    params?: any
}