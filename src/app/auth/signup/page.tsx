"use client"
import Link, { useRouter } from "next/navigation";
import { useState } from "react";

const SignupForm = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    if (formData.email.length == 0) {
        setError("email is required!");
        setIsLoading(false);
        return;
      }
    if (formData.password.length == 0) {
      setError("Passwords is required!");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      router.push("/auth/login");
    } catch (error) {
      setError(error instanceof Error ? error.message : "Failed to sign up");
    } finally {
      setIsLoading(false);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center font-serif text-white">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
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
                value={formData.password}
                onChange={handleChange}
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
            <p className="opacity-50">Your do have account?</p>
            <a href="/auth/login">Login</a>
          </div>
          {error && (
              <div className="text-red-500 text-sm bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                {error}
              </div>
            )}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full p-3 bg-white text-black font-semibold rounded-full"
          >
           {isLoading ? (
                  <div className="w-5 h-5 border-2 border-green border-t-transparent rounded-full animate-spin" />
                ) : (
                  "Create Account"
                )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
