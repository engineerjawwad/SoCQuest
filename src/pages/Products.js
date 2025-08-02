import React from 'react';
import microchip3 from '../assets/images/microchip3.png';

export default function Products() {
  return (
    <>
      {/* Product Description Section */}
      <section style={{ padding: '3rem 0' }}>
        <div style={{ width: '90%', maxWidth: '1100px', margin: '0 auto' }}>
          <img
            src={microchip3}
            alt="Microchip"
            style={{
              width: '100%',
              maxHeight: '350px',
              objectFit: 'cover',
              borderRadius: '6px',
              marginBottom: '1.5rem',
            }}
          />

          <div
            style={{
              backgroundColor: '#5ca7e2',
              color: '#ffffff',
              padding: '1.5rem',
              borderRadius: '8px',
              lineHeight: '1.6',
              marginBottom: '2rem',
            }}
          >
            <h2 style={{ marginBottom: '1rem' }}>Products</h2>
            <p>
              Every chip design needs standard IP. The use of Silicon IP blocks is a very important part of almost all
              ASIC-design projects. When using existing designs, and leveraging existing knowledge, you will not only be
              able to reduce cost, but also risk, and time plan. The team has over 20 years of average experience bringing
              Analog IP blocks to production across a wide range of markets and process nodes.
            </p>
          </div>
        </div>
      </section>

      {/* Product Grid Section */}
      <section style={{ padding: '0 0 3rem 0' }}>
        <div style={{ width: '90%', maxWidth: '1100px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '2rem',
            }}
          >
            {[
              {
                title: 'PLLs',
                features: [
                  'Full clocking solution for any application such as USB, DDR, Serdes, HDMI.',
                  'CDR solutions for high speeds synchronous design.',
                  'General purpose PLLs for standalone applications like ASIC, SOC.',
                ],
              },
              {
                title: 'PMUs',
                features: [
                  'Uniquified power management solution for SOC/ASIC.',
                  'Proven designs in Switching regulators like BUCK, BOOST, BUCK/BOOST.',
                  'On chip LDOs with high efficiency and PSR optimization solutions.',
                ],
              },
              {
                title: 'Data Converters',
                features: [
                  'Data conversion circuits with high resolution and high accuracy.',
                  'Expertise in SAR, Pipelined and SDM ADCs.',
                  'Resolutions as high as 16bit at low speeds and 12bit at high speeds.',
                ],
              },
              {
                title: 'Serial Links',
                features: [
                  'Analog front end for high speed serial links such as HDMI, USB, PCI, MIPI.',
                  'Full analog solutions of TX and RX operating at the latest standards.',
                  'Low speed solutions of LVDS, SPI and I2C.',
                ],
              },
            ].map((product, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#0e2743',
                  color: '#ffffff',
                  padding: '1.5rem',
                  borderRadius: '8px',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                  lineHeight: '1.6',
                }}
              >
                <h3 style={{ marginBottom: '0.75rem', color: '#ffffff' }}>{product.title}</h3>
                <ul style={{ paddingLeft: '1.2rem' }}>
                  {product.features.map((f, i) => (
                    <li key={i} style={{ marginBottom: '0.5rem' }}>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
