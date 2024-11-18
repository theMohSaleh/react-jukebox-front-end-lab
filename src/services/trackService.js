const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks`;

export const index = async () => {
    try {
        const res = await fetch(BASE_URL);
        const tracks = await res.json();
        return tracks;
    } catch (error) {
        console.log(error);
    }
}

export const create = async (trackFormData) => {
    try {
        const res = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(trackFormData),
        });
        const track = await res.json();
        return track;
    } catch (error) {
        console.log(error);
    }
}

export const update = async (trackFormData, trackId) => {
    try {
        const res = await fetch(`${BASE_URL}/${trackId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(trackFormData),
        });
        const track = await res.json();
        return track;
    } catch (error) {
        console.log(error);
    }
}

export const remove = async (trackId) => {
    try {
        const res = await fetch(`${BASE_URL}/${trackId}`, {
            method: 'DELETE',
        });
        const track = await res.json();
        return track;
    } catch (error) {
        console.log(error);
    }
}