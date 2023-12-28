import React, { useState, useEffect } from "react";
import "../../globalStyled/partials/_portfolio.css";
import { data } from "../../localData";
import { Element } from "react-scroll";

const Gallery = () => {
  const [tiles, setTiles] = useState(data);
  const [currentTag, setCurrentTag] = useState("all");
  const [modalImage, setModalImage] = useState(null);

  //eslint-disable-next-line
  const handleTileClick = (id) => {
    const updatedTiles = tiles.map((tile) => {
      if (tile.id === id) {
        return { ...tile, open: !tile.open };
      } else {
        return tile;
      }
    });
    setTiles(updatedTiles);
  };

  const handleTagClick = (tag) => {
    setCurrentTag(tag);
  };

  const filteredItems = tiles.filter((tile) => {
    if (currentTag === "all") {
      return true;
    } else {
      return tile.tags.includes(currentTag);
    }
  });
  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Element name="work" className="element">
        <div className="portfolioCopy">
          <h3>PORTFOLIO</h3>
        </div>
        <div className="styledButton">
          <button onClick={() => handleTagClick("media")}>madia</button>
          <button onClick={() => handleTagClick("DTP")}>dtp</button>
          <button onClick={() => handleTagClick("sm")}>social media</button>
          <button onClick={() => handleTagClick("lp")}>landing page</button>
          <button onClick={() => handleTagClick("www")}>www</button>
          <button onClick={() => handleTagClick("all")}>all</button>
        </div>
        <div className="tiles">
          {filteredItems.map((tile) => (
            <div className="tile" key={tile.id}>
              <div>
                {tile.type === "image" ? (
                  <img
                    key={tile.id}
                    className="imageStyle"
                    onClick={() => openModal(tile.image)}
                    src={tile.image}
                    alt={tile.name}
                  />
                ) : (
                  <video
                    onClick={() => openModal(tile.video)}
                    src={tile.video}
                    type="video/mp4"
                    controls
                  />
                )}
              </div>
              {modalImage && (
                <div className="modalStyle" onClick={closeModal}>
                  <img
                    key={tile.id}
                    src={modalImage}
                    alt={tile.name}
                    className="modalImageStyle"
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </Element>
    </>
  );
};

export default Gallery;
