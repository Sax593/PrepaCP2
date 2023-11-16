import PropTypes from "prop-types";

export default function PokeCard({ pokemon }) {
  return (
    <article>
      <p>{pokemon.name}</p>
      <p>Type: {pokemon.type}</p>
      <img src={pokemon.large_img} alt="" />
    </article>
  );
}

PokeCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    large_img: PropTypes.string.isRequired,
  }).isRequired,
};
