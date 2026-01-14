import '../styles/page.css';

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

      <section id="about" className="section">
        <div className="content">
          <h2>About</h2>
          <p>About content goes here...</p>
        </div>
      </section>

      <section id="listings" className="section">
        <div className="content">
          <h2>Listings</h2>
          <div className="grid">
            <div className="card">Listing One</div>
            <div className="card">Listing Two</div>
            <div className="card">Listing Three</div>
          </div>
        </div>
      </section>

      <section id="photos" className="section">
        <div className="content">
          <h2>Photos</h2>
          <p>Photo gallery goes here...</p>
        </div>
      </section>

      <section id="services" className="section">
        <div className="content">
          <h2>Services</h2>
          <p>Services content goes here...</p>
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