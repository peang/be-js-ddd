import * as uuid from 'uuid';

export class EntityRelationModel implements DomainModelInterface {
    private id: string;
    private wholesalerId: string;
    private retailerId: string;
    private retailerNickname: string;
    private membershipId: string;
    private membershipLevel: number;
    private membreshipNote: string;
    private isOnlineActive: boolean;
    private shippingMethod: number;
    private createdAt: string;
    private updatedAt: string;

    constructor(
        id: string,
        wholesalerId: string,
        retailerId: string,
        retailerNickname: string,
        membershipId: string,
        membershipLevel: number,
        membreshipNote: string,
        isOnlineActive: boolean,
        shippingMethod: number,
        createdAt: string,
        updatedAt: string
    ) {
        this.id = id;
        this.wholesalerId = wholesalerId;
        this.retailerId = retailerId;
        this.retailerNickname = retailerNickname;
        this.membershipId = membershipId;
        this.membershipLevel = membershipLevel;
        this.membreshipNote = membreshipNote;
        this.isOnlineActive = isOnlineActive;
        this.shippingMethod = shippingMethod;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public static create(
        wholesalerId: string,
        retailerId: string,
        retailerNickname: string,
        membershipId: string,
        membershipLevel: number,
        membreshipNote: string,
        isOnlineActive: boolean,
        shippingMethod: number,
        createdAt: string,
        updatedAt: string
    ): EntityRelationModel {
        return new EntityRelationModel(
            uuid.v4(),
            wholesalerId,
            retailerId,
            retailerNickname,
            membershipId,
            membershipLevel,
            membreshipNote,
            isOnlineActive,
            shippingMethod,
            createdAt,
            updatedAt
        );
    }

    public getId(): string {
        return this.id;
    }

    public setId(id: string): void {
        this.id = id;
    }

    public getWholesalerId(): string {
        return this.wholesalerId;
    }

    public setWholesalerId(wholesalerId: string): void {
        this.wholesalerId = wholesalerId;
    }

    public getRetailerId(): string {
        return this.retailerId;
    }

    public setRetailerId(retailerId: string): void {
        this.retailerId = retailerId;
    }

    public getRetailerNickname(): string {
        return this.retailerNickname;
    }

    public setRetailerNickname(retailerNickname: string): void {
        this.retailerNickname = retailerNickname;
    }

    public getMembershipId(): string {
        return this.membershipId;
    }

    public setMembershipId(membershipId: string): void {
        this.membershipId = membershipId;
    }

    public getMembershipLevel(): number {
        return this.membershipLevel;
    }

    public setMembershipLevel(membershipLevel: number): void {
        this.membershipLevel = membershipLevel;
    }

    public getMembreshipNote(): string {
        return this.membreshipNote;
    }

    public setMembreshipNote(membreshipNote: string): void {
        this.membreshipNote = membreshipNote;
    }

    public isIsOnlineActive(): boolean {
        return this.isOnlineActive;
    }

    public setIsOnlineActive(isOnlineActive: boolean): void {
        this.isOnlineActive = isOnlineActive;
    }

    public getShippingMethod(): number {
        return this.shippingMethod;
    }

    public setShippingMethod(shippingMethod: number): void {
        this.shippingMethod = shippingMethod;
    }

    public getCreatedAt(): string {
        return this.createdAt;
    }

    public setCreatedAt(createdAt: string): void {
        this.createdAt = createdAt;
    }

    public getUpdatedAt(): string {
        return this.updatedAt;
    }

    public setUpdatedAt(updatedAt: string): void {
        this.updatedAt = updatedAt;
    }
}