import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Students from "./pages/Students";
import Groups from "./pages/Groups";
import GroupItem from "./pages/GroupItem";
import Payment from "./pages/Payment";
import Davomat from "./pages/Davomat";
import DavomatItem from "./pages/DavomatItem";
import Teachers from "./pages/Teachers";
import Login from "./pages/Login";

function App() {
  const token = localStorage.getItem("token");

  return (
    <Routes>
      {!token && <Route path="/" element={<Navigate to="/login" replace />} />}
      {token && (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/groups/:group_id" element={<GroupItem />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/attendance" element={<Davomat />} />
          <Route path="/attendance/:group_id" element={<DavomatItem />} />
          <Route path="/teachers" element={<Teachers />} />
        </>
      )}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
