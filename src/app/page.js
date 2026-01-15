import '../styles/page.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faLinkedinIn, faYelp } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import PhotoGallery from '@/components/photogallery';

export default function Home() {
  return (
    <>
      <section id="home">
        <div className="hero">
          <div className="hero-content">
            <h1>MARCI METZGER</h1>
            <h2>THE RIDGE REALTY GROUP</h2>
            <p>Pahrump Realtor</p>
            <button className="hero-button" href="tel:206-919-6886">CALL NOW</button>
          </div>
        </div>
      </section>

    <section id="about-us" className="section">
      <div className="content">
        <div className="about-container">
          <div className="profile-group">
            <Image 
              src="/images/realtor.png" 
              alt="Marci Metzger" 
              width={300} 
              height={300}
              className="about-image"
            />
            <div className="about-text">
              <h2>Marci Metzger</h2>
              <p className="subtitle">REALTOR FOR NEARLY 3 DECADES!</p>
              <p>Marci was a REALTOR, then licensed Broker, in Washington State. Now, she is enjoying the sunshine, and helping clients in Southern Nevada. Having helped buyers and sellers in many markets since 1995, she is a wealth of knowledge.</p>
            </div>
          </div>
          
          <a href="tel:206-919-6886" className="call-button">
            <FontAwesomeIcon icon={faPhone} />
            206-919-6886
          </a>
          
          <div className="badges">
            <Image src="/images/badge1.jpg" alt="Badge 1" width={100} height={100} className="badge-image" />
            <Image src="/images/badge2.jpg" alt="Badge 2" width={100} height={100} className="badge-image" />
            <Image src="/images/badge3.png" alt="Badge 3" width={100} height={100} className="badge-image" />
            <Image src="/images/badge4.png" alt="Badge 4" width={100} height={100} className="badge-image" />
          </div>
        </div>
      </div>
    </section>

    <section id="listings" className="section">
      <div className="content">
        <h2>GET IT SOLD</h2>
        <div className="grid">
          <div className="card">
            <div className="card-image-wrapper">
              <Image 
                src="/images/kitchen.jpg" 
                alt="Kitchen" 
                fill
                className="card-image"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="card-content">
              <h3>Top Residential Sales Last 5 Years</h3>
              <p>We helped nearly 90 clients in 2021, and closed 28.5 million in sales! Our team works hard everyday to grow and learn, so that we may continue to excel in our market. Our clients deserve our best, & we want to make sure our best is better every year.</p>
            </div>
          </div>

          <div className="card">
            <div className="card-image-wrapper">
              <Image 
                src="/images/pool.jpg" 
                alt="Pool" 
                fill
                className="card-image"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="card-content">
              <h3>Don&apos;t Just List it...</h3>
              <p>Get it SOLD! We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home.</p>
            </div>
          </div>

          <div className="card">
            <div className="card-image-wrapper">
              <Image 
                src="/images/other.jpg" 
                alt="Other Services" 
                fill
                className="card-image"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="card-content">
              <h3>Guide to Buyers</h3>
              <p>Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="search-section">
  <div className="search-container">
    <h2>Find Your Dream Home</h2>

    <div className="search-card">
      <form className="search-form">
        {/* Row 1 */}
        <div className="form-row">
          <input type="text" placeholder="Location" name="location" />
          <select name="type">
            <option value="">Type</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="townhouse">Townhouse</option>
          </select>
          <select name="sort">
            <option value="">Sort By</option>
            <option value="newest">Newest</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
          </select>
        </div>

        {/* Row 2 */}
        <div className="form-row">
          <select name="bedrooms">
            <option value="">Bedrooms</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
          </select>

          <select name="baths">
            <option value="">Baths</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
          </select>

          <input type="number" placeholder="Min Price" name="minPrice" />
          <input type="number" placeholder="Max Price" name="maxPrice" />

          <button type="submit">Search Now</button>
        </div>
      </form>
    </div>
  </div>
</section>


    <PhotoGallery />
    <section id="services" className="section">
      <div className="content">
        <div className="service-card">
          <div className="service-image-wrapper">
            <Image 
              src="/images/serv1.jpg" 
              alt="Our Services" 
              fill
              className="card-image"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="service-content">
            <h2>Real Estate Done Right</h2>
            <p>Nervous about your property adventure? Don&apos;t be. Whether you&apos;re getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!</p>
          </div>
        </div>

        <div className="service-card">
          <div className="service-image-wrapper">
            <Image 
              src="/images/serv2.jpg" 
              alt="Commercial & Residential" 
              fill
              className="card-image"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="service-content">
            <h2>Commercial & Residential</h2>
            <p>Large or small, condo or mansion, we can find it and get at the price that&apos;s right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put you hard-earned dollars.</p>
          </div>
        </div>

        <div className="service-card">
          <div className="service-image-wrapper">
            <Image 
              src="/images/serv3.jpg" 
              alt="Rely on Expertise" 
              fill
              className="card-image"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="service-content">
            <h2>Rely on Expertise</h2>
            <p>If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.</p>
          </div>
        </div>
      </div>
    </section>

<section id="contact" className="contact-section">
  <div className="contact-container">
    
    {/* Left: Contact Form */}
    <div className="contact-form">
      <h2>Send a Message</h2>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>

    {/* Right: Contact Info */}
    <div className="contact-info">
      <h2>Call or Visit</h2>

      <p className="contact-name">
        Marci Metzger<br />
        <span>THE RIDGE REALTY GROUP</span>
      </p>

      <p>
        3190 HW-160, Suite F<br />
        Pahrump, Nevada 89048<br />
        United States
      </p>

      <p className="contact-phone">
        📞 (206) 919-6886
      </p>

      <div className="office-hours">
        <h3>Office Hours</h3>
        <p><strong>Open today</strong></p>
        <p>08:00 am – 07:00 pm</p>
        <p>Open daily: 8:00 am – 7:00 pm</p>
        <p className="note">
          Appointments outside office hours available upon request. Just call!
        </p>
      </div>

      <a
        href="https://wa.me/12069196886"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
      >
        💬 Chat on WhatsApp
      </a>
    </div>

  </div>
</section>
<footer className="footer-section">
  <div className="footer-container">
    <p>Copyright © 2023 Marci METZGER Homes - All Rights Reserved</p>
    
    <div className="social-icons">
      <a href="https://www.facebook.com/MarciHomes" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a href="https://www.instagram.com/marciandlauren_nvrealtors/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="https://www.linkedin.com/in/marci-metzger-30642496/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
      <a href="https://www.yelp.com/biz/xr3yQN_m2SgO0R_7S6p62w" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faYelp} />
      </a>
    </div>
  </div>
</footer>

    </>
  );
}