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