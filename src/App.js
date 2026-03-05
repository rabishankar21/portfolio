import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// resume
import resume from "./assets/resume/resume.pdf";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, Row, Col, Card, Button } from "react-bootstrap";
// profile
import profile from "./assets/profile.png";
import profile1 from "./assets/profile1.png";
// experience
import experience from "./assets/project/proj_4.png";
// achievements
import achievements from "./assets/achievment/isro.jpg";
import achievements1 from "./assets/achievment/nit.jpg";
import achievements2 from "./assets/achievment/sahc.png";
import achievements3 from "./assets/achievment/icsp.jpg";
import achievements4 from "./assets/achievment/dicv.jpg";
import achievements5 from "./assets/achievment/bcet.png";
// project
import project from "./assets/project/proj_1.png";
import project1 from "./assets/project/proj_4.png";
import project2 from "./assets/project/proj_3.jpg";
import project3 from "./assets/project/proj_7.png";
import project5 from "./assets/project/proj_5.png";
// video
// import projectVideo from "./assets/project/project1.mp4";
// import projectVideo1 from "./assets/project/project2.mp4";
// import projectVideo2 from "./assets/project/project5.mp4";
// import projectVideo3 from "./assets/project/project3.mp4";
// import projectVideo4 from "./assets/project/project7.mp4";

import { FaLinkedinIn, FaGithub, FaYoutube, FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFileDownload } from "react-icons/fa";

export default function Portfolio() {
  const [count, setCount] = useState(0);

useEffect(() => {
  let start = 0;
  const end = 30;
  const duration = 3000;
  const increment = end / (duration / 30);

  const timer = setInterval(() => {
    start += increment;
    if (start >= end) {
      setCount(end);
      clearInterval(timer);
    } else {
      setCount(Math.floor(start));
    }
  }, 30);

   AOS.init({
    offset: 150,
    duration: 800,
    once: false, // animation ek hi baar chale
  });


  return () => clearInterval(timer);
}, []);

  return (
    <div style={{ fontFamily: "Poppins, sans-serif", backgroundColor: "#0b0f19", color: "#e6edf3" }}>
      {/* Navbar */}
      {/* Premium Navbar */}
      <Navbar
        expand="lg"
        fixed="top"
        style={{
          background: "rgba(2,6,23,0.7)",
          backdropFilter: "blur(14px)",
          borderBottom: "1px solid #1f2937",
          padding: "10px 0"
        }}
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="#home" style={{ fontWeight: "700", fontSize: 20 }}>
            <span style={{ color: "#38bdf8" }}>Rabi Shankar</span> Singh
          </Navbar.Brand>

          <Navbar.Toggle />

          <Navbar.Collapse>
            <Nav className="ms-auto" style={{ gap: "20px", alignItems: "center" }}>
              {[
                ["Home", "#home"],
                ["About", "#about"],
                ["Experience", "#experience"],
                ["Achievements", "#achievements"],
                ["Projects", "#projects"],
                ["Contact", "#contact"]
              ].map(([name, link]) => (
                <Nav.Link
                  key={name}
                  href={link}
                  style={{
                    color: "#e5e7eb",
                    fontWeight: 500,
                    transition: "0.3s"
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#38bdf8")}
                  onMouseLeave={(e) => (e.target.style.color = "#e5e7eb")}
                >
                  {name}
                </Nav.Link>
              ))}

             <a rel="noreferrer" href="mailto:rabidgp2004@gmail.com">
  <Button
    variant="outline-info"
    size="sm"
    style={{ borderRadius: 20, padding: "6px 16px" }}
  >
    Hire Me
  </Button>
</a>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      {/* Hero Section */}
      <section
        id="home"
        data-aos="fade-up"
        style={{
          paddingTop: 120,
          paddingBottom: 80,
          color: "white",
          position: "relative",
          overflow: "hidden",
          background: "radial-gradient(circle at 20% 20%, #1e3a8a, transparent 40%), radial-gradient(circle at 80% 30%, #7c3aed, transparent 40%), radial-gradient(circle at 50% 80%, #0ea5e9, transparent 40%), #020617"
        }}
      >
        {/* animated glow blobs */}
        <div
          style={{
            position: "absolute",
            width: 400,
            height: 400,
            background: "#6366f1",
            filter: "blur(120px)",
            top: -100,
            left: -100,
            opacity: 0.4,
            animation: "float 8s ease-in-out infinite"
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 300,
            height: 300,
            background: "#ec4899",
            filter: "blur(120px)",
            bottom: -80,
            right: -80,
            opacity: 0.4,
            animation: "float 10s ease-in-out infinite"
          }}
        />

        <Container style={{ position: "relative", zIndex: 2 }}>
          <Row className="align-items-center">
            <Col lg={6} md={12} className="text-center text-lg-start">

              <h1 className="fw-bold">
                <span className="typing">Hello</span>
              </h1>
              <h1 className="fw-bold">
                <span className="typing">I'm Rabi Shankar Singh</span>
              </h1>
              <h4 className="mt-3">
                <span className="typing2">AIML Engineer & Web Developer</span>
              </h4>
              <p className="mt-3">
                I build AI-powered apps, dashboards, and full-stack web applications.
              </p>
              <Button href={resume} download  variant="light" className="mt-2">Download Resume</Button>
            </Col>
            <Col lg={6} md={12} className="text-center mt-4 mt-lg-0">

              <img
  src={profile}
  alt="profile"
  className="rounded-circle shadow img-fluid"
  style={{
    
    width: "100%",
    
  }}
/>


            </Col>
          </Row>
        </Container>

        <style>{`
          .typing {
            border-right: 3px solid #38bdf8;
            white-space: nowrap;
            overflow: hidden;
            display: inline-block;
            animation: typing 2s steps(20), blink 0.8s infinite;
          }

          .typing2 {
            border-right: 3px solid #a78bfa;
            white-space: nowrap;
            overflow: hidden;
            display: inline-block;
            width: 0;
            animation: typing2 3s steps(30) 2s forwards, blink 0.8s infinite;
          }

          @keyframes typing {
            from { width: 0 }
            to { width: 100% }
          }

          @keyframes typing2 {
            from { width: 0 }
            to { width: 100% }
          }

          @keyframes blink {
            50% { border-color: transparent }
          }

          /* 3D CARD EFFECT */
.card3d {
  border: 1px solid #1f2937;
  position: relative;
  overflow: hidden; /* important */
}

.card3d:hover {
  transform: rotateY(8deg) rotateX(6deg) scale(1.05);
  box-shadow: 0 0 25px rgba(56,189,248,0.5),
              0 0 60px rgba(56,189,248,0.2);
  border-color: #38bdf8;
}

.card3d img {
  transition: transform 0.4s ease;
  border-radius: 10px 10px 0 0;
}


.card3d:hover img {
  transform: translateZ(30px) scale(1.05);
}

          @keyframes float {
            0%,100% { transform: translateY(0px); }
            50% { transform: translateY(-30px); }
          }
        `}
        </style>
      </section>

      {/* About */}
        <section id="about" className="py-5" data-aos="fade-up" style={{ backgroundColor: "#0f172a", color: "#e6edf3" }}>
        <Container>
          <h2 className="text-center mb-5">About Me</h2>

          <Row className="align-items-start">
            {/* LEFT SIDE */}
            <Col lg={4} md={12} className="mb-4">
              <div className="text-center mb-4 fadeUp">
                <img
                  src={profile1}
                  alt="profile"
                  style={{
                    width: 160,
                    height: 160,
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "4px solid #38bdf8"
                  }}
                />
              </div>

              <div className="fadeUp">
                <h6 className="mb-3">Skills</h6>
                {[
                  ["Python", 85],
                  ["Machine Learning", 80],
                  ["Data Analysis", 75],
                  ["HTML/CSS/JS", 75],
                  ["MySQL", 70]
                ].map(([name, val]) => (
                  <div key={name} className="mb-3">
                    <small>{name} {val}%</small>
                    <div style={{ background: "#1f2937", height: 6, borderRadius: 10 }}>
                      <div
                        style={{
                          width: `${val}%`,
                          height: 6,
                          background: "linear-gradient(90deg,#22c55e,#4ade80)",
                          borderRadius: 10,
                          transition: "width 1.5s"
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Col>

            {/* RIGHT SIDE */}
            <Col lg={8} md={12} className="fadeUp">
              <p style={{ lineHeight: 1.8 }}>
                I am a B.Tech Computer Science (AI & ML) student passionate about building
                real-world AI solutions and full-stack applications. I enjoy combining
                Artificial Intelligence with practical development to create impactful
                digital products.
              </p>

              <p style={{ lineHeight: 1.8 }}>
              I have developed and deployed an official veterinary hospital website as 
              voluntary social impact work to support free animal treatment and welfare.
               My work has been recognized by NSPCL and West Bengal Veterinary authorities. 
               I am passionate about using technology to solve meaningful problems and create positive impact.
              </p>
              <div className="mt-4" style={{ fontSize: 15 }}>
                {[
                  ["Profile", "Artificial Intelligence & Machine Learning"],
                  ["Domain", "AI/ML, Computer Vision, Web Applications, Social Impact Projects"],
                  ["Education", "B.Tech in Computer Science & Engineering (AI & ML) – Pursuing"],
                  ["Language", "English, Hindi & Bengali"],
                  ["BI Tools", "Python, OpenCV, Pytorch, TensorFlow, Flask, Git & GitHub"],
                  ["Other Skills", "MySQL, REST APIs, Deployment (GoDaddy, cPanel), PDF Generation"],
                  ["Interest", "Animal Welfare, Building Useful Technology, Learning New Skills"]
                ].map(([label, value]) => (
                  <div key={label} style={{ display: "grid", gridTemplateColumns: "140px 1fr", marginBottom: 8 }}>
                    <span style={{ fontWeight: 600, color: "#94a3b8" }}>{label}:</span>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 fadeUp">
                <h3
                  style={{
                    fontWeight: 700,
                    background: "linear-gradient(90deg,#38bdf8,#22c55e,#a78bfa)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    marginBottom: 12
                  }}
                >
                  <span>{count}+</span> Projects Completed 
                </h3>

                <Button
                  variant="outline-info"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/rabi-sankar-singh-b142b6264?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  style={{ borderRadius: 30, padding: "8px 20px" }}
                >
                  Connect on LinkedIn
                </Button>
              </div>
            </Col>
          </Row>

          {/* animation */}
          <style>{`
            .fadeUp {
              opacity: 0;
              transform: translateY(30px);
              animation: fadeUp 1s ease forwards;
            }

            @keyframes fadeUp {
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}</style>
        </Container>
      </section>

       {/* Experience / Education / Achievements */}
      <section id="experience" className="py-5" style={{ backgroundColor: "#020617" }}>
        <Container>
          <style>{`
            .card3d {
  overflow: hidden; /* important */
   border: 1px solid #1f2937;
  position: relative;
}

.card3d img {
  transition: transform 0.4s ease;
  border-radius: 10px 10px 0 0;
}
  .card3d:hover {
  transform: rotateY(8deg) rotateX(6deg) scale(1.05);
  box-shadow: 0 0 25px rgba(56,189,248,0.5),
              0 0 60px rgba(56,189,248,0.2);
  border-color: #a78bfa;
;
}

          `}</style>
          <h2 className="text-center mb-5">Experience</h2>
          <Row>
            {/* Experience */}
            <Col xs={12} sm={6} md={6} lg={4} className="mb-4" data-aos="fade-up">
              <Card className="h-100 shadow card3d" style={{ background: "#020617",color: "#e6edf3", border: "1px solid #1f2937" }}>
                <Card.Img variant="top" src={experience} style={{ overflow: "hidden", borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
                <Card.Body>
                  <Card.Title>Experience</Card.Title>
                  <Card.Text style={{ fontSize: 14 }}>
                    Web Developer Intern – Government of West Bengal. Worked on real-world
                    web applications, dashboards, and deployment projects with live users.
                  </Card.Text>
                  <Card.Text style={{ fontSize: 14 }}>
                    Tech Use: HTML, CSS, BOOTSTRAP, JAVASCRIPT, PHP, MYSQL
                  </Card.Text>
                  <Button rel="noreferrer" href="https://vettapas.com" variant="primary">View Website</Button>
                </Card.Body>
              </Card>
            </Col>
            </Row>
        </Container>
      </section>

            {/* Achievements */}
            <section id="achievements" className="py-5" style={{ backgroundColor: "#020617" }}>
        <Container>
          <h2 className="text-center mb-5">Achievements</h2>
          <Row>
              <Col xs={12} sm={6} md={6} lg={4} className="mb-4" data-aos="fade-up" >
              <Card className="h-100 shadow" style={{ background: "#020617", color: "#e6edf3", border: "1px solid #1f2937" }}>
                <Card.Img variant="top" src= {achievements5} />
                <Card.Body>
                  <Card.Title>CyberCon Cybersecurity Seminar – BCET</Card.Title>

                  <Card.Text style={{ fontSize: 14 }}>
                          Participated in the CyberCon Cybersecurity Seminar at BCET organized by The Drop Organization, Durgapur. Asked advanced cybersecurity questions during the session and received the "CyberCon" book as recognition for active participation and innovative thinking.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={6} lg={4} className="mb-4" data-aos="fade-up">
              <Card className="h-100 shadow" style={{ background: "#020617", color: "#e6edf3", border: "1px solid #1f2937" }}>
                <Card.Img variant="top" src= {achievements} />
                <Card.Body>
                  <Card.Title>ISRO Interaction Program</Card.Title>
                  <Card.Text style={{ fontSize: 14 }}>
                    Participated in ISRO’s official interaction program in Kolkata.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={6} lg={4} className="mb-4" data-aos="fade-up" >
              <Card className="h-100 shadow" style={{ background: "#020617", color: "#e6edf3", border: "1px solid #1f2937" }}>
                <Card.Img variant="top" src= {achievements1} />
                <Card.Body>
                  <Card.Title>UAV Bootcamp – NIT Durgapur</Card.Title>
                  <Card.Text style={{ fontSize: 14 }}>
                    Certified in UAV and drone technologies from NIT Durgapur.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={6} lg={4} className="mb-4" data-aos="fade-up">
              <Card className="h-100 shadow" style={{ background: "#020617", color: "#e6edf3", border: "1px solid #1f2937" }}>
                <Card.Img variant="top" src= {achievements2} />
                <Card.Body>
                  <Card.Title>Government Internship</Card.Title>
                  <Card.Text style={{ fontSize: 14 }}>
                    Web development intern at Government of West Bengal.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={6} lg={4} className="mb-4" data-aos="fade-up">
              <Card className="h-100 shadow" style={{ background: "#020617", color: "#e6edf3", border: "1px solid #1f2937" }}>
                <Card.Img variant="top" src= {achievements3} />
                <Card.Body>
                  <Card.Title>ICSP Tech Certification</Card.Title>
                  <Card.Text style={{ fontSize: 14 }}>
                    Certified participant of ICSP technology conference, Kolkata.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={6} lg={4} className="mb-4" data-aos="fade-up">
              <Card className="h-100 shadow" style={{ background: "#020617", color: "#e6edf3", border: "1px solid #1f2937" }}>
                <Card.Img variant="top" src= {achievements4} />
                <Card.Body>
                  <Card.Title>Best Student Award</Card.Title>
                  <Card.Text style={{ fontSize: 14 }}>
                    Recognized for academic excellence on Foundation Day.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Projects */}
      <section id="projects" className="py-5" style={{ backgroundColor: "#020617" }}>
        <Container>
          <style>{`
            /* VIDEO HOVER CARD */
.videoCard {
  position: relative;
  overflow: hidden;
}

.videoCard .thumb {
  width: 100%;
  display: block;
  transition: opacity 0.4s ease;
}

.videoCard .video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.4s ease;
}

/* hover effect */
.videoCard:hover .thumb {
  opacity: 0;
}

.videoCard:hover .video {
  opacity: 1;
}

          `}</style>
          <h2 className="text-center mb-5">Projects</h2>
          <Row>
            <Col xs={12} sm={6} md={6} lg={4} className="mb-4" data-aos="fade-up">
              <Card className="h-100 shadow" style={{ background: "#020617", color:"white", border: "1px solid #1f2937" }}>
                {/* <div className="videoCard">
                  <img src={project} className="thumb" />
                   <video src={projectVideo} muted autoPlay loop playsInline className="video"/>
                </div> */}
                <Card.Img variant="top" src= {project} />
                <Card.Body>
                  <Card.Title>Project: Smart AI Traffic Assistance</Card.Title>
                  <Card.Text style={{ fontSize: 14 }}>
                    Built an AI-powered traffic management system using computer vision to optimize signal timing and reduce congestion.
                  </Card.Text>
                  <Card.Text style={{ fontSize: 14 }}>
                    Python, OpenCV, TensorFlow, YOLO, Flask
                  </Card.Text>
                  <Button rel="noreferrer" href="https://github.com/rabishankar21/ai-traffic-dashboard" variant="primary">View Project</Button>
                </Card.Body>
              </Card>
            </Col>
            
            <Col xs={12} sm={6} md={6} lg={4} className="mb-4" data-aos="fade-up">
              <Card className="h-100 shadow" style={{ background: "#020617", color: "white", border: "1px solid #1f2937" }}>
                {/* <div className="videoCard">
                  <img src={project1} className="thumb" />
                   <video src={projectVideo1} muted autoPlay loop playsInline className="video"/>
                </div> */}
                <Card.Img variant="top" src= {project1} />
                <Card.Body>
                  <Card.Title>Project: A Veterinary Blogging And consultancy Website</Card.Title>
                  <Card.Text style={{ fontSize: 14 }}>
                    Developed a full-stack website for veterinary blogs and online consultation with modern UI and backend support.
                  </Card.Text>
                  <Card.Text style={{ fontSize: 14 }}>
                    HTML, CSS, JavaScript, BOOTSTRAP, PHP, MYSQL
                  </Card.Text>
                  <Button rel="noreferrer" href="https://vettapas.com" variant="primary">View Project</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={6} lg={4} className="mb-4" data-aos="fade-up">
              <Card className="h-100 shadow" style={{ background: "#020617", color:"white", border: "1px solid #1f2937" }}>
                {/* <div className="videoCard">
                  <img src={project5} className="thumb" />
                   <video src={projectVideo2} muted autoPlay loop playsInline className="video"/>
                </div> */}
                <Card.Img variant="top" src= {project5} />
                <Card.Body>
                  <Card.Title>Project: E-Commerce Website Prototype </Card.Title>
                  <Card.Text style={{ fontSize: 14 }}>
                    Designed a basic e-commerce prototype with database integration. 
                  </Card.Text>
                  <Card.Text style={{ fontSize: 14 }}>
                    HTML, CSS, JAVASCRIPT, BOOTSTRAP, PHP, MYSQL
                  </Card.Text>
                  <Button rel="noreferrer" href="#" variant="primary">View Project</Button>
                </Card.Body>
              </Card>
            </Col>
            
            <Col xs={12} sm={6} md={6} lg={4}  className="mb-4" data-aos="fade-up">
              <Card className="h-100 shadow" style={{ background: "#020617", color:"white", border: "1px solid #1f2937" }}>
                 {/* <div className="videoCard">
                  <img src={project2} className="thumb" />
                   <video src={projectVideo3} muted autoPlay loop playsInline className="video"/>
                </div> */}
                <Card.Img variant="top" src= {project2} />
                <Card.Body>
                  <Card.Title>Project: Megamart Sales Dashboard</Card.Title>
                  <Card.Text style={{ fontSize: 14 }}>
                    Designed an interactive sales dashboard with data visualization and insights for business performance analysis.
                  </Card.Text>
                  <Card.Text style={{ fontSize: 14 }}>
                    Power BI, CSV, Python, Pandas, Numpy, Matplotlib, Seaborn
                  </Card.Text>
                  <Button rel="noreferrer" href="https://github.com/rabishankar21/megamart-ecommerce-sales-dashboard" variant="primary">View Project</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={6} lg={4} className="mb-4" data-aos="fade-up">
              <Card className="h-100 shadow" style={{ background: "#020617", color:"white", border: "1px solid #1f2937" }}>
                {/* <div className="videoCard">
                  <img src={project3} className="thumb" />
                   <video src={projectVideo4} muted autoPlay loop playsInline className="video"/>
                </div> */}
                <Card.Img variant="top" src= {project3} />
                <Card.Body>
                  <Card.Title>Project: Lok-MArt Sales Dashboard</Card.Title>
                  <Card.Text style={{ fontSize: 14 }}>
                    Created a dynamic analytics dashboard to track sales trends, revenue, and customer insights.
                  </Card.Text>
                  <Card.Text style={{ fontSize: 14 }}>
                    Power BI, CSV, Python, Pandas, Numpy, Matplotlib, Seaborn
                  </Card.Text>
                  <Button rel="noreferrer" href="https://github.com/rabishankar21/Lok-Mart-Sales-Dashboard" variant="primary">View Project</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact */}
      <section id="contact" className="py-5 contactSec">
  <Container>
    <style>{`
    /* CONTACT SECTION */
.contactSec {
  background: #000;
  color: white;
}

.contactCard {
  padding: 25px;
  background: #0b0f19;
  border-radius: 12px;
  transition: 0.3s;
}

.contactCard:hover {
  transform: translateY(-8px);
  box-shadow: 0 0 25px #a855f7;
}

.contactCard .icon {
  font-size: 28px;
  margin-bottom: 10px;
  color: #a855f7;
}

.contactBtn {
   background: #a855f7;
  border: none;
  padding: 12px 25px;
  border-radius: 30px;
  font-weight: bold;
  margin-top: 10px;
  transition: 0.3s;
}

.contactBtn: hover {
   background: #8707ff;
}

.socials span {
  display: inline-block;
  margin: 8px;
  background: #0b0f19;
  padding: 10px 14px;
  border-radius: 50%;
  transition: 0.3s;
}

.socials a {
  display: inline-block;
  margin: 8px;
  background: #0b0f19;
  padding: 12px;
  border-radius: 50%;
  color: white;
  font-size: 18px;
  transition: 0.3s;
}

.socials a: hover {
  background: #a855f7;
  color: white;
}
.contactCard {
  background: #111;
  padding: 25px;
  border-radius: 15px;
  transition: 0.3s;
}

.contactCard: hover {
  transform: translateY(-5px);
  box-shadow: 0 0 20px rgba(155, 89, 182, 0.5); /* purple glow */
}

.icon {
  font-size: 28px;
  color: #9b59b6; /* purple theme (as you wanted) */
  margin-bottom: 10px;
}
.floating-whatsapp { position: fixed; right:18px; bottom:18px; z-index:9999; border-radius:50%; width:56px; height:56px; display:flex; align-items:center; justify-content:center; background:#25D366; color:#fff; box-shadow:0 8px 24px rgba(0,0,0,0.18); font-size:22px; }
a{
text-decoration: none;
}
[data-aos] {
  transition-property: transform, opacity! important;
}

          `}</style>
    <h2 className="text-center mb-2">Contact Me</h2>
    <p className="text-center text-muted mb-5">
      Below are the details to reach out to me!
    </p>

   

<Row className="text-center xs-12 sm-6 md-5 lg-3" data-aos="fade-up">
  {[
    [<FaMapMarkerAlt />, "ADDRESS", "West Bengal, India"],
    [<FaPhoneAlt />, "CONTACT NUMBER", <a href="tel:+917001408918" rel="noreferrer">+91-7001408918</a>,],
    [<FaEnvelope />, "EMAIL ADDRESS", <a href="mailto:rabidgp2004@gmail.com" rel="noreferrer" className="text-decoration-none">
    rabidgp2004@gmail.com
  </a>],
    [
  <FaFileDownload />,
  "DOWNLOAD RESUME",
  <a href={resume} rel="noreferrer" download className="text-decoration-none">
    Download
  </a>
]

  ].map(([icon, title, value]) => (
    <Col md={3} sm={6} className="mb-4" key={title}>
      <div className="contactCard">
        <div className="icon">{icon}</div>
        <h6>{title}</h6>
        <p>{value}</p>
      </div>
    </Col>
  ))}
</Row>


    {/* CTA */}
    <div className="text-center mb-4">
      <h3>Have a Question?</h3>
      <a href="mailto:rabidgp2004@gmail.com">
      <button className="contactBtn">CLICK HERE</button></a>
    </div>

    {/* Social */}
    <div className="text-center">
      <p className="text-muted">Find me on</p>
      <div className="socials">
  <a href="https://youtube.com/@datadrivenbyrabi?si=574BbkxGJojWmgZn" rel="noreferrer"><FaYoutube /></a>
  <a href="https://www.linkedin.com/in/rabi-sankar-singh-b142b6264?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" rel="noreferrer"><FaLinkedinIn /></a>
  <a href="https://www.facebook.com/profile.php?id=100071437804367" rel="noreferrer"><FaFacebook /></a>
  <a href="https://github.com/rabishankar21" rel="noreferrer"><FaGithub /></a>
  <a href="https://www.instagram.com/rabi_sankar112?igsh=aHptZTVsNXoyaXJx" rel="noreferrer"><FaInstagram /></a>
</div>

    </div>
  </Container>
</section>


      {/* Footer */}
      <footer className="text-center py-3" style={{ backgroundColor: "#020617", color: "#9ca3af", borderTop: "1px solid #1f2937" }}>
        © 2026 Rabi Shankar Singh. All rights reserved.
      </footer>
      {/* Floating WhatsApp */}
  <a href="https://wa.me/919635140634" target="_blank" class="floating-whatsapp" rel="noreferrer" title="Chat on WhatsApp">
    <FaWhatsapp />
  </a>
    </div>

  );

}
