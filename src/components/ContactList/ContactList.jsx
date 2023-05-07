import React from 'react';
import PropTypes from 'prop-types';
import { IoTrashBin } from 'react-icons/io5';

import css from 'components/ContactList/ContactList.module.css';

export const ContactList = ({ contacts = [], onDelete }) => {
  return (
    <section>
      <div className={css.contactContainer}>
        <h3 className={css.contactHead}>Name</h3>
        <h3 className={css.contactHead}>Number</h3>
      </div>
      <ul className={css['contacts-list']}>
        {contacts.map(({ id, name, phone }) => (
          <li key={id} className={css.item}>
            <p className={css.contactTitle}>{name}</p>
            <a className={css.contactLink} href={'tel:' + phone}>
              {phone}
            </a>
            <button
              type="click"
              className={css.btnIcon}
              onClick={() => onDelete(id)}
            >
              <span className={css.stats}>
                <IoTrashBin className={css.icon} />
              </span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
