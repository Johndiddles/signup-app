import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupScreen from "./screens/Signup.component";
import "./App.css";
import Dashboard from "./screens/dashboard.component";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignupScreen />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
