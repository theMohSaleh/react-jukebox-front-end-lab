import { Link } from "react-router-dom";
import TrackList from "./TrackList"
import NowPlaying from "./NowPlaying";

function Home({tracks}) {

    
    return (
        <>
            <Link to='/add-track'><button>New Track</button></Link>
            <TrackList trackList={tracks} />
        </>
    )
}

export default Home