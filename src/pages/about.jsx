import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Navbar />

      {/* About Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #1a1a1a 60%, #2c0000 100%)",
          color: "#fff",
          padding: "80px 5%",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "2.8rem", marginBottom: "1rem" }}>
          About Enreach Solution
        </h1>
        <p style={{ fontSize: "1.2rem", maxWidth: 700, margin: "0 auto", opacity: 0.85 }}>
          Delhi's leading cyber forensic and digital investigation firm — trusted by
          law enforcement, legal professionals, and businesses alike.
        </p>
      </section>

      {/* Mission Section */}
      <section style={{ background: "#fff", padding: "60px 5%" }}>
        <div className="container about-flex" style={{ display: "flex", alignItems: "center", gap: 40, flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 300px" }}>
            <img
              src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&w=600&q=80"
              alt="Enreach Solution Team"
              style={{ width: "100%", borderRadius: 12, objectFit: "cover" }}
            />
          </div>
          <div style={{ flex: "2 1 400px" }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Our Mission</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#444" }}>
              At Enreach Solution, our mission is to uncover the truth behind every digital
              crime with precision, integrity, and speed. We specialize in investigating
              complex digital crimes such as cybercrime, intellectual property theft, and
              financial fraud. Our team of certified experts utilizes cutting-edge tools and
              methodologies to uncover hidden evidence, trace digital footprints, and provide
              court-admissible reports.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#444", marginTop: "1rem" }}>
              We handle cases involving data breaches, malware analysis, insider threats, and
              digital espionage. Whether working with corporations, law enforcement, or legal
              professionals, we deliver reliable, discreet, and timely results — ensuring
              accuracy, integrity, and professionalism in every investigation.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={{ background: "#f8f9fa", padding: "60px 5%", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontSize: "2rem", marginBottom: "2rem" }}>Our Core Values</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {[
              { icon: "🔒", title: "Confidentiality", desc: "Client privacy is our top priority. Every case is handled with the utmost discretion." },
              { icon: "⚖️", title: "Integrity", desc: "We uphold the highest ethical standards, ensuring all evidence is handled lawfully." },
              { icon: "🎯", title: "Accuracy", desc: "Our forensic reports are precise, thorough, and legally admissible in court." },
              { icon: "⚡", title: "Speed", desc: "Rapid response and 24/7 availability for urgent cyber incidents." },
            ].map((value) => (
              <div
                key={value.title}
                style={{
                  background: "#fff",
                  borderRadius: 16,
                  padding: "2rem 1.5rem",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>{value.icon}</div>
                <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem", color: "#1a1a1a" }}>{value.title}</h3>
                <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: 1.6 }}>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ background: "#1a1a1a", color: "#fff", padding: "60px 5%", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Ready to Work With Us?</h2>
        <p style={{ fontSize: "1.1rem", opacity: 0.85, marginBottom: "2rem" }}>
          Contact our expert team for a free consultation on your cyber forensics needs.
        </p>
        <Link to="/#contact" className="btn">Get in Touch</Link>
      </section>

      <Footer />
    </>
  );
};

export default About;
