import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import TrackForm from "./components/TrackForm";
import * as trackService from './services/trackService'

const App = () => {
  const [tracks, setTracks] = useState([])
  const navigate = useNavigate();

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

  const handleAddTrack = async (trackFormData) => {
    const newTrack = await trackService.create(trackFormData);
    setTracks([...tracks, newTrack]);
    navigate('/');
  }

  const handleUpdateTrack = async (trackFormData, trackId) => {
    const editedTrack = await trackService.update(trackFormData, trackId)
    const updatedTracks = tracks.map((track) => {
      if (track._id === editedTrack._id) {
        return editedTrack;
      } else {
        return track;
      }
    })
    setTracks(updatedTracks);
    navigate('/');
  }

  const handleDeleteTrack = async (trackId) => {
    const deletedTrack = await trackService.remove(trackId);
    const updatedTracks = tracks.filter((track) => track._id !== deletedTrack._id)
    setTracks(updatedTracks);
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Home tracks={tracks} handleDeleteTrack={handleDeleteTrack} />} />
        <Route path="/add-track" element={<TrackForm handleAddTrack={handleAddTrack} />} />
        <Route path="/edit-track/:trackId" element={<TrackForm trackList={tracks} handleUpdateTrack={handleUpdateTrack} />} />
      </Routes>
    </>
  );
};

export default App;