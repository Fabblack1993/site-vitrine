import React from "react";
import "./WhyMe.css";

const WhyMe = () => {
  return (
    <section className="whyme-section">
      <h2>Pourquoi nous choisir ?</h2>
      <div className="whyme-grid">
        <div className="whyme-card">
          <h3>Accompagnement personnalisé</h3>
          <p>Nous vous guidons à chaque étape, de l’idée au site final, avec une approche sur mesure.</p>
        </div>
        <div className="whyme-card">
          <h3>Sites performants</h3>
          <p>Des solutions rapides, sécurisées et optimisées pour offrir la meilleure expérience utilisateur.</p>
        </div>
        <div className="whyme-card">
          <h3>Livraison professionnelle</h3>
          <p>Un travail rigoureux, livré dans les temps, avec un suivi attentif et des conseils sur mesure.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyMe;
