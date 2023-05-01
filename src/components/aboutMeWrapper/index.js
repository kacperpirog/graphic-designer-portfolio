import React from "react";
import "../../globalStyled/partials/_aboutMe.css";
import { Element } from "react-scroll";

const AboutMeWrapper = () => {
  return (
    <Element name="aboutMe" className="element">
      <div className="aboutMeWrapper">
        {/* <div className="webGraphic"> </div> */}
        <div className="aboutMeConteiner">
          <div className="fotoProfile"> </div>
          <div className="aboutMeCopy">
            <h2>Kim jestem</h2> <h3>Witam,</h3>
            <p>
              Odkąd pamiętam, moje zainteresowania oscylowały wokół grafiki.
              Swoją pracę traktuję jak sztukę użytkową i mam to szczęście, że
              zarabiam na czymś, czego tworzenie dostarcza mi wiele satysfakcji
              i daje poczucie spełnienia. Połączywszy to z hobby i pasją,
              czerpałbym jednocześnie inspiracje z profesjonalnego środowiska
              ludzi o zbliżonych zainteresowaniach. Teraz gdy pojawia się
              sposobność ubiegania się o pracę u Państwa, przesyłam moją
              aplikacje z nadzieją, na spotkanie się podczas rozmowy
              kwalifikacyjnej.
            </p>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default AboutMeWrapper;
