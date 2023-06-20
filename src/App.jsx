import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/Signup/SignUp';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
