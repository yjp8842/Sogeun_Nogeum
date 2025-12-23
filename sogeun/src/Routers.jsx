import { Route, Routes } from "react-router-dom";
import AudioComp from "./pages/AudioComp";
import Intro from "./pages/Intro";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/audio/:name" element={<AudioComp />} />
    </Routes>
  );
}
