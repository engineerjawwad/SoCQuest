import React from 'react';

export default function Services() {
  return (
    <>
      <section style={{ padding: '0' }}>
        <div
          style={{
            backgroundColor: '#5ca7e2',
            color: '#fff',
            padding: '2rem',
            borderRadius: '8px',
            marginBottom: '1rem',
            lineHeight: '1.6',
            maxWidth: '1100px',
            margin: '0 auto 1rem auto',
          }}
        >
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Design Services</h2>
          <p>
            SoCQuest expertise lies in analog end-to-end solutions with a system-level application. We provide an extensive set
            of full‑flow IC design services focused on supporting semiconductor and systems companies in the delivery of analog
            IPs for SoC, ASIC or FPGA projects. These services range from a full turnkey solution that delivers a production-ready
            design, to sub‑system or IP block development, or having our engineers augment your existing design teams with
            specialist design, application or EDA tools expertise.
          </p>
          <p>
            If you need design services or want to outsource a specific functional block, let us know. We have an experienced team
            that can help you off‑load.
          </p>
        </div>
      </section>

      {/* Analog Design */}
      <section style={{ padding: '0' }}>
        <div
          style={{
            backgroundColor: '#0e2743',
            color: '#fff',
            padding: '1.8rem',
            borderRadius: '8px',
            margin: '0 auto 1rem auto',
            lineHeight: '1.6',
            maxWidth: '1100px',
          }}
        >
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Analog Design and Services</h3>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li>Amplifiers, Reference generation circuits</li>
            <li>Power Management units (LDO, Buck-Boost Regulators)</li>
            <li>Audio and Power Amplifiers</li>
            <li>High speed serial links (Serializer/Deserializer)</li>
            <li>Data converters</li>
            <li>Clocking circuits, PLL and Clock Data Recovery (CDR) Calibration blocks</li>
          </ul>
        </div>
      </section>

      {/* Layout */}
      <section style={{ padding: '0' }}>
        <div
          style={{
            backgroundColor: '#0e2743',
            color: '#fff',
            padding: '1.8rem',
            borderRadius: '8px',
            margin: '0 auto 1rem auto',
            lineHeight: '1.6',
            maxWidth: '1100px',
          }}
        >
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Analog and RF Layout</h3>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li>Layout services for Standard cells design enablement</li>
            <li>General Purpose IOs</li>
            <li>ESD layout designs for HBM, CDM and MM</li>
            <li>Layouts for TSMC, SS, GF foundry nodes</li>
            <li>DRC, LVS, PERC, DFM, Reliability like EMIR, Aging</li>
          </ul>
        </div>
      </section>

      {/* Simulation */}
      <section style={{ padding: '0' }}>
        <div
          style={{
            backgroundColor: '#0e2743',
            color: '#fff',
            padding: '1.8rem',
            borderRadius: '8px',
            margin: '0 auto 1rem auto',
            lineHeight: '1.6',
            maxWidth: '1100px',
          }}
        >
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Analog Simulation Verification/Automation</h3>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li>Automation for full corner cases coverage for blocks/IP</li>
            <li>Mixed-signal simulations with analog and digital</li>
            <li>PVT simulations</li>
            <li>Analog Behavioral modeling</li>
            <li>
              Hierarchical modeling for every cell to the lowest level of primitive cell using VerilogAMS, VerilogA,
              Verilog, VHDL, SystemVerilog
            </li>
            <li>Behavioral model at IP/System level for early access of the pin interface</li>
          </ul>
        </div>
      </section>

      {/* Digital */}
      <section style={{ padding: '0' }}>
        <div
          style={{
            backgroundColor: '#0e2743',
            color: '#fff',
            padding: '1.8rem',
            borderRadius: '8px',
            margin: '0 auto 1rem auto',
            lineHeight: '1.6',
            maxWidth: '1100px',
          }}
        >
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Digital Frontend and Backend</h3>
          <h4 style={{ marginBottom: '0.8rem' }}>RTL Design and Verification</h4>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li>Robust RTL designs for smaller SoCs</li>
            <li>Expertise in RTL designs across IPs, SoC and ASICs</li>
            <li>Optimal design with reduced area and power</li>
            <li>Digital Verification of the RTL, Test coverage</li>
          </ul>
          <h4 style={{ margin: '1.5rem 0 0.8rem' }}>Implementation and Physical Design</h4>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li>Synthesizing the netlist</li>
            <li>Timing closures, STA</li>
            <li>Placement and routing</li>
            <li>DFT</li>
          </ul>
        </div>
      </section>
    </>
  );
}
