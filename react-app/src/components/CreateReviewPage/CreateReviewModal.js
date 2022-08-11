import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateReviewPage from './index'


function CreateReviewModal({business}) {
    const [showModal, setShowModal] = useState(false);

    return (
      <>
        <button className="businesspagebuttons" onClick={() => setShowModal(true)}>Add your review!</button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)} onSubmit={() => setShowModal(false)}>
            <CreateReviewPage business={business} setShowModal={setShowModal}/>
          </Modal>
        )}
      </>
    );
  }
  export default CreateReviewModal;
