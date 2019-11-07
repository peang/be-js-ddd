import { NotFoundException } from "@nestjs/common";

export class OrderNotFoundException extends NotFoundException {
    constructor(orderId: String) {
        super(`Order ID : ${orderId} Not Found`);
    }
}