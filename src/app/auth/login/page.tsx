"use client"

import Link, { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn } from "next-auth/react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("Invalid credentials");
      } else {
        router.push("/dashboard");
      }
    } catch (error) {
      setError("An error occurred during sign in");
    } finally {
      setIsLoading(false);
    }
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
          <div className="flex justify-between text-white text-sm mb-4">
            <p className="opacity-50">Your don't have account?</p>
            <a href="/auth/signup">Create Account</a>
          </div>
          {error && (
              <div className="text-red-500 mb-4 text-sm bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                {error}
              </div>
            )}

          <button
            type="submit"
            className="w-full p-3 bg-white text-black font-semibold rounded-full"
          >
             {isLoading ? (
                  <div className="w-5 h-5 border-2 border-greens border-t-transparent rounded-full animate-spin" />
                ) : (
                  "Login"
                )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
