import React, { FunctionComponent } from 'react'
import Image from 'next/image'

interface ModalProps {
    selectedImage: string;
    closeModal: any;
}

const Modal: FunctionComponent<ModalProps> = ({ selectedImage, closeModal }) => {
  return (
    <>
        <div className='modal' id='modal' onClick={closeModal}>
            <div>
                <Image
                    src={selectedImage ? selectedImage : '/loading.gif'}
                    width={150}
                    height={150}
                    alt={'Expanded view'}
                />
                <div className='close'>X</div>
            </div>
        </div>
    </>
  )
}

export default Modal