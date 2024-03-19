import { useState, useCallback } from 'react';
import { ImPlus } from "react-icons/im";
import { PiCaretLeft, PiCaretRight } from "react-icons/pi";

import ImageViewer from "react-simple-image-viewer";

import g1 from "../../assets/g1.jpg";
import g2 from "../../assets/g2.jpg";
import g3 from "../../assets/g3.jpg";
import g4 from "../../assets/g4.jpg";
import g5 from "../../assets/g5.jpg";
import g6 from "../../assets/g6.jpg";
import g7 from "../../assets/g7.jpg";


const PageCarousel = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    const imagess = [
        g1, g2, g3, g4, g5, g6, g7, g4, g3
    ];

    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };
  return (
    <>    
        <div id="carouselExampleControls" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <button className="btn btn-default carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <PiCaretLeft />
            </button>
            <button className="btn btn-default carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <PiCaretRight />
            </button>
            <div className="carousel-inner">
                <div className="carousel-item active">  
                    <div className="row">
                        <div className="col-lg-4 col-4">
                            <div className="card" onClick={ () => openImageViewer(0) }>
                                <img src={g1} className="card-img-top" alt="..." />
                                <ImPlus className="icon" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-4">
                            <div className="card" onClick={ () => openImageViewer(1) }>
                                <img src={g2} className="card-img-top" alt="..." />
                                <ImPlus className="icon" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-4">
                            <div className="card" onClick={ () => openImageViewer(2) }>
                                <img src={g3} className="card-img-top" alt="..." />
                                <ImPlus className="icon" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">  
                    <div className="row">
                        <div className="col-lg-4 col-4">
                            <div className="card" onClick={ () => openImageViewer(3) }>
                                <img src={g4} className="card-img-top" alt="..." />
                                <ImPlus className="icon" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-4">
                            <div className="card" onClick={ () => openImageViewer(4) }>
                                <img src={g5} className="card-img-top" alt="..." />
                                <ImPlus className="icon" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-4">
                            <div className="card" onClick={ () => openImageViewer(5) }>
                                <img src={g6} className="card-img-top" alt="..." />
                                <ImPlus className="icon" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">  
                    <div className="row">
                        <div className="col-lg-4 col-4">
                            <div className="card" onClick={ () => openImageViewer(6) }>
                                <img src={g7} className="card-img-top" alt="..." />
                                <ImPlus className="icon" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-4">
                            <div className="card" onClick={ () => openImageViewer(7) }>
                                <img src={g4} className="card-img-top" alt="..." />
                                <ImPlus className="icon" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-4">
                            <div className="card" onClick={ () => openImageViewer(8) }>
                                <img src={g3} className="card-img-top" alt="..." />
                                <ImPlus className="icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {isViewerOpen && (
        <ImageViewer
          src={ imagess }
          currentIndex={ currentImage }
          disableScroll={ false }
          closeOnClickOutside={ true }
          onClose={ closeImageViewer }
        />
      )}
    </>  
  );
};

export default PageCarousel;
