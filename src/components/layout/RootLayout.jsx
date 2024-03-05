import { Outlet } from "react-router-dom";
import NavbarV1 from "../navbar/NavbarV1";
import Footer from "../footer/Footer";


const RootLayout = () => {
  return (
    <div>
      <NavbarV1 />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
};

export default RootLayout