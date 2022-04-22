import CardPequeno from "./CardPequeno";
import CardGrande from "./CardGrande";
import CardGrandeContainer from "./CardGrandeContainer";
import { useState } from "react";
function CardContainer(props) {
  const [windowSate, setWindowState] = useState(false);
  const handleWindowState = () => setWindowState((s) => !s);

  const { data } = props;
  return (
    <>
      {!windowSate ? (
        <CardPequeno
          handleWindowState={handleWindowState}
          data={data}
          key={data._id}
        />
      ) : (
        <CardGrandeContainer
          handleWindowState={handleWindowState}
          data={data}
          key={`G${data._id}`}
        />
      )}
    </>
  );
}

export default CardContainer;
