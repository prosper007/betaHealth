import React from 'react';
import styles from './ServiceFormDisplay.module.css';
import PageHeader from '../pageHeader/PageHeader';

const ServiceFormDisplay = (props) => {
  return (
    <div className={styles.ServiceFormContainer}>
      <PageHeader>Please Enter Details of Visit</PageHeader>
      <div className={styles.ServiceForm}>
        <form onSubmit={props.onSubmitHandler}>
          <div className={styles.ServiceFormField}>
            <label className={styles.ServiceFormFieldLabel}>Purpose of Visit: </label>
            <input
              type='text'
              name='purpose'
              value={props.serviceForm.purpose.value}
              onChange={props.onInputChangeHandler}
              className={styles.ServiceFormInput}
            />
          </div>
          <div className={styles.ServiceFormField}>
            <label className={styles.ServiceFormFieldLabel}>Recommendation: </label>
            <input
              type='text'
              name='recommendation'
              value={props.serviceForm.recommendation.value}
              onChange={props.onInputChangeHandler}
              className={styles.ServiceFormInput}
            />
          </div>
          <div className={styles.ServiceFormField}>
            <label className={styles.ServiceFormFieldLabel}>Presciption: </label>
            <input
              type='text'
              name='presciption'
              value={props.serviceForm.presciption.value}
              onChange={props.onInputChangeHandler}
              className={styles.ServiceFormInput}
            />
          </div>
          <div className={styles.ServiceFormField}>
            <label className={styles.ServiceFormFieldLabel}>Notes: </label>
            <textarea
              name='notes'
              value={props.serviceForm.notes.value}
              onChange={props.onInputChangeHandler}
              className={styles.ServiceFormInput}
            />
          </div>
          <input className={styles.SubmitButton} type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default ServiceFormDisplay;