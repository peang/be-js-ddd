import { CartItem } from "./CartItem";
import { OrderItemFirestore } from "./firestore/OrderItemFirestore";

import { DocumentReference } from "@google-cloud/firestore";
import { BadRequestException } from "@nestjs/common";

export class OrderItem {
    private cog: number;
    private normalPrice: number;
    private amount: number;
    private barcode: string;
    private discount: number;
    private image: string;
    private internalName: string;
    private internalSku: string;
    private price: number;
    private principalName: string;
    private priceType: number;
    private quantity: number;
    private sellerCatalogPath: string;
    private uom: string;

    constructor(
        cog: number,
        normalPrice: number,
        amount: number,
        barcode: string,
        discount: number,
        image: string,
        internalName: string,
        internalSku: string,
        price: number,
        principalName: string,
        priceType: number,
        quantity: number,
        sellerCatalogPath: string,
        uom: string
    ) {
        this.cog = cog;
        this.normalPrice = normalPrice;
        this.amount = amount;
        this.barcode = barcode;
        this.discount = discount;
        this.image = image;
        this.internalName = internalName;
        this.internalSku = internalSku;
        this.price = price;
        this.principalName = principalName;
        this.priceType = priceType;
        this.quantity = quantity;
        this.sellerCatalogPath = sellerCatalogPath;
        this.uom = uom;
    }

    public static async createManyFromCartItems(
        cartItems: CartItem[]
    ): Promise<OrderItem[]> {
        const orderItems = [];
        for (let i = 0; i < cartItems.length; i++) {
            const item: CartItem = cartItems[i];
            const uomData: any = item.getUoms().filter((uom: any) => {
                if (uom.label == item.getUom()) {
                    return uom;
                }
            });
            if (uomData.length === 0) {
                throw new BadRequestException('Cannot find uom in uoms data')
            }

            const normalPrice = uomData[0].price_tier[0].price.p1;

            orderItems.push(new OrderItem(
                0,
                normalPrice,
                item.getTotalPrice(),
                item.getBarcode(),
                0,
                item.getImage(),
                item.getInternalName(),
                item.getInternalSku(),
                item.getPrice(),
                item.getPrincipalName(),
                Number(item.getMembershipLevel()),
                item.getQty(),
                item.getSellerCatalogPath(),
                item.getUom()
            ));
        }

        return orderItems;
    }

    public toFirestoreModel(): OrderItemFirestore {
        return OrderItemFirestore.createFromOrderItem(this);
    }

    public toNativeType() {
        return {
            cog: this.cog,
            normal_price: this.normalPrice,
            amount: this.amount,
            barcode: this.barcode,
            discount: this.discount,
            image: this.image,
            internal_name: this.internalName,
            internal_sku: this.internalSku,
            price: this.price,
            principal_name: this.principalName,
            price_type: this.priceType,
            quantity: this.quantity,
            seller_catalog_path: this.sellerCatalogPath,
            uom: this.uom
        }
    }

    public static manyToFirestoreModel(orderItems: OrderItem[]): OrderItemFirestore[] {
        const orderItemsParsed: OrderItemFirestore[] = [];

        for (let i = 0; i < orderItems.length; i++) {
            const orderItem: OrderItem = orderItems[i];

            orderItemsParsed.push(orderItem.toFirestoreModel());
        }

        return orderItemsParsed;
    }

    public static manyToNativeType(orderItems: OrderItem[]): any[] {
        const orderItemsParsed: any[] = [];

        for (let i = 0; i < orderItems.length; i++) {
            const orderItem: OrderItem = orderItems[i];

            orderItemsParsed.push(orderItem.toNativeType());
        }

        return orderItemsParsed;
    }

    public getCog(): number {
        return this.cog;
    }

    public setCog(cog: number): void {
        this.cog = cog;
    }

    public getNormalPrice(): number {
        return this.normalPrice;
    }

    public setNormalPrice(normalPrice: number): void {
        this.normalPrice = normalPrice;
    }

    public getAmount(): number {
        return this.amount;
    }

    public setAmount(amount: number): void {
        this.amount = amount;
    }

    public getBarcode(): string {
        return this.barcode;
    }

    public setBarcode(barcode: string): void {
        this.barcode = barcode;
    }

    public getDiscount(): number {
        return this.discount;
    }

    public setDiscount(discount: number): void {
        this.discount = discount;
    }

    public getImage(): string {
        return this.image;
    }

    public setImage(image: string): void {
        this.image = image;
    }

    public getInternalName(): string {
        return this.internalName;
    }

    public setInternalName(internalName: string): void {
        this.internalName = internalName;
    }

    public getInternalSku(): string {
        return this.internalSku;
    }

    public setInternalSku(internalSku: string): void {
        this.internalSku = internalSku;
    }

    public getPrice(): number {
        return this.price;
    }

    public setPrice(price: number): void {
        this.price = price;
    }

    public getPrincipalName(): string {
        return this.principalName;
    }

    public setPrincipalName(principalName: string): void {
        this.principalName = principalName;
    }

    public getPriceType(): number {
        return this.priceType;
    }

    public setPriceType(priceType: number): void {
        this.priceType = priceType;
    }

    public getQuantity(): number {
        return this.quantity;
    }

    public setQuantity(quantity: number): void {
        this.quantity = quantity;
    }

    public getSellerCatalogPath(): string {
        return this.sellerCatalogPath;
    }

    public setSellerCatalogPath(sellerCatalogPath: string): void {
        this.sellerCatalogPath = sellerCatalogPath;
    }

    public getUom(): string {
        return this.uom;
    }

    public setUom(uom: string): void {
        this.uom = uom;
    }
}