import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditreviewPage from './index'


function EditReviewModal({business, review}) {
    const [showModal, setShowModal] = useState(false);

    return (
      <>
        <button className="editreviewmodal-btn" onClick={() => setShowModal(true)}>Edit Review</button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)} onSubmit={() => setShowModal(false)}>
            <EditreviewPage business={business} review={review} setShowModal={setShowModal}/>
          </Modal>
        )}
      </>
    );
  }
  export default EditReviewModal;
