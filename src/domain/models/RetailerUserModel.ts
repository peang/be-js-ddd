import * as uuid from 'uuid';
import * as bcrypt from 'bcryptjs';

const salt = 10;
export class RetailerUserModel implements DomainModelInterface {
    private id: string;
    private userId: string;
    private entityId: string;
    private name: string;
    private email: string;
    private phone: string;
    private password: string;
    private pin: string;
    private isActive: boolean;
    private isAccountVerified: boolean;
    private isProfileCompleted: boolean;
    private img: string;
    private refreshToken: string;
    private refreshExpires: string;
    private createdAt: string;
    private updatedAt: string;

    constructor(
        id: string,
        userId: string,
        entityId: string,
        name: string,
        email: string,
        phone: string,
        password: string,
        pin: string,
        isActive: boolean,
        isAccountVerified: boolean,
        isProfileCompleted: boolean,
        img: string,
        refreshToken: string,
        refreshExpires: string,
        createdAt: string,
        updatedAt: string
    ) {
        this.id = id;
        this.userId = userId;
        this.entityId = entityId;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.password = password;
        this.pin = pin;
        this.isActive = isActive;
        this.isAccountVerified = isAccountVerified;
        this.isProfileCompleted = isProfileCompleted;
        this.img = img;
        this.refreshToken = refreshToken;
        this.refreshExpires = refreshExpires;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public static async create(
        userId: string,
        entityId: string,
        name: string,
        email: string,
        phone: string,
        password: string,
        pin: string,
        img: string
    ): Promise<RetailerUserModel> {
        return new RetailerUserModel(
            uuid.v4(),
            userId,
            entityId,
            name,
            email,
            RetailerUserModel.normalizePhone(phone),
            RetailerUserModel.generateHash(password),
            RetailerUserModel.generateHash(pin),
            false,
            false,
            false,
            img,
            '',
            '',
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

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public getPhone(): string {
        return this.phone;
    }

    public setPhone(phone: string): void {
        this.phone = phone;
    }

    public getPassword(): string {
        return this.password;
    }

    public setPassword(password: string): void {
        this.password = password;
    }

    public getPin(): string {
        return this.pin;
    }

    public setPin(pin: string): void {
        this.pin = pin;
    }

    public isIsActive(): boolean {
        return this.isActive;
    }

    public setIsActive(isActive: boolean): void {
        this.isActive = isActive;
    }

    public isIsAccountVerified(): boolean {
        return this.isAccountVerified;
    }

    public setIsAccountVerified(isAccountVerified: boolean): void {
        this.isAccountVerified = isAccountVerified;
    }

    public isIsProfileCompleted(): boolean {
        return this.isProfileCompleted;
    }

    public setIsProfileCompleted(isProfileCompleted: boolean): void {
        this.isProfileCompleted = isProfileCompleted;
    }

    public getImg(): string {
        return this.img;
    }

    public setImg(img: string): void {
        this.img = img;
    }

    public getRefreshToken(): string {
        return this.refreshToken;
    }

    public setRefreshToken(refreshToken: string): void {
        this.refreshToken = refreshToken;
    }

    public getRefreshExpires(): string {
        return this.refreshExpires;
    }

    public setRefreshExpires(refreshExpires: string): void {
        this.refreshExpires = refreshExpires;
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

    public static normalizePhone(phone) {
        const rgx = new RegExp(`[+]`, 'g');
        return phone.replace(rgx, '');
    }

    public static generateHash(password: string): string {
        return bcrypt.hashSync(password, salt);
    }

    public isPasswordValid(password) {
        return bcrypt.compareSync(password, this.password);
    }
}