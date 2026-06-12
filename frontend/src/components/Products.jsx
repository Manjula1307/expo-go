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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0fdf4',
    fontFamily: "'Poppins', sans-serif",
    padding: '80px 20px',
  },
  heading: {
    fontSize: '32px',
    fontWeight: '700',
    color: '#188754',
    marginBottom: '20px',
    textAlign: 'center',
  },
  description: {
    fontSize: '18px',
    color: '#555',
    maxWidth: '800px',
    textAlign: 'center',
  },
  searchFilterWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    marginTop: '40px',
    flexWrap: 'wrap',
  },
  searchInput: {
    padding: '12px 20px',
    borderRadius: '30px',
    border: '1px solid #ccc',
    width: '280px',
    outline: 'none',
    fontSize: '16px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
  },
  filterDropdown: {
    padding: '12px 20px',
    borderRadius: '30px',
    border: '1px solid #ccc',
    width: '220px',
    outline: 'none',
    fontSize: '16px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
  },
  productsWrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '24px',
    marginTop: '40px',
  },
productCard: {
  backgroundColor: '#fff',
  borderRadius: '20px',
  width: '300px',
  padding: '20px',
  textAlign: 'center',
  cursor: 'pointer',
  transition: 'all .3s ease',
  boxShadow: '0 10px 30px rgba(0,0,0,.08)',
},
productImage: {
  width: '100%',
  height: '220px',
  objectFit: 'cover',
  borderRadius: '12px',
},
  productName: {
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '8px',
  },
  productDesc: {
    fontSize: '14px',
    color: '#666',
    marginBottom: '8px',
  },
  productCategory: {
    fontSize: '14px',
    color: '#1D4ED8',
    marginBottom: '4px',
  },
  productPrice: {
    fontSize: '16px',
    color: '#16A34A',
    fontWeight: '700',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginTop: '10px',
  },
addToCartButton: {
  background: '#188754',
  color: '#fff',
  border: 'none',
  borderRadius: '10px',
  padding: '10px 18px',
  fontWeight: '600',
  cursor: 'pointer',
},

buyNowButton: {
  background: '#0f172a',
  color: '#fff',
  border: 'none',
  borderRadius: '10px',
  padding: '10px 18px',
  fontWeight: '600',
  cursor: 'pointer',
},
  cartBar: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '20px',
    width: '100%',
    maxWidth: '1200px',
    marginTop: '20px',
  },
  cartIcon: {
    backgroundColor: '#facc15',
    color: '#000',
    border: 'none',
    borderRadius: '20px',
    padding: '8px 16px',
    fontSize: '14px',
    cursor: 'url(/cursor.cur), default',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  checkoutIcon: {
    backgroundColor: '#10b981',
    color: '#fff',
    border: 'none',
    borderRadius: '20px',
    padding: '8px 16px',
    fontSize: '14px',
    cursor: 'url(/cursor.cur), default',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  // ✅ Modal styles
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    display: 'flex',
    flexDirection: 'row',
    maxWidth: '800px',
    width: '90%',
    padding: '20px',
    gap: '20px',
  },
  modalImageWrapper: {
    flex: '1',
  },
  modalImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  modalContent: {
    flex: '2',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
};

export default Products;

