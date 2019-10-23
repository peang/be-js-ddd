import { FirestoreService } from "../../../infra/services/FirestoreService";
import admin = require("firebase-admin");

export default class BaseFirestoreRepository {
    protected path: string;

    protected fsclient: any;

    public constructor(path: string) {
        this.path = path;
        this.fsclient = FirestoreService.getInstance()
    }

    public async get(docId: string): Promise<DomainModelInterface> {
        return this.fsclient.collection(this.path).doc(docId)
            .get()
            .then((snapshot: admin.firestore.DocumentData) => snapshot.data());
    }

    public async set(docId: string, payload: any): Promise<void> {
        return this.fsclient.collection(this.path).doc(docId).set(payload);
    }

    public async update(docId: string, payload: any): Promise<void> {
        return this.fsclient.collection(this.path).doc(docId).update(payload);
    }
}
