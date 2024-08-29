import Layout from "../layouts/MainLayout";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

const MainContent = () => {
  return (  
    <Layout>
      <Home />
      <About />
      <Projects />
      <Contact />    
    </Layout>
  );
}
 
export default MainContent;