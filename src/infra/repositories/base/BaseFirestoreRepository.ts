import { FirestoreService } from "../../../infra/services/FirestoreService";
import admin = require("firebase-admin");

export default class BaseFirestoreRepository {
    protected path: string;

    protected fsclient: any;

    public constructor(path: string) {
        this.path = path;
        this.fsclient = FirestoreService.getInstance()
    }
}
