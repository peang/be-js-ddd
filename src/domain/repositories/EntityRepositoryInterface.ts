interface EntityRepositoryInterface {
    getEntityList(page: number, perPage: number, query: object, sort?: object);

    getEntityDetail(query: object);
}