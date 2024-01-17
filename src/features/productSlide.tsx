import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Product, ProductCart } from "../types/type";

interface productType {
    isLoading: boolean,
    isError: boolean,
    isSuccess: boolean,
    products: Product[],
    product: ProductCart,
    productCart: ProductCart[]
}

const initialProduct:productType = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    products: [],
    product: {} as ProductCart,
    productCart: [],
}

//Create products
export const setProducts = createAsyncThunk(
    'products/setProducts',
    async (_,thunkAPI) => {   
        try {
            let response =  await axios.get(`${import.meta.env.VITE_API_APP_PATH}`);
            return response.data; 
        } catch (error:any) {
            console.error(error);
            const message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
)

//Create products by Category
export const setProductsByCategory = createAsyncThunk(
    'products/setProductsByCategory',
    async (category:string,thunkAPI) => {   
        try {
            let response =  await axios.get(`${import.meta.env.VITE_API_APP_PATH_CATEGORY}/${category}`);
            return response.data; 
        } catch (error:any) {
            const message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
)

//Set products
export const setProduct = createAsyncThunk(
    'products/setProduct',
    async (id:string, thunkAPI) => {   
        try {
            let response =  await axios.get(`${import.meta.env.VITE_API_APP_PATH}/${id}`);
            return response.data; 
        } catch (error:any) {
            const message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
)

const productSlider = createSlice({
    name: 'products',
    initialState: initialProduct,
    reducers:{
        removeSelectedProduct:(state) =>{
            state.product = initialProduct.product;
        },
        addProductQuantity:(state, action:PayloadAction<[{id:string},{isCart:boolean}]>) =>{
            if(!action.payload[1].isCart){
                if(state.product.id == action.payload[0].id){
                    if(state.product.quantity < 10){
                        state.product.quantity += 1;
                    }
                }
            }else{
                let activeProduct = state.productCart.find(product => product.id == action.payload[0].id);
                if(activeProduct && activeProduct.quantity < 10){
                    state.productCart.map(product => product.id == action.payload[0].id ? {...product, quantity:product.quantity += 1} : product)
                }
            }
        },
        minusProductQuantity:(state, action:PayloadAction<[{id:string},{isCart:boolean}]>) =>{
            if(!action.payload[1].isCart){
                if(state.product.id == action.payload[0].id){
                    if(state.product.quantity > 1){
                        state.product.quantity -= 1;
                    }
                }
            }else{
                let activeProduct = state.productCart.find(product => product.id == action.payload[0].id);
                if(activeProduct && activeProduct.quantity > 1){
                    state.productCart.map(product => product.id == action.payload[0].id ? {...product, quantity:product.quantity -= 1} : product)
                }
            }
        },
        addProductToCart: (state, action:PayloadAction<ProductCart>) =>{
            if(Object.keys(state.product).length > 0){   
                state.productCart = [...state.productCart, action.payload];
            }
        }
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder
            .addCase( 
                setProducts.pending, (state) => {
                    state.isLoading = true;
                }
            )
            .addCase( 
                setProducts.fulfilled, (state, action) => {
                    state.isLoading = false;
                    state.isSuccess = true;
                    const newProducts = action.payload.map((item:any) => {
                       return {
                            id: item.id,
                            title: item.title,
                            description: item.description,
                            image: item.image,
                            price: item.price,
                            rating: item.rating,
                            category:item.category,
                       }
                    })
                    state.products = newProducts;
                }
            )
            .addCase( 
                setProducts.rejected, (state) => {
                    state.isLoading = false;
                    state.isSuccess = false;
                    state.products = [];
                    state.isError = true;
                }
            )
            .addCase( 
                setProduct.pending, (state) => {
                    state.isLoading = true;
                }
            )
            .addCase( 
                setProduct.fulfilled, (state, action) => {
                    state.isLoading = false;
                    state.isSuccess = true;
                    if(action.payload){
                        state.product   = {
                            id: action.payload.id,
                            title: action.payload.title,
                            description: action.payload.description,
                            image: action.payload.image,
                            price: action.payload.price,
                            rating: action.payload.rating,
                            category:action.payload.category,
                            quantity:1,
                        };
                    }else{
                        state.product = {} as ProductCart;
                    }
                    
                }
            )
            .addCase( 
                setProduct.rejected, (state) => {
                    state.isLoading = false;
                    state.isSuccess = false;
                    state.product = {} as ProductCart;
                    state.isError = true;
                }
            )
            .addCase( 
                setProductsByCategory.pending, (state) => {
                    state.isLoading = true;
                }
            )
            .addCase( 
                setProductsByCategory.fulfilled, (state, action) => {
                    state.isLoading = false;
                    state.isSuccess = true;
                    const categoryProducts = action.payload.map((item:any) => {
                       return {
                            id: item.id,
                            title: item.title,
                            description: item.description,
                            image: item.image,
                            price: item.price,
                            rating: item.rating,
                            category:item.category,
                       }
                    })
                    state.products = categoryProducts;
                }
            )
            .addCase( 
                setProductsByCategory.rejected, (state) => {
                    state.isLoading = false;
                    state.isSuccess = false;
                    state.products = [];
                    state.isError = true;
                }
            )
    }
 })

export const { removeSelectedProduct, addProductQuantity, minusProductQuantity,addProductToCart } = productSlider.actions;
export default productSlider.reducer;