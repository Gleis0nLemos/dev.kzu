import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <div className="mx-5 md:mx-0">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;