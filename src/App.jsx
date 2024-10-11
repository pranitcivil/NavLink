import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <main className="px-4 py-4 md:px-8">
        <Outlet />
      </main>
    </>
  );
};

export default App;
