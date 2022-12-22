import { Component } from 'react';
import PropTypes from 'prop-types';

export class Filter extends Component {
  state = {
    filter: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
    this.props.setFilterValue(value);
  };

  render() {
    const { filter } = this.state;
    return (
      <>
        <label htmlFor="">
          filter
          <input
            type="text"
            name="filter"
            value={filter}
            onChange={this.handleChange}
          />
        </label>
      </>
    );
  }
}

Filter.propTypes = {
  setFilterValue: PropTypes.func.isRequired,
};
