import React from "react";
import { UserAuth } from "../context/AuthContext";

const Account = () => {
  const { user, logOut } = UserAuth();
  const handleSignOut = async () => {
    try {
      await logOut();
      // navigate('/signin')
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-[300] m-auto">
      <h1 className="text-center text-2xl font-bold pt-12">Account</h1>
      <div>
        <p>Welcome, {user?.displayName}</p>
        <p>Mail, {user?.email}</p>
        <p>
          Number, {user?.phoneNumber != null ? user?.phoneNumber : "No Number"}
        </p>
      </div>
      <button onClick={handleSignOut} className="border py-2 px-5 mt-10">
        Logout
      </button>
    </div>
  );
};

export default Account;
