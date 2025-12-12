import "./Portfolio.css";

function Portfolio() {
  const projects = [
    {
      title: "Dashboard Admin",
      img: "https://res.cloudinary.com/dqhk1wg5r/image/upload/v1765316002/Dashboard_ri2w1a.jpg",
      description: "Interface moderne, charts, cards dynamiques.",
    },
    {
      title: "Landing Page Marketing",
      img: "https://res.cloudinary.com/dqhk1wg5r/image/upload/v1765315426/Landing_Page_j15fwc.jpg",
      description: "Page d'accueil optimisée pour les conversions.",
    },
    {
      title: "Application Mobile",
      img: "https://res.cloudinary.com/dqhk1wg5r/image/upload/v1765315740/cross_plateforme_ohfwac.png",
      description: "Prototype mobile cross-platform.",
    },
    {
      title: "Boutique en Ligne",
      img: "https://res.cloudinary.com/dqhk1wg5r/image/upload/v1765316339/E-commerce_q2eisb.png",
      description: "E-commerce performant, panier & paiement.",
    },
    {
      title: "Portfolio Designer",
      img: "https://res.cloudinary.com/dqhk1wg5r/image/upload/v1765316780/Portfolio_gvnkh3.jpg",
      description: "Site vitrine créatif & minimaliste.",
    },
    {
      title: "Site Institutionnel",
      img: "https://res.cloudinary.com/dqhk1wg5r/image/upload/v1765317155/site_institut_ezjba3.jpg",
      description: "Site vitrine professionnel et épuré.",
    }
  ];

  return (
    <section className="portfolio-section">
      <div className="container">

        <h2 className="portfolio-title text-center">Portfolio</h2>

        <div className="row g-4 justify-content-center">
          {projects.map((p, index) => (
            <div className="col-md-4 col-sm-6 d-flex justify-content-center" key={index}>
              <div className="portfolio-card">

                <div className="portfolio-img-wrapper">
                  <img src={p.img} alt={p.title} className="portfolio-img" />
                </div>

                <div className="portfolio-info text-center">
                  <h4>{p.title}</h4>
                  <p>{p.description}</p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Portfolio;

