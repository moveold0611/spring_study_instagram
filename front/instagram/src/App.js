/** @jsxImportSource @emotion/react */

// import { GSCommon } from "./styles/common";
import { Route, Routes } from "react-router-dom";
import RootLayout from "./components/Layouts/RootLayout/RootLayout";
import Sidebar from "./components/Sidebar/Sidebar";
import Signup from "./pages/Signup/Signup";


function App() {
  return (
    <RootLayout>
      {/* <Sidebar/> */}
      <Routes>
        <Route path="" element={<div>test</div>}/>
        <Route path="/account/emailssignup" element={<Signup />}/>
        <Route path="/:username" element={<div>test2</div>}/>
        <Route path="/explore/*" element={<div>test3</div>}/>
        {/* <Route path="" element={<div>test</div>}/>
        <Route path="" element={<div>test</div>}/> */}
      </Routes>
    </RootLayout>
  );
}

export default App;
