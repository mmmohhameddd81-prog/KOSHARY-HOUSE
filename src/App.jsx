import { useCallback, useState } from 'react';
import { CartProvider } from './context/CartContext';
import { ToastProvider } from './context/ToastContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Menu from './components/Menu';
import Offers from './components/Offers';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Toast from './components/Toast';

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const openCheckout = useCallback(() => {
    setCartOpen(false);
    setCheckoutOpen(true);
  }, []);

  const openCart = useCallback(() => {
    setCheckoutOpen(false);
    setCartOpen(true);
  }, []);

  return (
    <ToastProvider>
      <CartProvider>
        <Navbar onOpenCart={openCart} onOpenCheckout={openCheckout} />
        <main>
          <Hero onOpenCheckout={openCheckout} />
          <Highlights />
          <Menu />
          <Offers onOpenCart={openCart} />
          <About />
          <WhyChooseUs />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <Cart open={cartOpen} onClose={() => setCartOpen(false)} onOpenCheckout={openCheckout} />
        <Checkout open={checkoutOpen} onClose={() => setCheckoutOpen(false)} />
        <Toast />
      </CartProvider>
    </ToastProvider>
  );
}

export default App;
