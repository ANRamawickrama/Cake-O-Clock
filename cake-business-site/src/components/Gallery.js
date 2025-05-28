import React from 'react';

const cakes = [
  { name: "Birthday Cake", img: "/images/birthday.jpg" },
  { name: "Cup Cake", img: "/images/cup.jpg" },
  { name: "Wedding Cake", img: "/images/weddingcake.jpg" },
  { name: "Wedding Structure", img: "/images/weddingstructure.jpg" },
  { name: "Jar Cake", img: "/images/jar.jpg" },
  { name: "Anniversary Cake", img: "/images/anniversary.jpg" },
  
];

function Gallery() {
  const cakeItems = [...cakes, { name: "", img: "", placeholder: true }];

  return (
    <section className="gallery">
      <h2>Our Cakes</h2>
      <div className="gallery-grid">
        {cakeItems.map((cake, index) => (
          <div key={index} className="gallery-item">
            {!cake.placeholder ? (
              <>
                <img src={cake.img} alt={cake.name} />
                <p>{cake.name}</p>
              </>
            ) : (
              <div style={{ visibility: 'hidden' }}>Spacer</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
