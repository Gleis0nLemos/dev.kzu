import Layout from "../layouts/MainLayout";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";

const MainContent = () => {
  return (  
    <Layout>
      <Home />
      <About />
      <Projects />
    </Layout>
  );
}
 
export default MainContent;