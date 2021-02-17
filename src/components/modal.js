import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';


const MyModal = (props) => {

  const [open, setOpen] = useState(props.modalState);

  useEffect(() => {
    setOpen(props.modalState)
  });

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
console.log(props)
  return (
    <div>

      <Modal open={open} onClose={props.onClose} center>
        <h2>{props.headline}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
          hendrerit risus, sed porttitor quam.
          </p>
      </Modal>
    </div>
  );
};

export default MyModal