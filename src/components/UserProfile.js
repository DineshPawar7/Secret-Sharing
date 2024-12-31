import React from "react";
import { useAuth } from "./AuthContext";

function UserProfile() {
    const { user, logout } = useAuth();

    if (!user) {
        return<p>You are not logged in.</p>;
    }

    return (
        <div>
            <h1>Welcome, {user.name}</h1>
            <p> Email: {user.email}</p>
            <button onClick={logout}>Logout</button>
        </div>
    );
}

export default UserProfile;