export type CartItem = {
    id: string
    quantity: number
    productId: string
    cartId: string
  }
  
  /**
   * Model Cart
   * 
   */
  export type Cart = {
    id: string
    total: number
    subTotal: number
    expedition: number
  }
  
  /**
   * Model Facturation
   * 
   */
  export type Facturation = {
    id: string
    date: Date
    cartId: string
    customerId: string
  }
  
  /**
   * Model Customer
   * 
   */
  export type Customer = {
    id: string
    name: string
    surname: string
    adress: string
    city: string
    region: string
    country: string
    phoneNumber: number
  }
  
  /**
   * Model Account
   * 
   */
  export type Account = {
    id: string
    email: string
    password: string
    customerId: string | null
  }
  
  /**
   * Model Image
   * 
   */
  export type Image = {
    id: string
    uri: string
    productId: string
  }