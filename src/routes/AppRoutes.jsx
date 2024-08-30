import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import MainContent from "../pages/MainContent";

const AppRoutes = () => {
  return (  
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />}/>
      </Routes>
    </Router>
  );
}
 
export default AppRoutes;