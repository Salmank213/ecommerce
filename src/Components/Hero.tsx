import Image from "next/image"
import "../Style/Hero.css"

function Hero () {
    return(
        <div>

        {/* Featured Product */}
        <section className="featured-product">
          <h1>Featured Product</h1>
          <div>
          <img src="/Rocket single seater 1.png" alt="Sofa" />
          <h3>Rocket single seater</h3>
          <button>BUY NOW</button>
          </div>
        </section>
  
        {/* Top Picks for You */}
        <section className="top-picks">
          <h2>Top Picks for You</h2>
          <div className="product-grid">
            <div className="product-card">
              <img src="/Outdoor bar table and stool 1.png" alt="Product 1" />
              <h3>Product 1</h3>
              <p>$99.99</p>
            </div>
            <div className="product-card">
              <img src="/Plain console with teak mirror 1.png" alt="Product 2" />
              <h3>Product 2</h3>
              <p>$79.99</p>
            </div>
            <div className="product-card">
              <img src="/Granite dining table with dining chair 1.png" alt="Product 3" />
              <h3>Product 3</h3>
              <p>$49.99</p>
            </div>
            <div className="product-card">
              <img src="/Trenton modular sofa_3 1.png" alt="Product 4" />
              <h3>Product 4</h3>
              <p>$59.99</p>
            </div>
          </div>
        </section>
  
        {/* Three-Column Section */}
        <section className="three-columns">
          <div className="column">
            <h3>Address</h3>
            <p>123 Main Street, City, Country</p>
          </div>
          <div className="column">
            <h3>Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/shop">Shop</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="column">
            <h3>Newsletter</h3>
            <form>
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </section>
      </div>
    )
}
export default Hero