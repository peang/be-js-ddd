import { DTOInterface } from "src/app/dto/DTOInterface";
import { BadRequestException } from "@nestjs/common";

export interface RequestAdapterInterface {
    getDTO(data: object): DTOInterface;

    validate(data: object): boolean | BadRequestException;
}