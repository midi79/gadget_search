import { QueryClient } from "@tanstack/react-query";
import axios from "axios";
import { ICategoryProp } from "../type/type";

export const queryClient = new QueryClient();

export async function getProduct({ category, page }: ICategoryProp) {
    const skip = (page - 1) * 10;
    let URL = `https://dummyjson.com/products?limit=10&skip=${skip}`;

    if (category !== "/") {
        URL = `https://dummyjson.com/products/category${category}?limit=10&skip=${skip}`;
    }

    console.log("URL", URL);

    try {
        const response = await axios.get(URL);
        console.log(response.data);
        return response.data;
    } catch (e) {
        console.log("Something wrong : " + e);
    }
}

export async function getCategory() {
    const URL = "https://dummyjson.com/products/categories";

    try {
        const response = await axios.get(URL);
        return response.data.map((item: any) => item.slug).filter((item: any) => item.indexOf("mens-") === -1);
    } catch (e) {
        console.log("Something wrong : " + e);
    }
}
