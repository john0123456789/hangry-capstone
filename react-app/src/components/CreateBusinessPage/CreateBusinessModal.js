import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateBusinessPage from './index'
import { FiPlusSquare } from 'react-icons/fi';


function CreateBusinessModal() {
    const [showModal, setShowModal] = useState(false);

    return (
      <>
        <FiPlusSquare size="30px" onClick={() => setShowModal(true)}/>
        {showModal && (
          <Modal onClose={() => setShowModal(false)} onSubmit={() => setShowModal(false)}>
            <CreateBusinessPage setShowModal={setShowModal}/>
          </Modal>
        )}
      </>
    );
  }
  export default CreateBusinessModal;
