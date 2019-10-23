class EntityKTP {
    private address: string;
    private birthdate: string;
    private birthplace: string;
    private fullname: string;
    private gender: string;
    private isMarried: string;
    private nik: string;
    private occupation: string;
    private scan: string;
    private selfie: string;

    constructor(
        address: string,
        birthdate: string,
        birthplace: string,
        fullname: string,
        gender: string,
        isMarried: string,
        nik: string,
        occupation: string,
        scan: string,
        selfie: string
    ) {
        this.address = address;
        this.birthdate = birthdate;
        this.birthplace = birthplace;
        this.fullname = fullname;
        this.gender = gender;
        this.isMarried = isMarried;
        this.nik = nik;
        this.occupation = occupation;
        this.scan = scan;
        this.selfie = selfie;
    }

    public getAddress(): string {
        return this.address;
    }

    public setAddress(address: string): void {
        this.address = address;
    }

    public getBirthdate(): string {
        return this.birthdate;
    }

    public setBirthdate(birthdate: string): void {
        this.birthdate = birthdate;
    }

    public getBirthplace(): string {
        return this.birthplace;
    }

    public setBirthplace(birthplace: string): void {
        this.birthplace = birthplace;
    }

    public getFullname(): string {
        return this.fullname;
    }

    public setFullname(fullname: string): void {
        this.fullname = fullname;
    }

    public getGender(): string {
        return this.gender;
    }

    public setGender(gender: string): void {
        this.gender = gender;
    }

    public getIsMarried(): string {
        return this.isMarried;
    }

    public setIsMarried(isMarried: string): void {
        this.isMarried = isMarried;
    }

    public getNik(): string {
        return this.nik;
    }

    public setNik(nik: string): void {
        this.nik = nik;
    }

    public getOccupation(): string {
        return this.occupation;
    }

    public setOccupation(occupation: string): void {
        this.occupation = occupation;
    }

    public getScan(): string {
        return this.scan;
    }

    public setScan(scan: string): void {
        this.scan = scan;
    }

    public getSelfie(): string {
        return this.selfie;
    }

    public setSelfie(selfie: string): void {
        this.selfie = selfie;
    }
}