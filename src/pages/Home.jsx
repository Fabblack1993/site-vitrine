import './Home.css';
import WhyMe from '../components/WhyMe';

function Home() {
  return (
  <div className="container py-5">
  <div className="row align-items-center">
    {/* Texte à gauche */}
    <div className="col-lg-6 mb-4 mb-lg-0">
      <h1 className="mb-3">Construisons ensemble une présence digitale puissante et innovante.</h1>
      <p className="lead">Chez NFT SOLUTIONS, nous donnons vie à vos idées à travers des solutions numériques modernes, performantes et pensées pour booster votre visibilité.
Nous accompagnons entreprises, entrepreneurs et marques dans la création d’expériences digitales uniques, alliant design, technologie et stratégie.</p>
    </div>

    {/* Image à droite */}
    <div className="col-lg-6 text-center mt-5">
      <img
        src="https://res.cloudinary.com/dqhk1wg5r/image/upload/v1762876454/php-explode-multiple-separators_zf9ev4.jpg"
        alt="Illustration développeuse"
        className="img-fluid rounded shadow"
        style={{
          width: '100%',
          marginBottom : '60px',
          maxWidth: '700px',
          aspectRatio: '16/9',
          objectFit: 'cover'
        }}
      />
    </div>
    </div>
      <WhyMe />
  

 <section className="cta-section text-center py-5 mb-4">
  <div className="container">
    <h2 
      className="fw-bold mb-4" 
      style={{
        fontSize: '2.5rem',
        color: '#00ffe0',
        textShadow: '0 0 8px rgba(0,255,200,0.3)',
      }}
    >
      Vous avez un projet web ?
    </h2>

    <p
      className="lead mb-5"
      style={{
        color: '#e0e0e0',
        fontSize: '1.25rem',
        lineHeight: '1.6',
        maxWidth: '750px',
        margin: '0 auto',
      }}
    >
      Contactez-nous et construisons ensemble un site qui vous ressemble.
    </p>

    <a
      href="https://forms.gle/vwQL9GzCJM6qVGuE8"
      target="_blank"
      rel="noopener noreferrer"
      className="cta-button"
      style={{
        display: 'inline-block',
        padding: '14px 35px',
        background: 'linear-gradient(90deg, #00ffd5, #00ffa6)',
        color: '#000',
        borderRadius: '50px',
        fontWeight: '600',
        fontSize: '1.1rem',
        textDecoration: 'none',
        boxShadow: '0 0 15px rgba(0,255,200,0.4)',
        transition: 'all 0.3s ease-in-out',
      }}
      onMouseOver={(e) => {
        e.target.style.transform = 'scale(1.07)';
        e.target.style.boxShadow = '0 0 25px rgba(0,255,200,0.7)';
      }}
      onMouseOut={(e) => {
        e.target.style.transform = 'scale(1)';
        e.target.style.boxShadow = '0 0 15px rgba(0,255,200,0.4)';
      }}
    >
      Demander un devis gratuit
    </a>
  </div>
</section>




<section 
  className="cta-section text-center py-5" 
  style={{
    backgroundColor: '#0a0f1c', 
    paddingTop: '3rem', 
    paddingBottom: '6rem'
  }}
>
  <div className="container">
    <h2 
      className="fw-bold mb-5"
      style={{
       
         fontSize: '2.5rem',
        color: '#00ffd5',
        textShadow: '0 0 8px rgba(0,255,200,0.4)',
        marginBottom: '19rem', // 🔥 espace harmonieux entre le titre et les icônes
         marginTop: '-2rem',
      }}
    >
      Technologies que nous utilisons
    </h2>

    <div
      className="d-flex justify-content-center align-items-center gap-4 flex-wrap"
      style={{
        overflowX: "auto",
        padding: "0 1rem",
        rowGap: "2rem", // 🔥 espace vertical entre les lignes d’icônes
      }}
    >
      {[
        "https://res.cloudinary.com/dqhk1wg5r/image/upload/v1762893779/20673129_vdsy5h.jpg",
        "https://res.cloudinary.com/dqhk1wg5r/image/upload/v1762893576/reactjs-lightning-talk_zcl43q.jpg",
        "https://res.cloudinary.com/dqhk1wg5r/image/upload/v1762961707/React_Native_vector_logo_azsalq.png",
        "https://res.cloudinary.com/dqhk1wg5r/image/upload/v1762961833/Feature-Image_mhh2us.jpg",
        "https://res.cloudinary.com/dqhk1wg5r/image/upload/v1763029117/Mysql_whquvl.png",
        "https://res.cloudinary.com/dqhk1wg5r/image/upload/v1762962032/logo-node-js-512_gtpjr2.png",
        "https://res.cloudinary.com/dqhk1wg5r/image/upload/v1763029529/Python-logo-notextsv_qgo9yv.png",
      ].map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Tech ${i}`}
          style={{
            height: "55px",
            width: "55px",
            objectFit: "contain",
            borderRadius: "8px",
            margin: "0 10px",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            boxShadow: "0 0 8px rgba(0,255,200,0.1)",
             
          }}
          onMouseEnter={e => {
            e.target.style.transform = "scale(1.15)";
            e.target.style.boxShadow = "0 0 12px rgba(0,255,200,0.6)";
          }}
          onMouseLeave={e => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "0 0 8px rgba(0,255,200,0.1)";
          }}
        />
      ))}
    </div>
  </div>
</section>




</div>
  );
}

export default Home;