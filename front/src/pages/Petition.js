import React from "react";

import MainStructure from "../components/structure/MainStructure";
import PetitionContainer from "../containers/PetitionContainer"

const Petition = props => {
  return (
    <MainStructure>
      <PetitionContainer props={props}></PetitionContainer>
    </MainStructure>
  );
};

export default Petition;
