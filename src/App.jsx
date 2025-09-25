import { useState } from "react";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

import Home from "./Pages/Home";
import Galliries from "./Pages/Galliries";
import Documentaries from "./Pages/Documentaries";
import Content from "./Pages/Content";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Forget from "./Pages/Forget";
import New from "./Pages/New";
import Profile from "./Pages/Profile";
import Password from "./Pages/Password";
import Reset from "./Pages/Reset";
import Change from "./Pages/Change";
import Account from "./Pages/Account";
import Curator from "./Pages/Curator";
import Contentsubmission from "./Pages/Contentsubmission";
import Submission from "./Pages/Submission";
import Finalsubmission from "./Pages/Finalsubmission";
import Supportus from "./Pages/Supportus";
import Membership from "./Pages/Membership";
import Dashboard from "./Pages/Dashboard";
import User from "./Pages/User";
import Userinfo from "./Pages/Userinfo";
import Subscribe from "./Pages/Subscribe";
import Editsubscribe from "./Pages/Editsubscribe";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Galliries" element={<Galliries />} />
          <Route path="/Documentaries" element={<Documentaries />} />
          <Route path="/Content" element={<Content />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/forget" element={<Forget />} />
          <Route path="/New" element={<New />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Password" element={<Password />} />
          <Route path="/Reset" element={<Reset />} />
          <Route path="/Change" element={<Change />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/Curator" element={<Curator />} />
          <Route path="/Contentsubmission" element={<Contentsubmission />} />
          <Route path="/submission" element={<Submission />} />
          <Route path="/Finalsubmission" element={<Finalsubmission />} />
          <Route path="/Supportus" element={<Supportus />} />
          <Route path="/Membership" element={<Membership />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/User" element={<User />} />
          <Route path="/Userinfo" element={<Userinfo />} />
          <Route path="/Subscribe" element={<Subscribe />} />
          <Route path="/Editsubscribe" element={<Editsubscribe />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
