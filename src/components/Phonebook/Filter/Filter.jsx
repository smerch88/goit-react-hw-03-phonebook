import { Component } from 'react';
import PropTypes from 'prop-types';
import { Input } from '@mantine/core';

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
          <Input
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
