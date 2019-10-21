export interface IToken {
    uid: string;
    eid: string;
}

export interface IRefreshToken {
    token: string;
    valid_until: string;
}