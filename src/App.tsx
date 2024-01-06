import Explorer from "./screens/explorer/index.tsx";
import Models from "./screens/models/model-list/index.tsx";
import Test from "./screens/test/index.tsx";
import Datasets from "./screens/datasets/index.tsx";
import Home from "./screens/home/index.tsx";
import Authenticate from "./screens/authenticate/index.tsx";
import useAuth from "./hooks/useAuth.tsx";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Settings from "./screens/settings/index.tsx";
import SignOut from "./screens/signout/index.tsx";
import UserProfile from "./screens/users/user-profile/index.tsx";
import UserManagement from "./screens/users/user-management/index.tsx";
import ModelDetail from "@/screens/models/model-details";

const App = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth?.token) {
      navigate("/authenticate");
    }
  }, [auth?.token]);

  return (
      <Routes>
        {auth?.token
            ? (
                <>
                  <Route path="/" element={<Home />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/explorer" element={<Explorer />} />
                  <Route path="/datasets" element={<Datasets />} />
                  <Route path="/models" element={<Models />} />
                  <Route path="/models/:id" element={<ModelDetail />} />
                  <Route path="/tests" element={<Test />} />
                  <Route path="/profile" element={<UserProfile />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/signout" element={<SignOut />} />
                  <Route path="/user-management" element={<UserManagement />} />
                </>
            )
            : <Route path="/authenticate" element={<Authenticate />} />}
      </Routes>
  );
};

export default App;