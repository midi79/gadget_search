import { create } from "zustand";
import { ICartProduct } from "../type/type";

interface ICartState {
    cartItems: ICartProduct[];
    isCartPopup: boolean;
    getItemFromCart: (productId: number) => ICartProduct | undefined;
    addItemToCart: (item: ICartProduct) => void;
    increaseQuantity: (productId: number) => void;
    decreaseQuantity: (productId: number) => void;
    removeItemFromCart: (productId: number) => void;
    updateIsCartPopup: (isPopup: boolean) => void;
}

const useCartStore = create<ICartState>((set, get) => ({
    cartItems: [],
    isCartPopup: false,
    getItemFromCart: (productId) => {
        const itemExists = get().cartItems.find((cartItem) => cartItem.id === productId);
        return itemExists;
    },
    addItemToCart: (item) => {
        const itemExists = get().cartItems.find((cartItem) => cartItem.id === item.id);

        if (itemExists) {
            if (typeof itemExists.quantity === "number") {
                itemExists.quantity++;
            }
            set({ cartItems: [...get().cartItems] });
        } else {
            set({ cartItems: [...get().cartItems, { ...item, quantity: 1 }] });
        }
    },
    increaseQuantity: (productId) => {
        const itemExists = get().cartItems.find((cartItem) => cartItem.id === productId);

        if (itemExists) {
            if (typeof itemExists.quantity === "number") {
                itemExists.quantity++;
            }

            set({ cartItems: [...get().cartItems] });
        }
    },
    decreaseQuantity: (productId: number) => {
        const itemExists = get().cartItems.find((cartItem) => cartItem.id === productId);
        if (itemExists) {
            if (typeof itemExists.quantity === "number") {
                itemExists.quantity--;
                set({ cartItems: [...get().cartItems] });
            }
        }
    },
    removeItemFromCart: (productId: number) => {
        const itemExists = get().cartItems.find((cartItem) => cartItem.id === productId);

        if (itemExists) {
            if (typeof itemExists.quantity === "number") {
                const updatedCartItems = get().cartItems.filter((item) => item.id !== productId);
                set({ cartItems: updatedCartItems });
            }
        }
    },
    updateIsCartPopup: (isPopup: boolean) => set({ isCartPopup: isPopup }),
}));

export default useCartStore;
