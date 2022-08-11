import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignUpForm from './SignUpForm';


function SignUpFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
      <>
        <button type="button" className="navbutton" onClick={() => setShowModal(true)}>Sign Up</button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)} onSubmit={() => setShowModal(false)}>
            <SignUpForm setShowModal={setShowModal}/>
          </Modal>
        )}
      </>
    );
  }
  export default SignUpFormModal;
