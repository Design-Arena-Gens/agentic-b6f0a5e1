import Link from "next/link";

type Metric = {
  label: string;
  value: string;
  description: string;
};

const metrics: Metric[] = [
  {
    label: "Carbon Reduction",
    value: "38%",
    description: "Average CO₂ reduction across Beton low-clinker mixes versus standard OPC.",
  },
  {
    label: "Delivery Network",
    value: "210+",
    description: "Regional batching partners supplying ultra-high-performance concrete on-demand.",
  },
  {
    label: "Digital Oversight",
    value: "24/7",
    description: "Telemetry-backed curing and strength tracking across enrolled job sites.",
  },
];

const services = [
  {
    title: "High-Performance Mix Design",
    copy: "Tailor compressive strength, slump, and curing profiles with data-backed admixture presets for supertall, bridge, and precast projects.",
  },
  {
    title: "Sustainable Aggregate Sourcing",
    copy: "Blend recycled aggregates and supplementary cementitious materials without sacrificing durability or schedule certainty.",
  },
  {
    title: "Digital Pour Management",
    copy: "Deploy IoT sensors, drone capture, and AI reports to keep pours within tolerance and surface deviations before they cascade.",
  },
];

const caseStudies = [
  {
    title: "Skyline Link Transit Hub",
    summary:
      "Beton’s UHPC mix unlocked 28-day strengths ahead of schedule, enabling an accelerated precast assembly sequence in a high-traffic urban corridor.",
    result: "4-week schedule compression",
  },
  {
    title: "Littoral Defense Seawall",
    summary:
      "Marine-grade geopolymer concrete resisted chloride intrusion while local aggregates trimmed haulage emissions across a 3.2 km barrier.",
    result: "62% reduction in lifecycle corrosion costs",
  },
  {
    title: "Vertex Innovation Campus",
    summary:
      "Lightweight structural slabs combining hollow-core forms and fiber reinforcement cut embodied carbon for a LEED Platinum award.",
    result: "Earned LEED Platinum certification",
  },
];

export default function HomePage() {
  return (
    <div className="page">
      <header className="hero">
        <nav className="nav">
          <span className="logo">Beton</span>
          <div className="nav-links">
            <Link href="#solutions">Solutions</Link>
            <Link href="#platform">Platform</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#contact">Contact</Link>
          </div>
        </nav>
        <div className="hero-content">
          <h1>Concrete intelligence for resilient cities.</h1>
          <p>
            Beton unifies mix science, supply chain orchestration, and digital field controls so you can deliver
            infrastructure that lasts generations while meeting climate targets today.
          </p>
          <div className="cta-group">
            <Link className="btn primary" href="#contact">
              Launch a project brief
            </Link>
            <Link className="btn secondary" href="#platform">
              Explore the Beton platform
            </Link>
          </div>
        </div>
      </header>

      <section id="solutions" className="section metrics">
        <h2>Performance with accountability</h2>
        <p className="intro">
          Every Beton engagement begins with quantifiable targets spanning embodied carbon, curing kinetics, and onsite
          assurance. Our team then pairs materials innovation with machine intelligence to consistently hit the mark.
        </p>
        <div className="grid three">
          {metrics.map((metric) => (
            <article key={metric.label} className="card metric-card">
              <span className="metric-value">{metric.value}</span>
              <h3>{metric.label}</h3>
              <p>{metric.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="platform" className="section platform">
        <div className="platform-content">
          <h2>The Beton operating layer</h2>
          <p>
            BetonOS keeps your stakeholders aligned from specification through handover. Integrate BIM workflows,
            telemetry sensors, weather data, and supplier performance into a unified command cockpit that never sleeps.
          </p>
          <ul>
            <li>Predictive batching models for slump retention and pumpability window optimization.</li>
            <li>Automated compliance documentation with ASTM, EN, and project-specific tolerances.</li>
            <li>Proactive alerts for pour sequencing, curing anomalies, and QA checkpoints.</li>
          </ul>
          <Link className="btn primary small" href="#contact">
            Request a BetonOS demo
          </Link>
        </div>
        <div className="platform-visual">
          <div className="mockup">
            <div className="mockup-header">
              <span>BetonOS • Pour 18A</span>
              <span className="status">Live</span>
            </div>
            <div className="mockup-body">
              <div className="mockup-chart">
                <span className="chart-title">Strength forecast</span>
                <div className="chart-bars">
                  {Array.from({ length: 6 }).map((_, idx) => (
                    <span
                      key={idx}
                      className="bar"
                      style={{ height: `${40 + idx * 10}px`, opacity: 0.6 + idx * 0.06 }}
                    />
                  ))}
                </div>
              </div>
              <div className="mockup-stats">
                <div>
                  <span className="mockup-label">Target</span>
                  <strong>60 MPa</strong>
                </div>
                <div>
                  <span className="mockup-label">Projected</span>
                  <strong>63 MPa</strong>
                </div>
                <div>
                  <span className="mockup-label">Variance</span>
                  <strong>+5%</strong>
                </div>
              </div>
              <div className="mockup-feed">
                <span className="feed-entry positive">• Slump 180mm, within tolerance.</span>
                <span className="feed-entry positive">• Admixture dose auto-balanced for 24°C ambient.</span>
                <span className="feed-entry alert">• Pump line pressure trending +7%. Inspect seals.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section services">
        <h2>What Beton delivers</h2>
        <div className="grid three">
          {services.map((service) => (
            <article key={service.title} className="card">
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section projects">
        <div className="projects-header">
          <h2>Projects that redefine concrete impact</h2>
          <p>
            From rapid transit megaprojects to coastal defense, Beton powers delivery teams working where tolerance for
            failure is zero.
          </p>
        </div>
        <div className="grid three">
          {caseStudies.map((project) => (
            <article key={project.title} className="card project-card">
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <span className="project-result">{project.result}</span>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact">
        <div className="contact-card">
          <h2>Shape the next resilient structure</h2>
          <p>
            Submit your project scope and Beton will assemble a bespoke mix strategy, materials roadmap, and execution
            playbook within five working days.
          </p>
          <form className="contact-form">
            <div className="form-row">
              <label htmlFor="name">Project lead</label>
              <input id="name" name="name" type="text" placeholder="Alex Rivera" />
            </div>
            <div className="form-row">
              <label htmlFor="email">Work email</label>
              <input id="email" name="email" type="email" placeholder="alex@infrastructure.studio" />
            </div>
            <div className="form-row">
              <label htmlFor="scope">Project scope</label>
              <textarea
                id="scope"
                name="scope"
                rows={4}
                placeholder="Outline structural classes, performance targets, and delivery milestones."
              />
            </div>
            <button className="btn primary" type="submit">
              Submit brief
            </button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-top">
          <span className="logo">Beton</span>
          <p>Advanced concrete systems for a regenerative built environment.</p>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Beton Materials Intelligence</span>
          <Link href="mailto:hello@beton.city">hello@beton.city</Link>
        </div>
      </footer>
    </div>
  );
}
