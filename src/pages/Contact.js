import React from 'react';

export default function Contact() {
  return (
    <section style={{ padding: '3rem 0' }}>
      <div style={{ width: '90%', maxWidth: '1100px', margin: '0 auto' }}>
        {/* Address Section */}
        <h2 style={{ color: '#0e2743', marginBottom: '1.5rem' }}>Address and Email Address</h2>

        <div
          style={{
            backgroundColor: '#5ca7e2', // light blue
            color: '#ffffff', // white text
            padding: '1.5rem',
            borderRadius: '8px',
            marginBottom: '2rem',
            lineHeight: '1.6',
            boxSizing: 'border-box',
          }}
        >
          <p style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Hyderabad Office</p>
          <p>
            HNo 1-4-165/62,<br />
            Old Alwal,<br />
            Hyderabad,<br />
            Telangana - 500010
          </p>
          <p style={{ marginTop: '1rem' }}>Need help and information? We will contact you</p>
          <p style={{ marginTop: '0.5rem' }}>
            Get in touch with us:{' '}
            <a
              href="mailto:sales@socquest.com"
              style={{
                color: '#ffffff',
                fontWeight: 'bold',
                textDecoration: 'underline',
              }}
            >
              sales@socquest.com
            </a>
          </p>
        </div>

        {/* People Section */}
        <h2 style={{ color: '#0e2743', marginBottom: '1.5rem' }}>Our Key People</h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {[
            {
              name: 'Srinivas Paladugu',
              text: `Paladugu Srinivas is a seasoned professional with over 17 years of expertise in Analog Circuit Design within the VLSI domain. His experience includes designing High-Speed SERDES and working across advanced technology nodes. Proficient in HDMI, DDR, and SERDES protocols, Srinivas specializes in high-precision clock designs, mixed-signal verification, and automatic design flows.`,
            },
            {
              name: 'Zia Abbas',
              text: `A distinguished professor at IIIT Hyderabad with extensive experience in teaching and technology. He has shaped the careers of many students, guiding them in the field of technology. He has been honored with numerous publications and accolades. His expertise in ML and AI is instrumental in realizing analog design automation.`,
            },
            {
              name: 'Rahul Krishna',
              text: `Rahul Krishna brings over 12 years of expertise in Analog Circuit Design within the VLSI domain. His background includes High-Speed SERDES design and work on advanced technology nodes. Proficient in HDMI and DDR protocols, he excels in high-precision clock designs, mixed-signal verification, and automatic design flows.`,
            },
          ].map((person, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#0e2743',
                color: '#ffffff',
                padding: '1.5rem',
                borderRadius: '8px',
                boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
                lineHeight: '1.6',
                boxSizing: 'border-box',
              }}
            >
              <h4 style={{ marginBottom: '0.5rem', fontSize: '1.3rem', color: '#ffffff' }}>{person.name}</h4>
              <p style={{ color: '#ffffff' }}>{person.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
