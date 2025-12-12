import React from "react";

const services = [
  {
    title: "Développement Web & Mobile",
    description:
      "Conception d’applications modernes, rapides et responsives, adaptées à tous les supports (web, Android, iOS).",
    icon: "https://res.cloudinary.com/dll9k74ri/image/upload/v1763276647/digital-service_ayuiv8.png",
  },
  {
    title: "Graphic Design & Branding",
    description:
      "Création d’identités visuelles uniques : logos, affiches, bannières et chartes graphiques sur mesure.",
    icon: "https://res.cloudinary.com/dll9k74ri/image/upload/v1763276790/layout_y0nswr.png",
  },
  {
    title: "Community Management",
    description:
      "Gestion stratégique de vos réseaux sociaux pour renforcer votre visibilité et fidéliser votre audience.",
    icon: "https://res.cloudinary.com/dll9k74ri/image/upload/v1763276877/social-media-management_gusm4i.png",
  },
  {
    title: "API & Backend",
    description:
      "Développement d’API REST performantes et sécurisées avec Node.js, Express et MongoDB.",
    icon: "https://res.cloudinary.com/dll9k74ri/image/upload/v1763277007/coding_nezvnv.png",
  },
  {
    title: "Hébergement & Cloud",
    description:
      "Déploiement et hébergement fiables via Cloudinary, Netlify et autres solutions cloud modernes.",
    icon: "https://res.cloudinary.com/dll9k74ri/image/upload/v1763277160/hosting_zwr4ca.png",
  },
  {
    title: "Optimisation SEO & Performance",
    description:
      "Amélioration de la vitesse, du référencement et de la structure technique de vos sites pour un impact maximal.",
    icon: "https://res.cloudinary.com/dll9k74ri/image/upload/v1763277248/seo_d3ba6s.png",
  },
];

function Services() {
  return (
    <section
      style={{
        background: "linear-gradient(180deg, #0a0f1a 0%, #0d1b2a 100%)",
        color: "#fff",
        padding: "6rem 1rem",
      }}
    >
      <div className="container">
        <h2
          className="text-center fw-bold mb-4"
          style={{
            fontSize: "2.4rem",
            color: "#00ffd5",
            textShadow: "0 0 12px rgba(0,255,213,0.4)",
          }}
        >
          Mes Services
        </h2>
        <div
          style={{
            width: "80px",
            height: "4px",
            backgroundColor: "#00ffd5",
            margin: "0 auto 3rem",
            borderRadius: "2px",
            boxShadow: "0 0 10px rgba(0,255,213,0.5)",
          }}
        ></div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "16px",
                padding: "2rem",
                textAlign: "center",
                backdropFilter: "blur(8px)",
                transition: "transform 0.4s ease, box-shadow 0.4s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 0 20px rgba(0,255,213,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  margin: "0 auto 1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={service.icon}
                  alt={service.title}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    transition: "filter 0.3s ease",
                    filter: "drop-shadow(0 0 6px rgba(0,255,213,0.5))",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.filter =
                      "drop-shadow(0 0 12px rgba(0,255,213,0.8))")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.filter =
                      "drop-shadow(0 0 6px rgba(0,255,213,0.5))")
                  }
                />
              </div>
              <h5 style={{ color: "#00ffd5", marginBottom: "1rem" }}>
                {service.title}
              </h5>
              <p style={{ color: "#d1e7e0", fontSize: "0.95rem" }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
