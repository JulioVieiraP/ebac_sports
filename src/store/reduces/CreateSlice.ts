import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Produto as ProductType } from '../../App'

type CartType = {
  itemsToBuy: ProductType[]
  favorites: number[]
}

const initialState: CartType = {
  itemsToBuy: [],
  favorites: []
}

const cartSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductType>) => {
      if (state.itemsToBuy.find((item) => item.id === action.payload.id)) {
        state.itemsToBuy = state.itemsToBuy.filter(
          (item) => item.id !== action.payload.id
        )
      } else {
        state.itemsToBuy = [...state.itemsToBuy, action.payload]
      }
    },
    setFavorite: (state, action: PayloadAction<number>) => {
      if (state.favorites.includes(action.payload))
        state.favorites = state.favorites.filter((id) => id !== action.payload)
      else state.favorites = [...state.favorites, action.payload]
    }
  }
})

export const { addToCart, setFavorite } = cartSlice.actions
export default cartSlice.reducer
