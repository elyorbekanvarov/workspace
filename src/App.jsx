// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage/LoginPage";
import ChatEmptyState from "./pages/dashboard/ChatEmptyState/ChatEmptyState";
import ContactsOverview from "./pages/dashboard/ContactsOverview/ContactsOverview";
import "./styles/globals.css";

// Private Route komponenti
function PrivateRoute({ children }) {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  return isAuthenticated ? children : <Navigate to="/" replace />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login sahifasi */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Protected sahifalar */}
        <Route
          path="/chat"
          element={
            <PrivateRoute>
              <ChatEmptyState />
            </PrivateRoute>
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <ContactsOverview />
            </PrivateRoute>
          }
        />

        {/* 404 - topilmadi */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
