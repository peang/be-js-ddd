import { DomainModelInterface } from "./DomainModelInterface";
import * as uuid from 'uuid';

export class User implements DomainModelInterface {
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

    public static async create(buyerId: string, orderNumber: string, orderType: number, status: string, total: number, wholesalerId: string, wholesalerName: string): Promise<User> {
        return new User(
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
        return this.cratedAt;
    }

    public setCratedAt(cratedAt: string): void {
        this.cratedAt = cratedAt;
    }

    public getUpdatedAt(): string {
        return this.updatedAt;
    }

    public setUpdatedAt(updatedAt: string): void {
        this.updatedAt = updatedAt;
    }
}