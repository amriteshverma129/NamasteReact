import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Body from "./components/Body/body";
import "./app.css";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default AppLayout;
