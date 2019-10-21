export interface IToken {
    uid: string;
    eid: string;
}

export interface IRefreshToken {
    token: string;
    valid_until: string;
}

export interface IContext {
    user_id: string,
    entity_id: string
}