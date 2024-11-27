import React from 'react';

function Gallery() {
    return (
        <section id="gallery" className="gallery">
            <h2>Nuestra Galería</h2>
            <div className="gallery-grid">
                <img src="https://via.placeholder.com/150" alt="Placeholder 1" />
                <img src="https://via.placeholder.com/150" alt="Placeholder 2" />
                <img src="https://via.placeholder.com/150" alt="Placeholder 3" />
                <img src="https://via.placeholder.com/150" alt="Placeholder 4" />
            </div>
        </section>
    );
}

export default Gallery;
