import CardGrande from "./CardGrande";
import CardGrandeForm from "./CardGrandeForm";
import { useState } from "react";

function CardGrandeContainer(props) {
  const [formBoolState, setFormBoolState] = useState(false);
  const handleFormBoolState = () => setFormBoolState((s) => !s);

  return (
    <>
      {!formBoolState ? (
        <CardGrande
          handleFormBoolState={handleFormBoolState}
          handleWindowState={props.handleWindowState}
          data={props.data}
          key={`G${props.data._id}`}
        />
      ) : (
        <CardGrandeForm
          handleFormBoolState={handleFormBoolState}
          handleWindowState={props.handleWindowState}
          data={props.data}
          key={`F${props.data._id}`}
        />
      )}
    </>
  );
}

export default CardGrandeContainer;
