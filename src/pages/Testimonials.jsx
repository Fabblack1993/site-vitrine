import { useEffect, useState } from "react";
import axios from "axios";
import "./Testimonials.css";

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const testimonialsPerPage = 6;

  useEffect(() => {
  const API_URL = import.meta.env.VITE_API_URL;
  axios
    .get(`${API_URL}/api/testimonials`)
    .then((res) => setTestimonials(res.data))
    .catch((err) => console.error(err));
}, []);



  // Pagination
  const indexOfLast = currentPage * testimonialsPerPage;
  const indexOfFirst = indexOfLast - testimonialsPerPage;
  const currentTestimonials = testimonials.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const nextPage = () =>
    currentPage < totalPages && setCurrentPage((prev) => prev + 1);
  const prevPage = () =>
    currentPage > 1 && setCurrentPage((prev) => prev - 1);

  // Format date
  const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return "Date inconnue";
    return d.toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <section
      style={{
        background: "linear-gradient(180deg, #0a0f1a 0%, #0d1b2a 100%)",
        color: "#fff",
        paddingTop: "7rem",
        paddingBottom: "5rem",
        minHeight: "100vh",
      }}
    >
      {/* Animation interne */}
      <style>
        {`
          @keyframes neonPulse {
            0% {
              text-shadow:
                0 0 8px rgba(0, 255, 213, 0.7),
                0 0 14px rgba(0, 255, 213, 0.5),
                0 0 22px rgba(0, 255, 213, 0.3);
            }
            100% {
              text-shadow:
                0 0 12px rgba(0, 255, 213, 1),
                0 0 22px rgba(0, 255, 213, 0.9),
                0 0 35px rgba(0, 255, 213, 0.6);
            }
          }
        `}
      </style>

      <div className="container">
        <h2
          style={{
            fontSize: "2.8rem",
            fontWeight: "700",
            textAlign: "center",
            color: "#00ffd5",
            marginBottom: "3rem",
            cursor: "default",
            textShadow:
              "0 0 8px rgba(0,255,213,0.8), 0 0 16px rgba(0,255,213,0.6), 0 0 24px rgba(0,255,213,0.4)",
            animation: "neonPulse 2s infinite alternate",
            transition: "all 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.target.style.textShadow =
              "0 0 12px rgba(0,255,213,1), 0 0 28px rgba(0,255,213,0.9), 0 0 45px rgba(0,255,213,0.8), 0 0 70px rgba(0,255,213,0.7)";
            e.target.style.transform = "scale(1.05)";
            e.target.style.color = "#6ffff1";
          }}
          onMouseLeave={(e) => {
            e.target.style.textShadow =
              "0 0 8px rgba(0,255,213,0.8), 0 0 16px rgba(0,255,213,0.6), 0 0 24px rgba(0,255,213,0.4)";
            e.target.style.transform = "scale(1)";
            e.target.style.color = "#00ffd5";
          }}
        >
          Témoignages
        </h2>

        <div className="row justify-content-center">
          {currentTestimonials.length === 0 ? (
            <p className="text-center text-muted">
              Aucun témoignage pour le moment.
            </p>
          ) : (
            currentTestimonials.map((t, index) => (
              <div className="col-md-4 mb-4 d-flex" key={index}>
                <div
                  className="card flex-fill d-flex flex-column align-items-center justify-content-between"
                  style={{
                    backgroundColor: "#111827",
                    border: "1px solid rgba(0,255,200,0.15)",
                    borderRadius: "16px",
                    boxShadow: "0 0 20px rgba(0,255,213,0.08)",
                    height: "320px",
                    padding: "1.5rem",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #00ffd5, #008cff)",
                      color: "#fff",
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.2rem",
                      margin: "0 auto 1rem",
                    }}
                  >
                    {t.name
                      ? t.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .toUpperCase()
                      : "?"}
                  </div>

                  <h5 style={{ color: "#00ffd5", fontWeight: "600" }}>
                    {t.name}
                  </h5>

                  <p
                    style={{
                      color: "#d1d5db",
                      fontSize: "0.95rem",
                      fontStyle: "italic",
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      textOverflow: "ellipsis",
                    }}
                  >
                    “{t.message}”
                  </p>

                  <small style={{ color: "#9ca3af" }}>
                    {formatDate(t.date)}
                  </small>
                </div>
              </div>
            ))
          )}
        </div>

        {testimonials.length > testimonialsPerPage && (
          <div className="text-center mt-4">
            <button
              className="btn btn-outline-light mx-2"
              onClick={prevPage}
              disabled={currentPage === 1}
            >
              ← Précédent
            </button>
            <span style={{ color: "#00ffd5" }}>
              Page {currentPage} / {totalPages}
            </span>
            <button
              className="btn btn-outline-light mx-2"
              onClick={nextPage}
              disabled={currentPage === totalPages}
            >
              Suivant →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Testimonials;
