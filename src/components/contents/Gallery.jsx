import PageCarousel from './PageCarousel';

const Gallery = () => {
  return (
    <section id="gallery" className="gallery-section padding-top">
      <div className="container">
        <div className="section-header">
          <h2 className="title">
            <span className="shape"><span>Gallery</span></span> <span>Photos</span>
          </h2>
        </div>
        <PageCarousel />
      </div>
    </section>
  );
};

export default Gallery;
