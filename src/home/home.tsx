import { BrowserRouter, Route, Routes } from "react-router-dom";
import First from "../first/first";
import End from "../Questions/End";
import Question from "../Questions/Question";

const Home = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<First />}></Route>
          <Route path="/questions/:id" element={<Question />} />
          <Route path="/end" element={<End />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Home;
