import { Component } from 'react';
import PropTypes from 'prop-types';

export class ContactList extends Component {
  render() {
    const { contacts, filter } = this.props;
    return (
      <>
        <ul>
          {contacts
            .filter(contact =>
              contact.name.toLowerCase().includes(filter.toLowerCase())
            )
            .map(contact => (
              <li key={contact.id}>
                {' '}
                {contact.name}: {contact.number}
                <button onClick={() => this.props.deleteUser(contact.id)}>
                  Delete
                </button>
              </li>
            ))}
        </ul>
      </>
    );
  }
}

ContactList.propTypes = {
  filter: PropTypes.string.isRequired,
  deleteUser: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
