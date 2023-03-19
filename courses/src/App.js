import { Route, Routes, Navigate } from "react-router-dom";
import AllCourses from "./pages/AllCourses";
import Layout from "./components/Layout";
import Lessons from "./pages/Lessons";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AllCourses />} />
          <Route path=":id" element={<Lessons />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
