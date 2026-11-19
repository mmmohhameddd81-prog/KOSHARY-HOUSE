/* oxlint-disable react/only-export-components -- context + hook colocated by design */
import { createContext, useCallback, useContext, useMemo } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { restaurantConfig } from '../config/restaurant';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useLocalStorage('koshary-house-cart', []);

  const addItem = useCallback((product, quantity = 1) => {
    setItems((current) => {
      const existing = current.find((item) => item.id === product.id);
      if (existing) {
        return current.map((item) =>
          item.id === product.id
            ? { ...item, quantity: Math.max(1, Math.min(99, item.quantity + quantity)) }
            : item
        );
      }
      return [
        ...current,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: Math.max(1, Math.min(99, quantity)),
        },
      ];
    });
  }, [setItems]);

  const updateQuantity = useCallback((id, quantity) => {
    setItems((current) =>
      current
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(1, Math.min(99, Number(quantity) || 1)) }
            : item
        )
    );
  }, [setItems]);

  const removeItem = useCallback((id) => {
    setItems((current) => current.filter((item) => item.id !== id));
  }, [setItems]);

  const clearCart = useCallback(() => setItems([]), [setItems]);

  const getItemQuantity = useCallback(
    (id) => items.find((item) => item.id === id)?.quantity ?? 0,
    [items]
  );

  const itemCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items]
  );

  const deliveryFee = items.length > 0 ? restaurantConfig.deliveryFee : 0;
  const total = subtotal + deliveryFee;

  const value = useMemo(
    () => ({
      items, addItem, updateQuantity, removeItem, clearCart,
      getItemQuantity, itemCount, subtotal, deliveryFee, total,
    }),
    [items, addItem, updateQuantity, removeItem, clearCart, getItemQuantity, itemCount, subtotal, deliveryFee, total]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used inside a CartProvider');
  return context;
}
