export interface Product {
    id: string,
    title:string,
    description:string,
    image:string,
    price:number,
    rating:{rate:number, count:number}
    category:string,
}

export interface ProductCart extends Product{
    quantity:number,
}

export interface User{
    name?:string,
    email: string,
    password: string,
    passwordConfirmation?: string,
}