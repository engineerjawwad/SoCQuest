import React from 'react';
import microchip4 from '../assets/images/microchip4.jpg';

export default function Engagements() {
  return (
    <section>
      <div className="container">
        {/* A unique banner image for the engagements page */}
        <img
          src={microchip4}
          alt="Microchip"
          style={{ width: '100%', maxHeight: '350px', objectFit: 'cover', borderRadius: '6px', marginBottom: '1.5rem' }}
        />
        <h2>Career Opportunities</h2>
        <p>
          Join us  for a  rewarding career path pushing the boundaries  to make  significant  impact is the field of Semiconductor
        </p>
        <ul>
          <li>Analog Design and Layout   </li>
          <li>Digital RTL Design  </li>
          <li>Digital Verification</li>
          <li>Physical  Design  </li>
        </ul>
        <h3 style={{ marginTop: '1.5rem', color: '#0e2743' }}>Apply Now</h3>
        {/* Improved form styling via the career-form class */}
        <form action="#" method="post" className="career-form">
          <label htmlFor="career-name">Name</label>
          <input type="text" id="career-name" name="name" required />

          <label htmlFor="career-exp">Relevant  Experience</label>
          <input type="text" id="career-exp" name="experience" required />

          <label htmlFor="career-phone">Phone number</label>
          <input type="text" id="career-phone" name="phone" required />

          <label htmlFor="career-email">Email :</label>
          <input type="email" id="career-email" name="email" required />

          <label htmlFor="career-attachment">Attachment :</label>
          <input type="file" id="career-attachment" name="attachment" />

          <button type="submit" className="btn" style={{ marginTop: '1rem' }}>Submit</button>
        </form>
        <p style={{ marginTop: '1rem' }}>
          Or  contact  us  on <a href="mailto:careers@socquest.com">careers@socquest.com</a>
        </p>
      </div>
    </section>
  );
}