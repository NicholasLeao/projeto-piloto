import CardPequeno from "./CardPequeno";
import CardGrande from "./CardGrande";

function CardContainer(props) {
  const { data } = props;
  return (
    <>
      {!props.maxCardState.includes(data._id) ? (
        <CardPequeno
          setCardMaxState={props.setCardMaxState}
          data={data}
          key={data._id}
        />
      ) : (
        <CardGrande
          setCardMaxState={props.setCardMaxState}
          data={data}
          key={`G${data._id}`}
        />
      )}
    </>
  );
}

export default CardContainer;
