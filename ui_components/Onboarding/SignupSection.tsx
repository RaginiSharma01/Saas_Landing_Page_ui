import React, { useState } from "react";

import axios from "axios";

interface ISignupSection {
    setOnboardingView: (view: "login" | "signUp") => void;
}

const SignupSection = ({ setOnboardingView }: ISignupSection) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

    const submitForm = async (e) => {
        e.preventDefault()
       
        try {  
               const payload = {
                name: name,
                email: email,
                password: password
            }     
            setLoading(true)
            const response = await axios.post(`${baseUrl}/api/auth/register`, payload)
            
            console.log("Success", response)
        } catch (error) {
            console.log("Error: ", error)
        } finally{
            setLoading(false)
        }
    }

    return (
        <div className="w-full flex flex-col gap-6">
            <div className="text-center">
                <h2 className="text-xl font-semibold text-white">
                    Sign up to your account
                </h2>
                <p className="text-sm text-gray-400 mt-1">
                    Register your account
                </p>
            </div>

            <form className="flex flex-col gap-4" onSubmit={submitForm}>
                <div className="flex flex-col gap-1">
                    <label className="text-sm text-gray-400">Name</label>
                    <input
                        type="text"
                        placeholder="IronMan"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="px-3 py-2 rounded-lg bg-card-bg2 border border-gray-700 text-white"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-sm text-gray-400">Email</label>
                    <input
                        type="email"
                        placeholder="m@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="px-3 py-2 rounded-lg bg-card-bg2 border border-gray-700 text-white"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-gray-400 text-sm">Password</label>
                    <input
                        type="password"
                        placeholder="enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="px-3 py-2 rounded-lg bg-card-bg2 border border-gray-700 text-white"
                    />
                </div>

                {error && (
                    <p className="text-black text-sm">{error}</p>
                )}

                <button
                    type="submit"
                    disabled={loading}
                    className="mt-2 text-white py-2 rounded-lg font-medium bg-[linear-gradient(263deg,#10F9F1_0.3%,#2CC0F2_50.15%,#54F3A6_100%)] disabled:opacity-50"
                >
                    {loading ? "Signing up..." : "Sign up"}
                </button>
            </form>

            <p className="text-center text-sm text-gray-400">
                Go to login page{" "}
                <button
                    className="text-white underline"
                    onClick={() => setOnboardingView("login")}
                    
                >

                    Log in
                </button>
            </p>
        </div>
    );
};

export default SignupSection;
