import { useCart } from "react-use-cart";
import PropTypes from "prop-types";

const Card = (props) => {
  const { addItem } = useCart();

  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
      <div className="card p-0 overflow-hidden h-100 shadow">
        <img src={props.img} className="card-img-top img-fluid" alt={props.img} />
        <div className="card-body text-center">
          <h5 className="card-title">{props.name}</h5>
          <h5 className="card-text">$ {props.price}</h5>
          <button
            className="btn btn-success"
            onClick={() => addItem(props.item)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  img: PropTypes.string.isRequired, // Add this line for 'img' prop validation
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  item: PropTypes.object.isRequired,
};

export default Card;
