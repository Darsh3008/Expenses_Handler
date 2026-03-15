import React from "react";
import Container from "../container/Container";
import Logo from "../Logo";
import LogoutBtn from "./LogoutBtn";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

const Header = () => {

  const authStatus = useSelector((state) => state.auth.authStatus);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/20 border-b border-white/30 shadow-lg">

      <Container>
        <div className="flex items-center py-4 gap-7">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-xl shadow-lg">
              <Logo className="h-8 w-8 text-white" />
            </div>
          </Link>

          {/* Navigation */}
          <nav className="ml-auto">
            <ul className="flex items-center gap-4">

              {!authStatus && (
                <>
                  <li>
                    <button
                      onClick={() => navigate("/login")}
                      className="px-5 py-2 rounded-lg border border-purple-400 text-purple-600 font-semibold hover:bg-purple-600 hover:text-white transition duration-300"
                    >
                      Login
                    </button>
                  </li>

                  <li>
                    <button
                      onClick={() => navigate("/signup")}
                      className="px-5 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold shadow hover:scale-105 transition duration-300"
                    >
                      Signup
                    </button>
                  </li>
                </>
              )}

              {authStatus && (
                <li>
                  <LogoutBtn />
                </li>
              )}

            </ul>
          </nav>

        </div>
      </Container>

    </header>
  );
};

export default Header;