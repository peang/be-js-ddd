import { DocumentReference } from "@google-cloud/firestore";

export class CartItem {
    private barcode: string;
    private qty: number;
    private uom: string;
    private catalogRuloId: string;
    private category: string;
    private image: string;
    private description: string;
    private internalName: string;
    private internalSku: string;
    private principalName: string;
    private uoms: object[];
    private price: number;
    private totalPrice: number;
    private membershipLevel: number;
    private sellerCatalogPath: string;

    constructor(
        barcode: string,
        qty: number,
        uom: string,
        catalogRuloId: string,
        category: string,
        image: string,
        description: string,
        internalName: string,
        internalSku: string,
        principalName: string,
        uoms: object[],
        price: number,
        totalPrice: number,
        membershipLevel: number,
        sellerCatalogPath: string
    ) {
        this.barcode = barcode;
        this.qty = qty;
        this.uom = uom;
        this.catalogRuloId = catalogRuloId;
        this.category = category;
        this.image = image;
        this.description = description;
        this.internalName = internalName;
        this.internalSku = internalSku;
        this.principalName = principalName;
        this.uoms = uoms;
        this.price = price;
        this.totalPrice = totalPrice;
        this.membershipLevel = membershipLevel;
        this.sellerCatalogPath = sellerCatalogPath;
    }

    public getBarcode(): string {
        return this.barcode;
    }

    public setBarcode(barcode: string): void {
        this.barcode = barcode;
    }

    public getQty(): number {
        return this.qty;
    }

    public setQty(qty: number): void {
        this.qty = qty;
    }

    public getUom(): string {
        return this.uom;
    }

    public setUom(uom: string): void {
        this.uom = uom;
    }

    public getCatalogRuloId(): string {
        return this.catalogRuloId;
    }

    public setCatalogRuloId(catalogRuloId: string): void {
        this.catalogRuloId = catalogRuloId;
    }

    public getCategory(): string {
        return this.category;
    }

    public setCategory(category: string): void {
        this.category = category;
    }

    public getImage(): string {
        return this.image;
    }

    public setImage(image: string): void {
        this.image = image;
    }

    public getDescription(): string {
        return this.description;
    }

    public setDescription(description: string): void {
        this.description = description;
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

    public getPrincipalName(): string {
        return this.principalName;
    }

    public setPrincipalName(principalName: string): void {
        this.principalName = principalName;
    }

    public getUoms(): object[] {
        return this.uoms;
    }

    public setUoms(uoms: object[]): void {
        this.uoms = uoms;
    }

    public getPrice(): number {
        return this.price;
    }

    public setPrice(price: number): void {
        this.price = price;
    }

    public getTotalPrice(): number {
        return this.totalPrice;
    }

    public setTotalPrice(totalPrice: number): void {
        this.totalPrice = totalPrice;
    }

    public getMembershipLevel(): number {
        return this.membershipLevel;
    }

    public setMembershipLevel(membershipLevel: number): void {
        this.membershipLevel = membershipLevel;
    }

    public getSellerCatalogPath(): string {
        return this.sellerCatalogPath;
    }

    public setSellerCatalogPath(sellerCatalogPath: string): void {
        this.sellerCatalogPath = sellerCatalogPath;
    }
}