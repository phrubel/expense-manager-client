import Footer from './Footer';
import Navbar from './Navbar';

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />

      <div className="content">{children}</div>

      <Footer />
    </>
  );
};

export default Layout;
