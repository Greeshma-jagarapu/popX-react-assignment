import Home from "./pages/Home"
import { Router, Route, Routes } from "react-router";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import AccountSettings from "./pages/AccountSettings";

function App(){
    return (
      <div className="flex justify-center bg-slate-200">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signup" element={<SignUp />}></Route> 
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/settings" element={<AccountSettings />}></Route>
        </Routes>

      </div>
    )
}

export default App;