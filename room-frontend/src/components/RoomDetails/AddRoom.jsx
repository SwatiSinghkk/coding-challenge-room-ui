'use client';
import React, { useState } from 'react';
import { IconCirclePlus } from '@tabler/icons-react';
import AddModal from "@/commons/modal/AddModal";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const AddRoom = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className="card shadow-sm p-4">
            {/* Render your card content here using props */}
            <div className="d-flex justify-content-center align-items-center flex-column">
                <IconCirclePlus stroke={1} onClick={() => setOpenModal(!openModal)} style={{ cursor: 'pointer' }} />
                <AddModal openModal={openModal} setModalOpen={setOpenModal} />
            </div>
        </div>
    );
}

export default AddRoom;

