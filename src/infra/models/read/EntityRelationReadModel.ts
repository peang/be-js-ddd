import * as uuid from 'uuid';
import { Timestamp, DocumentReference } from '@google-cloud/firestore';

export class EntityRelationReadModel implements DomainModelInterface {
    private id: string;
    private shippingMethod: number;
    private loanLastRepayment: Timestamp;
    private membershipNote: string;
    private retailerId: DocumentReference;
    private loanStatus: number;
    private wholesalerId: DocumentReference;
    private loanLimit: number;
    private membershipLevel: number;
    private createdAt: Timestamp;
    private updatedAt: Timestamp;
    private loanBalance: number;
    private isOnlineActive: Boolean;
    private membershipId: string;
    private retailerNickname: string;

    constructor(
        id: string,
        shippingMethod: number,
        loanLastRepayment: Timestamp,
        membershipNote: string,
        retailerId: DocumentReference,
        loanStatus: number,
        wholesalerId: DocumentReference,
        loanLimit: number,
        membershipLevel: number,
        createdAt: Timestamp,
        updatedAt: Timestamp,
        loanBalance: number,
        isOnlineActive: Boolean,
        membershipId: string,
        retailerNickname: string
    ) {
        this.id = id;
        this.shippingMethod = shippingMethod;
        this.loanLastRepayment = loanLastRepayment;
        this.membershipNote = membershipNote;
        this.retailerId = retailerId;
        this.loanStatus = loanStatus;
        this.wholesalerId = wholesalerId;
        this.loanLimit = loanLimit;
        this.membershipLevel = membershipLevel;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.loanBalance = loanBalance;
        this.isOnlineActive = isOnlineActive;
        this.membershipId = membershipId;
        this.retailerNickname = retailerNickname;
    }

}