export interface IFirebaseToken {
    uid: string;
    phone_number: string | undefined;
    email: string | undefined;
    iss: string;
    aud: string;
    sub: string;
    iat: number;
    exp: number;
}