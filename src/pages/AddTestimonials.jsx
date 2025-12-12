import { useState } from "react";

function AddTestimonial() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    secretCode: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
const res = await fetch("https://backend-nftsolutions.onrender.com/api/testimonials", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(form),
});

    const data = await res.json();

    if (!res.ok) {
      alert(data.message);
      return;
    }

    alert("Témoignage ajouté avec succès !");
  };

  return (
    <div
      className="container"
      style={{
        paddingTop: "120px",
        maxWidth: "600px",
        margin: "0 auto",
        color: "#fff",
      }}
    >
      <h1
        className="text-center fw-bold mb-4"
        style={{
          fontSize: "2.8rem",
          color: "#00ffd5",
          textShadow: "0 0 10px rgba(0,255,213,0.4)",
        }}
      >
        Ajouter un témoignage
      </h1>

      <form
        onSubmit={handleSubmit}
        style={{
          background: "rgba(255,255,255,0.05)",
          padding: "2rem",
          borderRadius: "16px",
          backdropFilter: "blur(8px)",
          boxShadow: "0 0 20px rgba(0,255,213,0.1)",
        }}
      >
        {["name", "email", "secretCode"].map((field) => (
          <input
            key={field}
            type={field === "secretCode" ? "password" : field === "email" ? "email" : "text"}
            name={field}
            placeholder={
              field === "name"
                ? "Votre nom"
                : field === "email"
                ? "Votre email"
                : "Code secret (pour modifier ou supprimer ensuite)"
            }
            value={form[field]}
            onChange={handleChange}
            required
            style={{
              backgroundColor: "transparent",
              border: "1px solid #00ffd5",
              color: "#fff",
              padding: "12px",
              borderRadius: "8px",
              marginBottom: "1.2rem",
              width: "100%",
              fontSize: "1rem",
              transition: "box-shadow 0.3s ease",
            }}
            onFocus={(e) =>
              (e.target.style.boxShadow = "0 0 10px rgba(0,255,213,0.5)")
            }
            onBlur={(e) => (e.target.style.boxShadow = "none")}
          />
        ))}

        <textarea
          name="message"
          placeholder="Votre témoignage"
          value={form.message}
          onChange={handleChange}
          rows="4"
          required
          style={{
            backgroundColor: "transparent",
            border: "1px solid #00ffd5",
            color: "#fff",
            padding: "12px",
            borderRadius: "8px",
            marginBottom: "1.2rem",
            width: "100%",
            fontSize: "1rem",
            resize: "vertical",
            transition: "box-shadow 0.3s ease",
          }}
          onFocus={(e) =>
            (e.target.style.boxShadow = "0 0 10px rgba(0,255,213,0.5)")
          }
          onBlur={(e) => (e.target.style.boxShadow = "none")}
        />

        <button
          type="submit"
          style={{
            backgroundColor: "#00ffd5",
            color: "#0a0f1a",
            border: "none",
            padding: "12px",
            fontWeight: "bold",
            borderRadius: "8px",
            width: "100%",
            boxShadow: "0 0 12px rgba(0,255,213,0.6)",
            transition: "box-shadow 0.3s ease, transform 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.boxShadow = "0 0 20px rgba(0,255,213,0.9)";
            e.target.style.transform = "scale(1.03)";
          }}
          onMouseLeave={(e) => {
            e.target.style.boxShadow = "0 0 12px rgba(0,255,213,0.6)";
            e.target.style.transform = "scale(1)";
          }}
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}

export default AddTestimonial;
