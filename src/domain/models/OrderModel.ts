import * as uuid from 'uuid';

export class OrderModel implements DomainModelInterface {
    private id: string;
    private buyerId: string;
    private orderNumber: string;
    private orderType: number;
    private status: string;
    private total: number;
    private wholesalerId: string;
    private wholesalerName: string;
    private createdAt: string;
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
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public static create(
        buyerId: string,
        orderNumber: string,
        orderType: number,
        status: string,
        total: number,
        wholesalerId: string,
        wholesalerName: string
    ): OrderModel {
        return new OrderModel(
            uuid.v4(),
            buyerId,
            orderNumber,
            orderType,
            status,
            total,
            wholesalerId,
            wholesalerName,
            (new Date()).toString(),
            (new Date()).toString()
        );
    }

    public getId(): string {
        return this.id;
    }

    public setId(id: string): void {
        this.id = id;
    }

    public getBuyerId(): string {
        return this.buyerId;
    }

    public setBuyerId(buyerId: string): void {
        this.buyerId = buyerId;
    }

    public getOrderNumber(): string {
        return this.orderNumber;
    }

    public setOrderNumber(orderNumber: string): void {
        this.orderNumber = orderNumber;
    }

    public getOrderType(): number {
        return this.orderType;
    }

    public setOrderType(orderType: number): void {
        this.orderType = orderType;
    }

    public getStatus(): string {
        return this.status;
    }

    public setStatus(status: string): void {
        this.status = status;
    }

    public getTotal(): number {
        return this.total;
    }

    public setTotal(total: number): void {
        this.total = total;
    }

    public getWholesalerId(): string {
        return this.wholesalerId;
    }

    public setWholesalerId(wholesalerId: string): void {
        this.wholesalerId = wholesalerId;
    }

    public getWholesalerName(): string {
        return this.wholesalerName;
    }

    public setWholesalerName(wholesalerName: string): void {
        this.wholesalerName = wholesalerName;
    }

    public getCratedAt(): string {
        return this.createdAt;
    }

    public setCratedAt(cratedAt: string): void {
        this.createdAt = cratedAt;
    }

    public getUpdatedAt(): string {
        return this.updatedAt;
    }

    public setUpdatedAt(updatedAt: string): void {
        this.updatedAt = updatedAt;
    }
}