import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setLoading(true);

        try {
      const API_URL = process.env.REACT_APP_API_URL;
      await axios.post(`${API_URL}/api/contact`, formData);
      setStatus('Message envoyé avec succès !');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus("Échec de l'envoi. Réessayez.");
    }


    setLoading(false);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "80px 20px",
        background: "linear-gradient(180deg, #020b18, #051529)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "white",
      }}
    >
      {/* Titre */}
      <h1
        style={{
          fontSize: "42px",
          fontWeight: "bold",
          marginBottom: "10px",
          color: "#16f2b3",
          textShadow: "0 0 15px #0ff",
        }}
      >
        Contactez-nous
      </h1>

      <p style={{ opacity: 0.8, marginBottom: "40px", fontSize: "18px" }}>
         Une question ? Un projet ? Écrivez-nous et nous vous répondrons rapidement.
      </p>

      {/* Card du formulaire */}
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          padding: "40px",
          borderRadius: "16px",
          background: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 0 25px rgba(0,255,255,0.1)",
        }}
      >
        <form onSubmit={handleSubmit}>
          {/* Champ */}
          <label style={{ fontSize: "16px", marginBottom: "6px", display: "block" }}>
            Nom
          </label>
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            value={formData.name}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <label style={{ fontSize: "16px", marginBottom: "6px", display: "block" }}>
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            value={formData.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <label style={{ fontSize: "16px", marginBottom: "6px", display: "block" }}>
            Message
          </label>
          <textarea
            name="message"
            placeholder="Votre message..."
            value={formData.message}
            onChange={handleChange}
            required
            style={{
              ...inputStyle,
              height: "140px",
              resize: "vertical",
            }}
          ></textarea>

          {/* Bouton */}
          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              marginTop: "20px",
              padding: "14px",
              background: loading ? "#0a8a70" : "#16f2b3",
              color: "#000",
              fontSize: "18px",
              fontWeight: "bold",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              boxShadow: "0 0 12px #16f2b3",
              transition: "0.3s",
            }}
            onMouseEnter={(e) => {
              if (!loading) e.target.style.boxShadow = "0 0 25px #16f2b3";
            }}
            onMouseLeave={(e) => {
              if (!loading) e.target.style.boxShadow = "0 0 12px #16f2b3";
            }}
          >
            {loading ? "⏳ Envoi en cours..." : "Envoyer"}
          </button>

          {/* Statut */}
          {status && (
            <p
              style={{
                marginTop: "15px",
                textAlign: "center",
                color: status.includes("succès") ? "#16f2b3" : "#ff6b6b",
              }}
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px 14px",
  marginBottom: "20px",
  borderRadius: "8px",
  border: "1px solid rgba(255,255,255,0.2)",
  background: "rgba(255,255,255,0.05)",
  color: "white",
  fontSize: "16px",
  outline: "none",
};

