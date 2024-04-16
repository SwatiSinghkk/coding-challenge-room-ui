import React, { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { addRoom } from '@/app/api';

function AddModal({ openModal, setModalOpen }) {
    const [occupantName, setOccupantName] = useState("");

    useEffect(() => {
        if (openModal) {
            open();
        } else {
            close();
        }
    }, [openModal]);

    const [opened, setOpened] = useState(false);

    const open = () => setOpened(true);
    const close = () => setOpened(false);

    return (
        <>
            <Modal show={opened} onHide={() => setModalOpen(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Room</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control type="text" placeholder="Enter Name of Occupant" value={occupantName} onChange={(e) => setOccupantName(e.target.value)} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={close}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => {
                        addRoom(occupantName);
                        close();
                    }}>
                        Add Room
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddModal;
