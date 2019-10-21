interface UserRepositoryInterface {
    getUserList(page: number, perPage: number, query: object, sort?: object);

    getUserDetail(userId: string);
}