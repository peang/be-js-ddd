export class UserModel implements DomainModelInterface {
    private userId: string;
    private entityId: string;
    private addressId: string;
    private entityType: string;
    private isVerified: boolean;
    private phoneNumber: string;
    private createdAt: string;
    private updateAt: string;

    constructor(
        userId: string,
        entityId: string,
        addressId: string,
        entityType: string,
        isVerified: boolean,
        phoneNumber: string,
        createdAt: string,
        updateAt: string
    ) {
        this.userId = userId;
        this.entityId = entityId;
        this.addressId = addressId;
        this.entityType = entityType;
        this.isVerified = isVerified;
        this.phoneNumber = phoneNumber;
        this.createdAt = createdAt;
        this.updateAt = updateAt;
    }

    public static create(
        userId: string,
        entityId: string,
        addressId: string,
        entityType: string,
        isVerified: boolean,
        phoneNumber: string,
        createdAt: string,
        updatedAt: string
    ) {
        return new UserModel(
            userId,
            entityId,
            addressId,
            entityType,
            isVerified,
            phoneNumber,
            createdAt,
            updatedAt
        );
    }

    public getUserId(): string {
        return this.userId;
    }

    public setUserId(userId: string): void {
        this.userId = userId;
    }

    public getEntityId(): string {
        return this.entityId;
    }

    public setEntityId(entityId: string): void {
        this.entityId = entityId;
    }

    public getAddressId(): string {
        return this.addressId;
    }

    public setAddressId(addressId: string): void {
        this.addressId = addressId;
    }

    public getEntityType(): string {
        return this.entityType;
    }

    public setEntityType(entityType: string): void {
        this.entityType = entityType;
    }

    public isIsVerified(): boolean {
        return this.isVerified;
    }

    public setIsVerified(isVerified: boolean): void {
        this.isVerified = isVerified;
    }

    public getPhoneNumber(): string {
        return this.phoneNumber;
    }

    public setPhoneNumber(phoneNumber: string): void {
        this.phoneNumber = phoneNumber;
    }

    public getCreatedAt(): string {
        return this.createdAt;
    }

    public setCreatedAt(createdAt: string): void {
        this.createdAt = createdAt;
    }

    public getUpdateAt(): string {
        return this.updateAt;
    }

    public setUpdateAt(updateAt: string): void {
        this.updateAt = updateAt;
    }
}