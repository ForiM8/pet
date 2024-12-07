import './orderBuy'
import ReactModal from "react-modal";
import { useState } from "react";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: 578,
    height: 850
  },
};

export const OrderBuy = (props) => {
  const { isModalOpen, onCloseModal, setProducts } = props;
  const [errorForm, setErrorForm] = useState(false);



  

  return (
    <ReactModal isOpen={isModalOpen} style={customStyles}>
      <div className='main__order'>
        
      </div>
    </ReactModal>
  );
};
