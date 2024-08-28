import Layout from "../layouts/MainLayout";
import Home from "./Home";
import About from "./About";

const MainContent = () => {
  return (  
    <Layout>
      <Home />
      <About />
    </Layout>
  );
}
 
export default MainContent;