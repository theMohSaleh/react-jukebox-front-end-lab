import { Link } from "react-router-dom";

const TrackList = ({ trackList, handleFormView, handleDeleteTrack }) => {
    const tracks = trackList.map((track) =>
        <h3 key={track._id}>
            <li>{track.artist}</li>
            <div>
                <button onClick={() => handleFormView(track)}>Play</button>
                <Link to={`/edit-track/${track._id}`}><button>Edit</button></Link>
                <button onClick={() => handleDeleteTrack(track._id)}>Delete</button>
            </div>
        </h3>
    )

    return (
        <div>
            <h1>Track List</h1>
            {!trackList.length ? <h2>No tracks Yet!</h2> : <ul>{tracks}</ul>}
        </div>
    );
};

export default TrackList