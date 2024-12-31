import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext";

function Login() {
    const { login } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin =async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:5000/api/login", {
                email,
                password,
            });
            login(response.data);
        } catch (err) {
            setError("Invalid email or password");
        }
    };
            return (
                <div>
                    <h2>Login</h2>
                    {error && <p style={{color: "red"}}>{error}</p>}
                    <form onSubmit={handleLogin}>
                        <input
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        />
                        <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        />
                        <button type="submit">Login</button>
                    </form>
                </div>
            );
        }
    

export default Login;