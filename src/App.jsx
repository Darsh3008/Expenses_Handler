import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";

import AddExpenses from "./pages/AddExpenses";
import Receipt from "./pages/Recipt";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-200">

      <Header />

      <div className="flex-grow p-6">
        <Routes>

          {/* default route */}
          <Route path="/" element={<Navigate to="/login" />} />

          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<Signup />} />

          {/* Home page */}
          <Route path="/home" element={<Home />} />

          <Route path="/add-expense" element={<AddExpenses />} />

          <Route path="/receipt" element={<Receipt />} />

        </Routes>
      </div>

      <Footer />

    </div>
  );
}

export default App;