import React from 'react';
import heroImage from '../assets/images/microchip2.png';
import './Home.css';

export default function Home() {
  return (
    <div className="home-background">
      <section
        className="hero"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="hero-content">
          <h1>End-to-end analog IC design and IP solutions</h1>
        </div>
      </section>

      {}
      <section className="join-section">
        <h2>Join us today</h2>
      </section>
    </div>
  );
}
