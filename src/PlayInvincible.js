import Invincible from './assets/music/Invincible.mp3'
import ReactPlayer from "react-player";

function PlayInvincible() {
  return (
    <div>
        <div>
            <ReactPlayer controls url={"https://www.youtube.com/watch?v=4n6WP9qHyRM"} />
        </div>
        <audio controls>
            <source src={Invincible} type="audio/mp3" />
        </audio>
    </div>
  );
}

export default PlayInvincible;