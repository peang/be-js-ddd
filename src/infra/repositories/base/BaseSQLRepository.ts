import { DBService } from '../../services/DBService';

export class BaseSQLRepository {
    public modelName: string;

    constructor(private readonly db) {
        this.db = DBService.getInstance();
    }

    public setModel(modelName: string) {
        this.modelName = modelName;
    }

    public getModel() {
        return this.modelName;
    }
}
