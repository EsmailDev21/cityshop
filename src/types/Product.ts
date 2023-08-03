import { Category } from "./Category"

export type Product = {
    id: string
    name: string
    price: number
    sale: boolean
    saleValue: number
    description: string
    addedOn: Date
  }
  
export interface ProductImage  {
    id:number
    src:string
}