import { useState } from "react";
import { Link } from "react-router-dom";
import TrackList from "./TrackList"
import NowPlaying from "./NowPlaying";

function Home({ tracks, handleDeleteTrack }) {
    const [selectedTrack, setSelectedTrack] = useState(null)

    const handleFormView = (track) => {
        if (!track.title) {
            setSelectedTrack(null);
        }
        setSelectedTrack(track)
    }

    return (
        <>
            <Link to='/add-track'><button>New Track</button></Link>
            <TrackList
                trackList={tracks}
                handleFormView={handleFormView}
                handleDeleteTrack={handleDeleteTrack}
            />
            <NowPlaying
                selectedTrack={selectedTrack}
            />
        </>
    )
}

export default Home