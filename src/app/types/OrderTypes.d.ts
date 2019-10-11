export interface OrderListData {
    page?: number,
    per_page?: number,
    order_id?: string,
    order_number?: string,
    status?: string,
    sort?: string
}

export interface OrderDetailData {
    orderId: string,
    ownerId: string
}