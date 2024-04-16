'use client'
import React, { useEffect, useState } from 'react';
import { IconTemperatureCelsius, IconArrowUp, IconArrowDown } from '@tabler/icons-react';
import { Button } from 'react-bootstrap';
import styles from './RoomList.css';
import Room from '../room/Room';
import { setTemperature } from '@/app/api';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function RoomList({ data }) {
    useEffect(() => {
        setRequestedTemp(data?.building?.defaultTemp);
        setRooms(data?.building?.rooms?.length);
    }, [data]);

    const [requestedTemp, setRequestedTemp] = useState(25);
    const [rooms, setRooms] = useState(0);

    const increaseTemp = () => {
        setRequestedTemp(requestedTemp + 1);
    };

    const decreaseTemp = () => {
        setRequestedTemp(requestedTemp - 1);
    };

    const handleTempChange = () => {
        setTemperature(requestedTemp); 
    };

    return (
        <>
        <div className="header">
        <h1 > Room Control Panel</h1>
              <p>Occupied Rooms : {rooms}</p>
              <p>Requested Temperature : {requestedTemp} <IconTemperatureCelsius/> </p>
              <p>
                <Button className="button" onClick={decreaseTemp}><IconArrowDown /></Button>
                <Button className="button" onClick={increaseTemp}><IconArrowUp /></Button>
                <Button className="button" onClick={handleTempChange}>Set</Button>
            </p>
            </div>
            <div><Room rooms={data?.building?.rooms} /></div>
         </>
    );
}

export default RoomList;
 