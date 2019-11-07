import { CartItem } from "../value-objects/CartItem";

export class Cart {
    private cartId: string;
    private cartItems: CartItem[];

    public constructor(
        cartId: string,
        cartItems: CartItem[]
    ) {
        return new Cart(cartId, cartItems);
    }

    public getCartId(): string {
        return this.cartId;
    }

    public setCartId(cartId: string): void {
        this.cartId = cartId;
    }

    public getCartItems(): CartItem[] {
        return this.cartItems;
    }

    public setCartItems(cartItems: CartItem[]): void {
        this.cartItems = cartItems;
    }
}