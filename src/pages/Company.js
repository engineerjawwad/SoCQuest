import React from 'react';
import microchip1 from '../assets/images/microchip1.png';

export default function Company() {
  return (
    <section>
      <div className="container about">
        <img src={microchip1} alt="Microchip" />
        <div className="about-text">
          <h2>About Us</h2>
          <p>SoCQuest is a fabless semiconductor company which develops analog and mixed‑mode integrated circuits (ICs) and provides all design services related to this development from spec to silicon. With engineering expertise of over 20 years in the field of electronics, SoCQuest provide end to end solutions for IP.</p>
          <p>We are focused and our engagement model is concrete:</p>
          <ul>
            <li>Allowing our customers to outsource either complete chip design to our team or jointly work on specific areas of design.</li>
            <li>We work with our customers from design planning stage, specifications development, architecture exploration and verification to system modeling and test bench development.</li>
            <li>It is crucial for us to ensure the complete satisfaction of our customers, both in our products and in the way we do business.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}