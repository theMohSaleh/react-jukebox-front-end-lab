import { useState } from 'react';
import { useParams } from "react-router-dom";

const TrackForm = ({ trackList, handleAddTrack, handleUpdateTrack }) => {

  const { trackId } = useParams();

  const initialState = trackId ?
    // if editing track, populate form with track data
    trackList.find(
      (track) => track._id === trackId
    )
    // otherwise set to empty string
    :
    {
      title: '',
      artist: '',
    }
  // formData state to control the form
  const [formData, setFormData] = useState(initialState);

  // handleChange function to update formData state
  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if editing data, call update
    if (trackId) {
      handleUpdateTrack(formData, trackId)
    } else {
      // call create otherwise
      handleAddTrack(formData)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title"> Title </label>
        <input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <label htmlFor="artist"> Artist </label>
        <input
          id="artist"
          name="artist"
          value={formData.artist}
          onChange={handleChange}
        />
        <button type="submit">{trackId ? 'Edit Track' : 'Add New Track'}</button>
      </form>
    </div>
  );
};

export default TrackForm;