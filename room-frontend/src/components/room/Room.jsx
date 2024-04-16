import { useState, useEffect } from "react";
import RoomDetail from "../RoomDetails/RoomDetail";
import AddRoom from "../RoomDetails/AddRoom";

const Room = ({ rooms }) => {
    const [cards, setCards] = useState([]);
    const [screenSize, setScreenSize] = useState(() => {
        if (typeof window !== 'undefined') {
            return window.innerWidth;
        }
        return 0;
    });

    useEffect(() => {
        setCards(rooms);
    }, [rooms]);

    useEffect(() => {
        const handleResize = () => {
            setScreenSize(window.innerWidth);
        };

        if (typeof window !== 'undefined') {
            window.addEventListener("resize", handleResize);

            return () => {
                window.removeEventListener("resize", handleResize);
            };
        }
    }, []);

    return (
        <div className="container-fluid" style={{ margin: '20px' }}>
            <div className="row">
                {cards && cards.map((item) => (
                    <div className={`col-${screenSize <= 768 ? '12' : screenSize <= 1024 ? '6' : '3'}`} key={item.id}>
                        <RoomDetail name={item.name} acStatus={item.acStatus} temp={item.temp} id={item.id} />
                    </div>
                ))}
                <div className={`col-${screenSize <= 768 ? '12' : screenSize <= 1024 ? '6' : '3'}`}>
                    <AddRoom />
                </div>
            </div>
        </div>
    );
}

export default Room;
