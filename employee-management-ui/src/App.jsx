import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddEmployee from "./components/AddEmployee";
import Navbar from "./components/Navbar";
import EmployeeList from "./components/EmployeeList";
import UpdateEmployee from "./components/UpdateEmployee";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index Component={EmployeeList} />
          <Route path="/" Component={EmployeeList} />
          <Route path="/employeeList" Component={EmployeeList} />
          <Route path="/addEmployee" Component={AddEmployee} />
          <Route path="/updateEmployee/:id" Component={UpdateEmployee} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
