import { Outlet } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <MainLayout>
      <Outlet></Outlet>
      <div className=' rounded-t-3xl overflow-hidden'>
        <Footer></Footer>
      </div>
    </MainLayout>
  );
}

export default App;
