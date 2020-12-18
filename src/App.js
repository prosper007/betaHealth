import React from 'react';
import Navbar from './components/navbar/Navbar';
import PatientCard from './components/patientCard/PatientCard';
import ServiceForm from './containers/serviceForm/ServiceForm';
const App = () => {
  return (
    <div>
      <Navbar />
      <PatientCard />
      <ServiceForm />
    </div>
  );
}

export default App;
