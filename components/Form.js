import React, { useState } from 'react';
import Error from './Error';
import Succes from './Succes';
import styles from '../src/styles/form.module.css'

const Form = ({closeModal}) => {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [error, setError] = useState(false);
  const [succes, setSucces] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validacióm del formulario
    if( [ name, phone, email, message ].includes('') ) {
      console.log('Hay Al Menos un campo vacio')

      setError(true)
      return;
  } 
  
  setError(false)

    console.log(`Name: ${name}, Phone: ${phone}, Email: ${email}, Message: ${message}`);
    // Aquí podemos enviar los datos del formulario a través de una API o hacer otra acción en la aplicación.

    //Reinicial el formulario
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");

    setSucces(true)

    setTimeout(() => {
      setSucces(false)
    }, 5000);

  };

  return (
    <form className={`contenedor ${styles.form}`} onSubmit={handleSubmit}>
      { error &&  <Error><p>Please fill all spaces</p></Error>}
        <h2>Contact me</h2>
      <div className={styles.name}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div >
        <label htmlFor="name">Phone:</label>
        <input
          type="text"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={styles.message}>
        <label htmlFor="name">Message:</label>
        <textarea
          type="text"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button className={styles.btn} type="submit">Submit</button>
      <button className={styles.btnclose} onClick={closeModal}>Close</button>

      { succes &&  <Succes><p>Information sent successfully</p></Succes>}
    </form>
  );
};

export default Form;
