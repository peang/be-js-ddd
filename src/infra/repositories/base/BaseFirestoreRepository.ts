import { FirestoreService } from "../../../infra/services/FirestoreService";

export default class BaseFirestoreRepository {
    protected path: string;
    protected fsclient: any;

    public constructor(path: string) {
        this.path = path;
        this.fsclient = FirestoreService.getInstance().firestore()
    }

    public getPath() {
        return this.path;
    }
}
