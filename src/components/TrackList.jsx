import { Link } from "react-router-dom";

const TrackList = (props) => {
    const tracks = props.trackList.map((track) =>
        <h3 key={track._id}>
            <li>{track.artist}</li>
            <Link to={`/edit-track/${track._id}`}><button>Edit</button></Link>
        </h3>
    )

    return (
        <div>
            <h1>Track List</h1>
            {!props.trackList.length ? <h2>No tracks Yet!</h2> : <ul>{tracks}</ul>}
        </div>
    );
};

export default TrackList