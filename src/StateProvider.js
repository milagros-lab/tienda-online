import { createContext, useContext, useState } from "react";
const StateContex = createContext();

export function StateProvider ({children})  {
  const [items, setItems] = useState([]);


  const agregarProducto = (id, name, productType, image, price, rating, description) => {
    setItems((items) =>  [...items,{ id: items.length, idProduct: id, name, productType, image, price, rating,description}]) 
      
  }  
  const removeItems = (id) => { 
      setItems((items) => items.filter ((item) => item.id !== id))       
  } 
  
  const sumarPrecio = () => {
    let precioTotal = 0;
    for (let i = 0; i < items.length; i++) {
      precioTotal += items[i].price
    }
    return precioTotal;
  }


 return (
   <StateContex.Provider value={{items, agregarProducto, removeItems, sumarPrecio}}>{children}</StateContex.Provider>
 )
}

export const useStateValue = () => useContext(StateContex)
export default StateContex;

