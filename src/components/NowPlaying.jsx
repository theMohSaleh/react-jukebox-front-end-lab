
function NowPlaying({ selectedTrack }) {
  if (!selectedTrack) return;

  return (
    <>
      <div>
        <h2>Now Playing: {selectedTrack.title}</h2>
        <p>by: {selectedTrack.artist}</p>
      </div>
    </>
  )
}

export default NowPlaying