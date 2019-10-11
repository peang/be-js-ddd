class Order {
    private id: string;
    private buyerId: string;
    private orderNumber: string;
    private orderType: number;
    private status: string;
    private total: number;
    private wholesalerId: string;
    private wholesalerName: string;
    private cratedAt: string;
    private updatedAt: string;

    constructor(
        id: string,
        buyerId: string,
        orderNumber: string,
        orderType: number,
        status: string,
        total: number,
        wholesalerId: string,
        wholesalerName: string,
        createdAt: string,
        updatedAt: string
    ) {
        this.id = id;
        this.buyerId = buyerId;
        this.orderNumber = orderNumber;
        this.orderType = orderType;
        this.status = status;
        this.total = total;
        this.wholesalerId = wholesalerId;
        this.wholesalerName = wholesalerName;
        this.cratedAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public static async create() {
        return new Order(
            '1',
            '',
            '',
            0,
            '',
            0,
            '',
            '',
            '',
            ''
        );
    }
}