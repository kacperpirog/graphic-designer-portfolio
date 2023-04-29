import React, { useState } from "react";

import "../../globalStyled/partials/_portfolio.css";
import { data } from "../../localData";

const Gallery = () => {
  const [tiles, setTiles] = useState(data);

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

  // const handleMouseEnter = (name) => {
  //   return (
  //     <>
  //       <h3>loerm ipsum</h3>
  //     </>
  //   );
  // };

  // const handleMouseLeave = () => {};

  return (
    <>
      <div className="portfolioCopy">
        <h3>PORTFOLIO</h3>
        <h2>Lorem Ipsum</h2>
      </div>
      <div className="tiles">
        {tiles.map((tile) => (
          <div className="tile" key={tile.id}>
            <div>
              <img
                // onMouseEnter={() => handleMouseEnter(tile.name)}
                // onMouseLeave={handleMouseLeave}
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
