// Use import.meta.env.DEV for development mode
export const BASE_URL = import.meta.env.DEV ? "http://localhost:5000" : "/";

export const PRODUCTS_URL = "/api/products";

export const USERS_URL = "/api/users";

export const ORDERS_URL = "/api/orders";
