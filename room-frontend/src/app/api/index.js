
export const getData = async () => {
    try {
        const res = await fetch('http://localhost:3001/building', { cache: 'no-store' });
        const data = await res.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }

}


export async function addRoom(roomName) {
    const payload = {
        name: roomName
    };

    try {
        const response = await fetch('http://localhost:3001/building/addroom', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (response.ok) {
            return true;
        } else {
            throw new Error(response.statusText);
        }
    } catch (error) {
        throw new Error(error);
    } finally {
        window.location.reload();
    }
}


export async function setTemperature(temp) {
    const payload = {
        defaultTemp: temp
    };

    try {
        const response = await fetch('http://localhost:3001/building/setTemp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (response.ok) {
            return true;
        } else {
            throw new Error(response.statusText);
        }
    } catch (error) {
        throw new Error(error);
    } finally {
        window.location.reload();
    }
}

