import phone from "../assets/phone.png";
import video from "../assets/video.png";
import back_arrow from "../assets/back-arrow.png";

export default function Header() {
  return (
    <header>
      <img src={back_arrow} alt="back icon" />
      <h1>Jose Ávila</h1>
      <div className="images">
        <img id="video" src={video} alt="video call icon" />
        <img id="phone" src={phone} alt="telephone call icon" />
      </div>
    </header>
  );
}
