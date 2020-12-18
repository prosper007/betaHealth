import React from 'react';
import PageHeader from '../pageHeader/PageHeader';
import pic from '../../assets/images/kevin.png';
import styles from './PatientCard.module.css';

const PatientCard = (props) => {
  return (
    <React.Fragment>
      <PageHeader>Patient Info</PageHeader>
      <div className={styles.PatientCard}>
        <div className={styles.PatientPhotoContainer}>
          <img className={styles.PatientPhoto} src={pic} alt="patient" />
        </div>

        <div className={styles.PatientInfoContainer}>
          <div className={styles.PatientInfo}>
            <span className={styles.PatientInfoKey}>Name: </span>
            <span className={styles.PatientInfoValue}>Vinke Ariaria</span>
          </div>
          <div className={styles.FadedLine} />

          <div className={styles.PatientInfo}>
            <span className={styles.PatientInfoKey}>Age: </span>
            <span className={styles.PatientInfoValue}>76</span>
          </div>
          <div className={styles.FadedLine} />

          <div className={styles.PatientInfo}>
            <span className={styles.PatientInfoKey}>Blood Type: </span>
            <span className={styles.PatientInfoValue}>AB</span>
          </div>
          <div className={styles.FadedLine} />

          <div className={styles.PatientInfo}>
            <span className={styles.PatientInfoKey}>Medical Conditions: </span>
            <span className={styles.PatientInfoValue}>Asthma, Diabetes</span>
          </div>
          <div className={styles.FadedLine} />

          <div className={styles.PatientInfo}>
            <span className={styles.PatientInfoKey}>Allergies: </span>
            <span className={styles.PatientInfoValue}>Peanuts</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
};

export default PatientCard;