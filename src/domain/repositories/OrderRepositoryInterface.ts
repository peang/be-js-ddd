interface OrderRepositoryInterface {
    getOrderList(page: number, perPage: number, query: object, sort?: object);
}