import {createReducer} from '@reduxjs/toolkit'



export const cartReducer = createReducer(
    {
    cartItems: [], subTotal: 0, tax: 0, total: 0, shipping: 0
    },
    {
     addToCart: (state, action) =>{
        const item = action.payload;
        const isItemExit = state.cartItems.find(i=> i.id === item.id);
        if (isItemExit) {
            state.cartItems.forEach((i)=>{
                if (i.id === item.id){
                  i.qty +=1
                } 
            })
        } else {
            state.cartItems.push(item)
        }
         },

     decreament: (state, action) =>{
        const isItemExit = state.cartItems.find(i=> i.id === action.payload);
        if(isItemExit){
            state.cartItems.forEach((i)=>{
                if (i.id === action.payload && i.qty > 1){
                  i.qty -=1
                } 
            })
        }
     },
     delete: (state, action) => {
     state.cartItems = state.cartItems.filter((i)=> i.id !== action.payload)
     },
     calculate: (state) => {
        let sum = 0;
        state.cartItems.forEach( i => {
            sum += i.price * i.qty;
        });
        state.subTotal = sum;
        state.shipping = state.subTotal > 1000 || state.subTotal === 0 ? 0 : 200;
        state.tax = +(state.subTotal * .18).toFixed();
        state.total = state.subTotal + state.tax + state.shipping
     }
    })