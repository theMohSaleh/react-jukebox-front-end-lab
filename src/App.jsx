import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import TrackForm from "./components/TrackForm";
import * as trackService from './services/trackService'

const App = () => {
  const [tracks, setTracks] = useState([])

  useEffect(() => {
    async function getTracks() {
      try {
        const allTracks = await trackService.index();
        if (tracks.error) {
          throw new Error(tracks.error)
        }
        setTracks(allTracks);
      } catch (error) {
        console.log(error);

      }
    }
    getTracks();
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<Home tracks={tracks}/>} />
        <Route path="/add-track" element={<TrackForm />} />
        <Route path="/edit-track/:trackId" element={<TrackForm trackList={tracks} />} />
      </Routes>
    </>
  );
};

export default App;