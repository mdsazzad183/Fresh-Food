import { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';
const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Implement your logic to add an item to the cart
      return state;
    case 'REMOVE_FROM_CART':
      // Implement your logic to remove an item from the cart
      return state;
    case 'UPDATE_QUANTITY':
      // Implement your logic to update item quantity in the cart
      return state;
    case 'CLEAR_CART':
      // Implement your logic to clear the cart
      return state;
    default:
      return state;
  }
};

const CartProvider = (props) => {
    const [cart, dispatch] = useReducer(cartReducer, []); // You can initialize the cart with any initial value
  
    // You can use the useEffect hook to persist the cart to localStorage or other storage methods
  
    return (
      <CartContext.Provider value={{ cart, dispatch }}>
        {props.children}
      </CartContext.Provider>
    );
  };
  
  CartProvider.propTypes = {
    children: PropTypes.node, // PropTypes validation for "children"
  };
const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export { CartProvider, useCart };
