import { OrderItem } from "../OrderItem";

export class OrderItemFirestore {
    private cog: number;
    private np: number;
    private amt: number;
    private bcd: string;
    private dc: number;
    private img: string;
    private inm: string;
    private isk: string;
    private p: number;
    private pnm: string;
    private pty: number;
    private q: number;
    private scp: string;
    private uom: string;

    constructor(
        cog: number,
        np: number,
        amt: number,
        bcd: string,
        dc: number,
        img: string,
        inm: string,
        isk: string,
        p: number,
        pnm: string,
        pty: number,
        q: number,
        scp: string,
        uom: string
    ) {
        this.cog = cog;
        this.np = np;
        this.amt = amt;
        this.bcd = bcd;
        this.dc = dc;
        this.img = img;
        this.inm = inm;
        this.isk = isk;
        this.p = p;
        this.pnm = pnm;
        this.pty = pty;
        this.q = q;
        this.scp = scp;
        this.uom = uom;
    }

    public static createFromOrderItem(orderItem: OrderItem) {
        return new OrderItemFirestore(
            orderItem.getCog(),
            orderItem.getNormalPrice(),
            orderItem.getAmount(),
            orderItem.getBarcode(),
            orderItem.getDiscount(),
            orderItem.getImage(),
            orderItem.getInternalName(),
            orderItem.getInternalSku(),
            orderItem.getPrice(),
            orderItem.getPrincipalName(),
            orderItem.getPriceType(),
            orderItem.getQuantity(),
            orderItem.getSellerCatalogPath(),
            orderItem.getUom()
        );
    }

    public getCog(): number {
        return this.cog;
    }

    public setCog(cog: number): void {
        this.cog = cog;
    }

    public getNp(): number {
        return this.np;
    }

    public setNp(np: number): void {
        this.np = np;
    }

    public getAmt(): number {
        return this.amt;
    }

    public setAmt(amt: number): void {
        this.amt = amt;
    }

    public getBcd(): string {
        return this.bcd;
    }

    public setBcd(bcd: string): void {
        this.bcd = bcd;
    }

    public getDc(): number {
        return this.dc;
    }

    public setDc(dc: number): void {
        this.dc = dc;
    }

    public getImg(): string {
        return this.img;
    }

    public setImg(img: string): void {
        this.img = img;
    }

    public getInm(): string {
        return this.inm;
    }

    public setInm(inm: string): void {
        this.inm = inm;
    }

    public getIsk(): string {
        return this.isk;
    }

    public setIsk(isk: string): void {
        this.isk = isk;
    }

    public getP(): number {
        return this.p;
    }

    public setP(p: number): void {
        this.p = p;
    }

    public getPnm(): string {
        return this.pnm;
    }

    public setPnm(pnm: string): void {
        this.pnm = pnm;
    }

    public getPty(): number {
        return this.pty;
    }

    public setPty(pty: number): void {
        this.pty = pty;
    }

    public getQ(): number {
        return this.q;
    }

    public setQ(q: number): void {
        this.q = q;
    }

    public getScp(): string {
        return this.scp;
    }

    public setScp(scp: string): void {
        this.scp = scp;
    }

    public getUom(): string {
        return this.uom;
    }

    public setUom(uom: string): void {
        this.uom = uom;
    }
}