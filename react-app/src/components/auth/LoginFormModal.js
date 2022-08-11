import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';


function LoginFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
      <>
        <button type="button" className="navbutton" onClick={() => setShowModal(true)}>Login</button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)} onSubmit={() => setShowModal(false)}>
            <LoginForm setShowModal={setShowModal}/>
          </Modal>
        )}
      </>
    );
  }
  export default LoginFormModal;
