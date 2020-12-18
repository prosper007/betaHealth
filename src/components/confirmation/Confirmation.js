import React from 'react';
import styles from './Confirmation.module.css';
import approvedBadge from '../../assets/images/approvedBadge.svg';

const Confirmation = (props) => {
  return (
    <div className={styles.ConfirmationContainer}>
      <div className={styles.BadgeContainter}>
        <img src={approvedBadge} alt='approved' />
      </div>
      <div className={styles.ConfirmationText}>
        This hospital visit has been forwarded to Reliance HMO for processing
      </div>
    </div>
  );
};

export default Confirmation;