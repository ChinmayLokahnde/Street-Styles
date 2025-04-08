import axios from "axios";
import { useState } from "react"

const Register = ()=>{
    const[name, setName]= useState("");
    const[email, setEmail]= useState("");
    const[password, setPassword]= useState("");
    const[message, setMessage]= useState("");

    const handleRegister = async (e)=>{
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:3000/api/users/register",{
                name,
                email,
                password,
            });
            setMessage("user get RREGISTERD succesfully");
            console.log("register response:", res.data)
        } catch (error) {
            setMessage(error.response?.data?.message || "Registration Failed");
            console.log("Rgister err:", error)
        }
    };
    return(
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-black via-gray-900 to-gray-800">
            <form onSubmit={handleRegister}
            className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-lg w-96">
                <h2 className="text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-6">Register</h2>
                <div className="mb-4">
                    <label className="block text-gray-300 text-sm font-semibold mb-2">Name</label>
                    <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-lg"
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-300 text-sm font-semibold mb-2">Email</label>
                    <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-lg"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label className="block text-gray-300 text-sm font-semibold mb-2">Password</label>
                    <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-lg"
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    />
                </div>
                <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition"
                >Register</button>
                {message &&(
                    <p className="text-center mt-4 text-sm text-red-400">{message}</p>
                )}
                 <p className="text-gray-400 text-center mt-4 text-sm">
                 Already have an account?{" "}
                 <a href="/login" className="text-blue-400 hover:underline">Login</a>
                 </p>
            </form>
        </div>
    )

}

export default Register;