"use client"
import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center font-serif text-white">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl bg-zinc-900/50 border border-zinc-800 px-4 py-3.5
                   text-white transition-colors duration-200
                   focus:outline-none focus:ring-2 focus:ring-sky-500/40"
              required
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="password" className="block text-white    mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl bg-zinc-900/50 border border-zinc-800 px-4 py-3.5
                   text-white transition-colors duration-200
                   focus:outline-none focus:ring-2 focus:ring-sky-500/40"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
              >
                {showPassword ? (
                  <span>👁️</span>
                ) : (
                  <span>👁️‍🗨️</span>
                )}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-white text-black font-semibold rounded-full"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
