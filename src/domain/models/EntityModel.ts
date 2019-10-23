import * as uuid from 'uuid';

export class EntityModel implements DomainModelInterface {
    private id: string;
    private email: string;
    private isAgreeDataSharing: boolean;
    private isRegisteredSeller: boolean;
    private isWsActive: boolean;
    private ktp: [EntityKTP];
    private logo: string;
    private maxDevice: number;
    private phone: string;
    private referredBy: string;
    private registerName: string;
    private ruloUserId: string;
    private statusReason: string;
    private storeCode: string;
    private storeName: string;
    private type: number;
    private createdAt: string;
    private updatedAt: string;

    constructor(
        id: string,
        email: string,
        isAgreeDataSharing: boolean,
        isRegisteredSeller: boolean,
        isWsActive: boolean,
        ktp: [EntityKTP],
        logo: string,
        maxDevice: number,
        phone: string,
        referredBy: string,
        registerName: string,
        ruloUserId: string,
        statusReason: string,
        storeCode: string,
        storeName: string,
        type: number,
        createdAt: string,
        updatedAt: string
    ) {
        this.id = id;
        this.email = email;
        this.isAgreeDataSharing = isAgreeDataSharing;
        this.isRegisteredSeller = isRegisteredSeller;
        this.isWsActive = isWsActive;
        this.ktp = ktp;
        this.logo = logo;
        this.maxDevice = maxDevice;
        this.phone = phone;
        this.referredBy = referredBy;
        this.registerName = registerName;
        this.ruloUserId = ruloUserId;
        this.statusReason = statusReason;
        this.storeCode = storeCode;
        this.storeName = storeName;
        this.type = type;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public create(
        email: string,
        isAgreeDataSharing: boolean,
        isRegisteredSeller: boolean,
        isWsActive: boolean,
        ktp: [EntityKTP],
        logo: string,
        maxDevice: number,
        phone: string,
        referredBy: string,
        registerName: string,
        ruloUserId: string,
        statusReason: string,
        storeCode: string,
        storeName: string,
        type: number
    ) {
        return new EntityModel(
            uuid.v4(),
            email,
            isAgreeDataSharing,
            isRegisteredSeller,
            isWsActive,
            ktp,
            logo,
            maxDevice,
            phone,
            referredBy,
            registerName,
            ruloUserId,
            statusReason,
            storeCode,
            storeName,
            type,
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

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public isIsAgreeDataSharing(): boolean {
        return this.isAgreeDataSharing;
    }

    public setIsAgreeDataSharing(isAgreeDataSharing: boolean): void {
        this.isAgreeDataSharing = isAgreeDataSharing;
    }

    public isIsRegisteredSeller(): boolean {
        return this.isRegisteredSeller;
    }

    public setIsRegisteredSeller(isRegisteredSeller: boolean): void {
        this.isRegisteredSeller = isRegisteredSeller;
    }

    public isIsWsActive(): boolean {
        return this.isWsActive;
    }

    public setIsWsActive(isWsActive: boolean): void {
        this.isWsActive = isWsActive;
    }

    public getKtp(): [EntityKTP] {
        return this.ktp;
    }

    public setKtp(ktp: [EntityKTP]): void {
        this.ktp = ktp;
    }

    public getLogo(): string {
        return this.logo;
    }

    public setLogo(logo: string): void {
        this.logo = logo;
    }

    public getMaxDevice(): number {
        return this.maxDevice;
    }

    public setMaxDevice(maxDevice: number): void {
        this.maxDevice = maxDevice;
    }

    public getPhone(): string {
        return this.phone;
    }

    public setPhone(phone: string): void {
        this.phone = phone;
    }

    public getReferredBy(): string {
        return this.referredBy;
    }

    public setReferredBy(referredBy: string): void {
        this.referredBy = referredBy;
    }

    public getRegisterName(): string {
        return this.registerName;
    }

    public setRegisterName(registerName: string): void {
        this.registerName = registerName;
    }

    public getRuloUserId(): string {
        return this.ruloUserId;
    }

    public setRuloUserId(ruloUserId: string): void {
        this.ruloUserId = ruloUserId;
    }

    public getStatusReason(): string {
        return this.statusReason;
    }

    public setStatusReason(statusReason: string): void {
        this.statusReason = statusReason;
    }

    public getStoreCode(): string {
        return this.storeCode;
    }

    public setStoreCode(storeCode: string): void {
        this.storeCode = storeCode;
    }

    public getStoreName(): string {
        return this.storeName;
    }

    public setStoreName(storeName: string): void {
        this.storeName = storeName;
    }

    public getType(): number {
        return this.type;
    }

    public setType(type: number): void {
        this.type = type;
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