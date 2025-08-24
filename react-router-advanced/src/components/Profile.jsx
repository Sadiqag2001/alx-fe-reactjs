import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import ProfileDetails from "../pages/ProfileDetails";
import ProfileSettings from "../pages/ProfileSettings";

function Profile() {
  return (
    <div className="p-6">
      <h1>Profile Page</h1>
      <nav className="flex justify-center items-center gap-4 mt-2">
        <Link className="hover:text-[#111111] hover:underline" to="details">Profile Details</Link>
        <Link className="hover:text-[#111111] hover:underline" to="settings">Profile Settings</Link>
      </nav>

      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}

export default Profile;
