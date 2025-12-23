import { useParams, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import audioList from "../data/audioList.json";

export default function AudioComp() {
  const { name } = useParams();
  const navigate = useNavigate();
  const videoRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  const audio = audioList.find((item) => item.name === name);

  const handlePlay = () => {
    if (!videoRef.current || isPlaying) return;

    videoRef.current.play();
    setIsPlaying(true);
  };

  if (!audio) {
    return (
      <div style={{ textAlign: "center", fontSize: "18px" }}>
        <p>해당 이름의 영상이 없습니다.</p>
        <button onClick={() => navigate("/")}>돌아가기</button>
      </div>
    );
  }

  return (
    <div onClick={handlePlay} style={{ width: "100vw", height: "100vh" }}>
      <video ref={videoRef} playsInline className="fullscreen-video">
        <source src={audio.video} type="video/mp4" />
      </video>

      {!isPlaying && (
        <p
          style={{
            position: "absolute",
            bottom: 400,
            width: "100%",
            textAlign: "center",
            color: "#fff",
            fontSize: "30px",
          }}
        >
          화면을 클릭해주세요
        </p>
      )}
    </div>
  );
}
