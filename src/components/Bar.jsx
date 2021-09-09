import React from 'react';
import PropTypes from 'prop-types';

class Bar extends React.Component {
  render() {
    const { onSearchTextChange, searchText } = this.props;
    return (
      <label htmlFor="text-input" data-testid="text-input-label">
        Inclui o texto:
        <input
          type="text"
          name="searchText"
          data-testid="text-input"
          value={ searchText }
          onChange={ onSearchTextChange }
        />
      </label>
    );
  }
}

Bar.propTypes = {
  onSearchTextChange: PropTypes.string,
  searchText: PropTypes.func,
};
export default Bar;