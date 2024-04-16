'use client';

import React from 'react';
import { IconTemperatureCelsius } from '@tabler/icons-react';
import styles from './RoomDetail.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const RoomDetail = ({ name, id, acStatus, temp }) => {

    return (
        <div className="card">
            <div className="cardContainer">
                <h5>{name}</h5>
                <p>Room No: {id}</p>
                <p>Room Temperature: {temp} <IconTemperatureCelsius width={20} height={20} style={{ paddingTop: '5px' }} /></p>
                <p>Status: <span className={`badge ${acStatus ? 'bg-primary' : 'bg-danger'}`}>{acStatus ? 'Cooling' : 'Heating'}</span></p>
            </div>
        </div>
    );
}

export default RoomDetail;
