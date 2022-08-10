import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditBusinessPage from './index'


function EditBusinessModal({business}) {
    const [showModal, setShowModal] = useState(false);

    return (
      <>
        <button onClick={() => setShowModal(true)}>Edit Business</button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)} onSubmit={() => setShowModal(false)}>
            <EditBusinessPage business={business} setShowModal={setShowModal}/>
          </Modal>
        )}
      </>
    );
  }
  export default EditBusinessModal;
