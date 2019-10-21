import { DBService } from '../../services/DBService';
import { NotImplementedException } from '@nestjs/common';

export class BaseSQLRepository {
    public modelName: string;

    constructor(private readonly db, private readonly dbservice) {
        this.db = DBService.getInstance();
        this.dbservice = DBService;
    }

    private checkModel(): void {
        if (!this.modelName) { throw new NotImplementedException('MODEL_NOT_FOUND'); }
    }

    public async findOne(condition: object): Promise<any> {
        await this.checkModel();
        return this.db[this.modelName].findOne({ where: condition });
    }

    public async update(conditions: object, data: object): Promise<void> {
        await this.checkModel();
        return this.db[this.modelName].update(data, {
            where: conditions,
            transaction: await DBService.getTransaction()
        });
    }

    public setModel(modelName: string) {
        this.modelName = modelName;
    }

    public getModel() {
        return this.modelName;
    }
}
