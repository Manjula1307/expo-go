import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ctScanMachine from '../assets/products/ctScanMachine.jpg';
import mriScanner from '../assets/products/mriScanner.jpg';
import patientMonitor from '../assets/products/patientMonitor.jpg';
import portableVentilator from '../assets/products/portableVentilator.jpg';
import Checkout from './Checkout';
import Cart from './Cart';

function Products({openLogin}) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: 'ease-in-out',
    });
  }, []);
  

  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [cart, setCart] = useState([]);

  // ✅ Modal product view state
  const [selectedProduct, setSelectedProduct] = useState(null);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.name === product.name);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const productList = [
    {
      name: 'CT Scan Machine',
      price: '₹ 1,50,000',
      image: ctScanMachine,
      category: 'Scanning',
      description: 'Advanced CT scan machine with high-resolution imaging for critical care diagnosis.',
    },
    {
      name: 'Portable Ventilator',
      price: '₹ 80,000',
      image: portableVentilator,
      category: 'Ventilators',
      description: 'Compact, portable ventilator for emergency and critical care units.',
    },
    {
      name: 'Patient Monitor',
      price: '₹ 45,000',
      image: patientMonitor,
      category: 'Monitoring',
      description: 'Multi-parameter patient monitor with ECG, SpO2, and NIBP monitoring.',
    },
    {
      name: 'MRI Scanner',
      price: '₹ 3,00,000',
      image: mriScanner,
      category: 'Scanning',
      description: 'High-field MRI scanner designed for advanced diagnostic imaging.',
    },
  ];

  const filteredProducts = productList.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === '' || product.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="products" style={styles.productsSection}>
      <h2 data-aos="fade-up" style={styles.heading}>Our Products</h2>

      <div style={styles.cartBar} data-aos="fade-up">
        <button style={styles.cartIcon} onClick={() => setIsCartOpen(!isCartOpen)}> 🛒 Cart ({cart.length})</button>
        <button style={styles.checkoutIcon} onClick={() => setIsCheckoutOpen(true)}>💳 Checkout</button>
      </div>

      {isCheckoutOpen && (
        <Checkout
          onClose={() => setIsCheckoutOpen(false)}
          cartItems={cart}
          calculateTotal={() => {
            return cart.reduce((total, item) => {
              const priceNumber = Number(item.price.replace(/[^\d]/g, ''));
              return total + priceNumber * item.quantity;
            }, 0);
          }}
        />
      )}

      {isCartOpen && (
        <Cart
          cart={cart}
          setCart={setCart}
          onClose={() => setIsCartOpen(false)}
          onCheckoutClick={() => {
            setIsCartOpen(false);
            setIsCheckoutOpen(true);
          }}
            openLogin={openLogin}  // ✅ Pass the prop you got from App.jsx
        />
      )}

      <p data-aos="fade-up" style={styles.description}>
        Explore our wide range of critical-care medical equipment.
      </p>

      <div style={styles.searchFilterWrapper} data-aos="fade-up">
        <input
          type="text"
          placeholder="🔍 Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={styles.searchInput}
        />
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          style={styles.filterDropdown}
        >
          <option value="">All Categories</option>
          <option value="Scanning">Scanning</option>
          <option value="Ventilators">Ventilators</option>
          <option value="Monitoring">Monitoring</option>
        </select>
      </div>

      <div style={styles.productsWrapper} data-aos="fade-up">
        {filteredProducts.map((product, index) => (
          <div
            key={index}
            style={styles.productCard}
            onClick={() => setSelectedProduct(product)}
          >
            <img src={product.image} alt={product.name} style={styles.productImage} />
            <h3 style={styles.productName}>{product.name}</h3>
            <p style={styles.productDesc}>{product.description}</p>
            <p style={styles.productCategory}>Category: {product.category}</p>
            <p style={styles.productPrice}>{product.price}</p>
            <div style={styles.buttonGroup}>
              <button style={styles.addToCartButton} onClick={(e) => { e.stopPropagation(); addToCart(product); }}> 🛒 Add to Cart</button>
              <button style={styles.buyNowButton} onClick={(e) => e.stopPropagation()}>🛍️ Buy Now</button>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Modal Overlay for product details */}
      {selectedProduct && (
        <div style={styles.overlay} onClick={() => setSelectedProduct(null)}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div style={styles.modalImageWrapper}>
              <img src={selectedProduct.image} alt={selectedProduct.name} style={styles.modalImage} />
            </div>
            <div style={styles.modalContent}>
              <h2>{selectedProduct.name}</h2>
              <p>{selectedProduct.description}</p>
              <p><strong>Category:</strong> {selectedProduct.category}</p>
              <p style={{ color: '#16A34A', fontWeight: '700' }}>{selectedProduct.price}</p>
              <button style={styles.addToCartButton} onClick={() => { addToCart(selectedProduct); setSelectedProduct(null); }}>Add to Cart</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

const styles = {
  productsSection: {
    minHeight: '100vh',
    padding: '120px 20px',
    background: 'linear-gradient(180deg,#f8fffe,#eefaf4)',
    fontFamily: "'Poppins', sans-serif",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  heading: {
    fontSize: '48px',
    fontWeight: '800',
    color: '#0f172a',
    textAlign: 'center',
    marginBottom: '15px',
  },

  description: {
    fontSize: '18px',
    color: '#64748b',
    textAlign: 'center',
    maxWidth: '700px',
    marginBottom: '40px',
  },

  cartBar: {
    width: '100%',
    maxWidth: '1200px',
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '15px',
    marginBottom: '30px',
  },

  cartIcon: {
    background: '#fff',
    border: '1px solid #e2e8f0',
    padding: '12px 18px',
    borderRadius: '12px',
    fontWeight: '600',
    cursor: 'pointer',
    boxShadow: '0 5px 15px rgba(0,0,0,.05)',
  },

  checkoutIcon: {
    background: '#188754',
    color: '#fff',
    border: 'none',
    padding: '12px 18px',
    borderRadius: '12px',
    fontWeight: '600',
    cursor: 'pointer',
    boxShadow: '0 5px 15px rgba(24,135,84,.25)',
  },

  searchFilterWrapper: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: '50px',
  },

  searchInput: {
    width: '320px',
    padding: '14px 18px',
    borderRadius: '12px',
    border: '1px solid #dbeafe',
    outline: 'none',
    fontSize: '15px',
    background: '#fff',
    boxShadow: '0 5px 20px rgba(0,0,0,.05)',
  },

  filterDropdown: {
    width: '220px',
    padding: '14px 18px',
    borderRadius: '12px',
    border: '1px solid #dbeafe',
    outline: 'none',
    fontSize: '15px',
    background: '#fff',
    boxShadow: '0 5px 20px rgba(0,0,0,.05)',
  },

  productsWrapper: {
    width: '100%',
    maxWidth: '1200px',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
    gap: '30px',
  },

  productCard: {
    background: '#fff',
    borderRadius: '24px',
    overflow: 'hidden',
    boxShadow: '0 15px 40px rgba(0,0,0,.08)',
    border: '1px solid rgba(0,0,0,.05)',
    transition: 'all .3s ease',
    cursor: 'pointer',
  },

  productImage: {
    width: '100%',
    height: '220px',
    objectFit: 'cover',
  },

  productName: {
    fontSize: '22px',
    fontWeight: '700',
    color: '#0f172a',
    margin: '18px 0 10px',
    padding: '0 20px',
  },

  productDesc: {
    fontSize: '14px',
    color: '#64748b',
    lineHeight: '1.7',
    padding: '0 20px',
  },

  productCategory: {
    color: '#2563eb',
    fontWeight: '600',
    padding: '0 20px',
    marginTop: '10px',
  },

  productPrice: {
    color: '#188754',
    fontSize: '22px',
    fontWeight: '800',
    padding: '0 20px',
    marginTop: '10px',
  },

  buttonGroup: {
    display: 'flex',
    gap: '10px',
    padding: '20px',
  },

  addToCartButton: {
    flex: 1,
    background: '#188754',
    color: '#fff',
    border: 'none',
    padding: '12px',
    borderRadius: '12px',
    fontWeight: '600',
    cursor: 'pointer',
  },

  buyNowButton: {
    flex: 1,
    background: '#0f172a',
    color: '#fff',
    border: 'none',
    padding: '12px',
    borderRadius: '12px',
    fontWeight: '600',
    cursor: 'pointer',
  },

  overlay: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0,0,0,.65)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },

  modal: {
    background: '#fff',
    borderRadius: '24px',
    display: 'flex',
    gap: '30px',
    width: '90%',
    maxWidth: '900px',
    padding: '30px',
    boxShadow: '0 25px 60px rgba(0,0,0,.2)',
  },

  modalImageWrapper: {
    flex: 1,
  },

  modalImage: {
    width: '100%',
    borderRadius: '16px',
  },

  modalContent: {
    flex: 2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '15px',
  },
};

export default Products;

