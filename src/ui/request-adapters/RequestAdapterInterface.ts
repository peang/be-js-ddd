import { DTOInterface } from "src/app/dto/DTOInterface";
import { BadRequestException } from "@nestjs/common";

export interface RequestAdapterInterface {
    getDTO(data: object, context: object): DTOInterface;

    getScheme(): object;
}