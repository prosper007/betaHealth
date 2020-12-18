import React, { Component } from 'react';
import ServiceFormDisplay from '../../components/serviceFormDisplay/ServiceFormDisplay';
import Confirmation from '../../components/confirmation/Confirmation';
import Spinner from '../../components/spinner/Spinner';

class ServiceForm extends Component {
  state = {
    serviceForm: {
      purpose: {
        value: '',
      },
      recommendation: {
        value: '',
      },
      presciption: {
        value: '',
      },
      notes: {
        value: '',
      },
    },
    loading: false,
    submitted: false,
  }

  onInputChangeHandler = (event) => {
    const updatedServiceForm = { ...this.state.serviceForm };
    const updatedServiceFormField = { ...updatedServiceForm[event.target.name] };
    updatedServiceFormField.value = event.target.value;
    updatedServiceForm[event.target.name] = updatedServiceFormField;
    this.setState({ serviceForm: updatedServiceForm });
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    setTimeout(() => this.setState({ submitted: true }), 1500);

  }

  render() {
    const { serviceForm } = this.state;
    return (
      this.state.submitted
        ? <Confirmation />
        : this.state.loading
          ? <Spinner />
          : < ServiceFormDisplay
            serviceForm={serviceForm}
            onInputChangeHandler={this.onInputChangeHandler}
            onSubmitHandler={this.onSubmitHandler}
          />
    )
  }
};

export default ServiceForm;