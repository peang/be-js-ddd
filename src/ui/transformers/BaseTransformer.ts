import { DomainModelInterface } from "src/domain/models/DomainModelInterface";

export default class BaseTransformer {
    public static transformDetail(model: DomainModelInterface): object {
        throw new Error('Method not implemented.');
    }

    public static transformList(model: [DomainModelInterface]): object {
        throw new Error('Method not implemented.');
    }
}
