import React, { useState } from 'react';

const WorkItems = ({ item }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className='work-card'>
      <img src={item.image} alt={item.title} className='work-img' />
      <h3 className='work-title'>{item.title}</h3>

      <span onClick={openModal} className='work-button'>
        Demo <i className='bx bx-right-arrow-alt work-button-icon'></i>
      </span>

      {/* Modal */}
      <div className={showModal ? 'services-modal active-modal' : 'services-modal'}>
        <div className='services-modal-content'>
          <i onClick={closeModal} className='uil uil-times services-modal-close'></i>
          <h3 className='services-modal-title'>{item.title}</h3>
          <div
            className='services-modal-description'
            dangerouslySetInnerHTML={{ __html: item.description }}
          />
        </div>
      </div>
    </div>
  );
};

export default WorkItems;





