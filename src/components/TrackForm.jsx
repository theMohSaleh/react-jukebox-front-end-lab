import { useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";

const TrackForm = ({ trackList }) => {
  const navigate = useNavigate();
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
    navigate('/');
    
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
        <button type="submit">Add New Track</button>
      </form>
    </div>
  );
};

export default TrackForm;