import React from 'react';
import PropTypes from 'prop-types'

class Pokemon extends React.Component {

  render() {

    const { id, name, type, averageWeight, image } = this.props.pokemon

    return (
      <div key={ id } className="pokemon">
        <div> 
          <p>{ <strong>{name}</strong> }</p>
          <p>{ type }</p>
          <p>
            {`Average weight: ${averageWeight.value}${averageWeight.measurementUnit}`}
          </p>
        </div>
        <img src={ image } alt={`Imagem do Pokemon ${name}`} />
      </div>
    );

  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }),
    image: PropTypes.string,
  }).isRequired,
}

export default Pokemon;