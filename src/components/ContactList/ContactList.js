import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteClick }) => (
  <ul className={styles.List}>
    {contacts.map(({ id, name, number }) => {
      return (
        <li key={id} className={styles.ItemList}>
          <p className={styles.Text}>
            {name}: {number}
          </p>
          <button
            className={styles.DeleteBtn}
            type="button"
            onClick={() => onDeleteClick(id)}
          >
            Delete
          </button>
        </li>
      );
    })}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default ContactList;
