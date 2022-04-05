import React from "react";
import LastGameInDb from "./LastGameInDb";
import GamesInDb from "./GamesInDb";

function ContentRowCenter() {
  return (
    <React.Fragment>
      <div className="row">
        <LastGameInDb />
        <GamesInDb />
      </div>
    </React.Fragment>
  );
}

export default ContentRowCenter;
