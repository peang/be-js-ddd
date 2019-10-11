import { NotFoundException } from "@nestjs/common";

export class OrderNotFoundException extends NotFoundException {
    constructor(orderId: string) {
        super(`Order ID : ${orderId} Not Found`);
    }
}