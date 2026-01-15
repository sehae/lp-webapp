import '../styles/page.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import PhotoGallery from '@/components/photogallery';

export default function Home() {
  return (
    <>
      <section id="home">
        <div className="hero">
          <div className="hero-content">
            <h1>MARCI METZGER - THE RIDGE REALTY GROUP</h1>
            <p>Pahrump Realtor</p>
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

      <PhotoGallery />
<section id="services" className="section">
  <h2>OUR SERVICES</h2>
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
        <h2>Our Services</h2>
        <p>Nervous about your property adventure? Don't be. Whether you&apos;re getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!</p>
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

      <section id="contact" className="section">
        <div className="content">
          <h2>Contact</h2>
          <p>Contact form goes here...</p>
        </div>
      </section>
    </>
  );
}