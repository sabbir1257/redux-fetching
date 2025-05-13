import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
    <div className="max-w-[1250px] mx-auto">
    <Outlet/>
    </div>
    </>
  );
}

export default App;
