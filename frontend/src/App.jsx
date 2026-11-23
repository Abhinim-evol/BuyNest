
import { useState } from 'react'
import './App.css'

const categories = [
  { name: 'Electronics', icon: '💻' },
  { name: 'Fashion', icon: '👕' },
  { name: 'Home & Living', icon: '🏠' },
  { name: 'Beauty', icon: '✨' },
  { name: 'Sports', icon: '⚽' },
  { name: 'Accessories', icon: '⌚' },
]

const products = [
  {
    id: 1,
    name: 'Premium Wireless Headphones',
    category: 'Electronics',
    price: 2499,
    oldPrice: 3999,
    rating: '4.8',
    image: 'photo-1505740420928-5e560c06d30e',
    tag: 'BESTSELLER',
  },
  {
    id: 2,
    name: 'Classic Minimal Watch',
    category: 'Accessories',
    price: 1899,
    oldPrice: 2999,
    rating: '4.7',
    image: 'photo-1523275335684-37898b6baf30',
    tag: 'POPULAR',
  },
  {
    id: 3,
    name: 'Modern Running Sneakers',
    category: 'Fashion',
    price: 3299,
    oldPrice: 4999,
    rating: '4.9',
    image: 'photo-1542291026-7eec264c27ff',
    tag: 'TRENDING',
  },
  {
    id: 4,
    name: 'Premium Sunglasses',
    category: 'Accessories',
    price: 999,
    oldPrice: 1599,
    rating: '4.6',
    image: 'photo-1511499767150-a48a237f0083',
    tag: 'NEW',
  },
  {
    id: 5,
    name: 'Modern Smart Camera',
    category: 'Electronics',
    price: 4599,
    oldPrice: 5999,
    rating: '4.8',
    image: 'photo-1516035069371-29a1b244cc32',
    tag: 'POPULAR',
  },
  {
    id: 6,
    name: 'Elegant Travel Backpack',
    category: 'Fashion',
    price: 1499,
    oldPrice: 2299,
    rating: '4.5',
    image: 'photo-1553062407-98eeb64c6a62',
    tag: 'DEAL',
  },
]

function App() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [cart, setCart] = useState(0)

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase())

    const matchesCategory =
      activeCategory === 'All' || product.category === activeCategory

    return matchesSearch && matchesCategory
  })

  return (
    <div className="app">
      <div className="announcement">
        Free shipping on orders above ₹999 | Welcome to BuyNest
      </div>

      <header className="navbar">
        <a href="#" className="logo">
          Buy<span>Nest</span><small>.</small>
        </a>

        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#categories">Categories</a>
          <a href="#products">Shop</a>
          <a href="#footer">Contact</a>
        </nav>

        <div className="nav-actions">
          <button className="icon-button" aria-label="Account">♙</button>
          <button className="cart-button" aria-label="Shopping cart">
            🛒 <span>Cart ({cart})</span>
          </button>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <span className="eyebrow">YOUR WORLD, YOUR STORE</span>
            <h1>
              Discover products.
              <br />
              <span>Love every moment.</span>
            </h1>
            <p>
              Explore quality products, amazing deals and everything
              you need — all in one place.
            </p>
            <a href="#products" className="primary-button">
              Explore Collection <span>→</span>
            </a>
            <div className="hero-trust">
              <span>✓ Quality products</span>
              <span>✓ Secure shopping</span>
            </div>
          </div>

          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1607082349566-187342175e2f?w=1000"
              alt="Shopping collection"
            />
            <div className="hero-floating-card">
              <span>✦</span>
              <div>
                <strong>Special Offers</strong>
                <small>Up to 50% OFF</small>
              </div>
            </div>
          </div>
        </section>

        <section className="benefits">
          <div><span>🚚</span><div><strong>Free Shipping</strong><small>On orders above ₹999</small></div></div>
          <div><span>🔒</span><div><strong>Secure Payments</strong><small>100% secure checkout</small></div></div>
          <div><span>↩️</span><div><strong>Easy Returns</strong><small>Hassle-free returns</small></div></div>
          <div><span>💬</span><div><strong>24/7 Support</strong><small>We're here to help</small></div></div>
        </section>

        <section className="categories section" id="categories">
          <div className="section-heading">
            <div>
              <span className="eyebrow">EXPLORE MORE</span>
              <h2>Shop by Category</h2>
            </div>
            <span className="section-note">Find what you love.</span>
          </div>

          <div className="category-grid">
            {categories.map((category) => (
              <button
                className="category-card"
                key={category.name}
                onClick={() => {
                  setActiveCategory(category.name)
                  document.getElementById('products').scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <span className="category-icon">{category.icon}</span>
                <strong>{category.name}</strong>
                <span className="category-arrow">↗</span>
              </button>
            ))}
          </div>
        </section>

        <section className="products section" id="products">
          <div className="section-heading">
            <div>
              <span className="eyebrow">HANDPICKED FOR YOU</span>
              <h2>Featured Products</h2>
            </div>
            <span className="section-note">Quality meets great prices.</span>
          </div>

          <div className="shop-toolbar">
            <div className="filters">
              {['All', 'Electronics', 'Fashion', 'Accessories'].map((category) => (
                <button
                  key={category}
                  className={activeCategory === category ? 'filter active' : 'filter'}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <input
              className="search-input"
              type="search"
              placeholder="Search products..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>

          <div className="product-grid">
            {filteredProducts.map((product) => (
              <article className="product-card" key={product.id}>
                <div className="product-image">
                  <img
                    src={`https://images.unsplash.com/${product.image}?w=600&auto=format&fit=crop`}
                    alt={product.name}
                  />
                  <span className="product-tag">{product.tag}</span>
                  <button className="wishlist" aria-label="Add to wishlist">♡</button>
                </div>
                <div className="product-info">
                  <span className="product-category">{product.category}</span>
                  <h3>{product.name}</h3>
                  <div className="rating">★ {product.rating} <span>(120+ reviews)</span></div>
                  <div className="product-bottom">
                    <div className="price">
                      <strong>₹{product.price.toLocaleString('en-IN')}</strong>
                      <del>₹{product.oldPrice.toLocaleString('en-IN')}</del>
                    </div>
                    <button
                      className="add-cart"
                      onClick={() => setCart((current) => current + 1)}
                    >
                      + Add
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <p className="empty-message">No products found. Try another search.</p>
          )}
        </section>

        <section className="promo-banner">
          <div>
            <span className="eyebrow">LIMITED TIME OFFER</span>
            <h2>Big deals. Better choices.</h2>
            <p>Make your shopping experience more rewarding with BuyNest.</p>
            <a href="#products" className="promo-button">Shop Now →</a>
          </div>
          <div className="promo-symbol">50<span>%</span><small>OFF</small></div>
        </section>
      </main>

      <footer className="footer" id="footer">
        <div>
          <a href="#" className="logo footer-logo">Buy<span>Nest</span><small>.</small></a>
          <p>Your everyday shopping destination.<br />Discover more. Shop better.</p>
        </div>
        <div className="footer-links">
          <a href="#categories">Categories</a>
          <a href="#products">Shop</a>
          <a href="#footer">Contact</a>
        </div>
        <p className="copyright">© 2026 BuyNest. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
