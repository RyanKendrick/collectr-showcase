import React, { FunctionComponent } from "react";
import Image from "next/image";

interface ModalProps {
  selectedImage: string;
  closeModal: any;
}

const Modal: FunctionComponent<ModalProps> = ({
  selectedImage,
  closeModal,
}) => {
  return (
    <>
      <div className="modal" id="modal" onClick={closeModal}>
        <div>
          <Image
            src={selectedImage ? selectedImage : "/loading.gif"}
            width={300}
            height={350}
            alt={"Expanded view"}
            className={"product-image"}
            objectFit={"contain"}
          />
          <div className="close">
            <Image
              src={"/close.svg"}
              width={25}
              height={25}
              alt={"close modal"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
