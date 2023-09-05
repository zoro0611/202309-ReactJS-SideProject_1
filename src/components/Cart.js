import { BackpackIcon, DotFilledIcon } from '@radix-ui/react-icons';
import React, { useState } from 'react';
import Modal from 'react-modal';


Modal.setAppElement('#root'); // 将模态框挂载到根元素上
const Cart = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className='min-w-[100px] flex items-center justify-around bg-black w-[150px] h-[40px] px-3 mr-6 rounded-full cursor-pointer hover:bg-slate-700'  onClick={openModal}>
      <BackpackIcon className='text-white w-[20px] h-[20px]' />
      <div className='text-white'>購物車</div>
      <DotFilledIcon className='text-white' />
      <div className='text-white'>0</div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="示例模态框"
        style={
            {
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.75)',
                },
                content: {
                    width: '500px',
                    height: '300px',
                    margin: 'auto',
                    border: '1px solid #ccc',
                    background: '#fff',
                    WebkitOverflowScrolling: 'touch',
                    borderRadius: '4px',
                    outline: 'none',
                    padding: '20px'
                }
            }
        }
      >
        <h2>Hello World</h2>
        <button className='bg-slate-300' onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
}

export default Cart;
