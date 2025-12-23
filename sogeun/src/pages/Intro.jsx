import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Intro() {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const goAudio = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    navigate(`/audio/${name}`);
  };

  return (
    <>
      <div className="main">이름을 입력해주세요.</div>

      <form className="wrapper" onSubmit={goAudio}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button type="submit" className="enter">
          Enter
        </button>
      </form>
    </>
  );
}
