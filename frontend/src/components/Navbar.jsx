import React from "react";
import { FiLogOut } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import CustomButton from "./CustomButton";
const Navbar = () => {
  const router = useLocation();
  const navigate = useNavigate();

  const logouthandler = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userType");
    navigate("/");
  };

  return (
    <div className="shadow-md px-6 py-4 mb-6">
      <div className="max-w-7xl flex justify-between items-center mx-auto">
        <div className="flex flex-col">
          <p
            className="font-semibold text-2xl flex justify-center items-center cursor-pointer"
            onClick={() => navigate("/")}
          >
            <span className="mr-2">
              <RxDashboard />
            </span>{" "}
            {router.state && router.state.type} Dashboard
          </p>
          <div className="mt-2">
            <p className="font-semibold text-lg">Career Opportunities</p>
            <a
              href="https://jobrecommendation-1.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CustomButton variant="primary" className="mt-1">
                Visit
              </CustomButton>
            </a>
          </div>
        </div>
        <CustomButton variant="danger" onClick={logouthandler}>
          Logout
          <span className="ml-2">
            <FiLogOut />
          </span>
        </CustomButton>
      </div>
    </div>
  );
};

export default Navbar;
