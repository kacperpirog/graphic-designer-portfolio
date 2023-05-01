import React, { useState } from "react";
import "../../globalStyled/partials/_portfolio.css";
import { data } from "../../localData";

const Gallery = () => {
  const [tiles, setTiles] = useState(data);
  const [currentTag, setCurrentTag] = useState("all");

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

  return (
    <>
      <div className="portfolioCopy">
        <h3>PORTFOLIO</h3>
        <h2>Lorem Ipsum</h2>
      </div>
      <div className="styledButton">
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
              <img
                onClick={() => handleTileClick(tile.id)}
                src={tile.image}
                alt={tile.name}
                style={{
                  width: tile.open ? "20vw" : "18vw",
                  height: tile.open ? "auto" : "18vw",
                  backgroundSize: tile.open ? "cover" : "cover",
                  backgroundPosition: tile.open ? "center" : "center",
                  position: tile.open ? "absolute" : "static",
                  top: tile.open ? "auto" : "auto",
                  left: tile.open ? "auto" : "auto",
                  margin: tile.open ? "0" : "10px",
                  boxShadow: tile.open
                    ? "0 0 40px 5px rgba(0, 0, 0, 0.3)"
                    : "none",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
