import { useState } from "react";
import { auth } from "../../firebase"; // adjust path as needed
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      const idToken = await userCred.user.getIdToken();

      // Optionally send token & fullName to backend to create user in DB
      await fetch("/auth/firebase-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken, username: fullName })
      });

      // Redirect or show success
      window.location.href = "/dashboard"; // or cart, homepage, etc.
    } catch (err) {
      console.error(err);
      setError("Signup failed. Try again.");
    }
  };

  return (
    <div className="flex min-h-screen flex-col lg:flex-row -mt-10">
      <div className="w-1/2 hidden lg:flex items-center justify-center bg-green-100">
        <img 
          src="https://media.istockphoto.com/id/1266313532/vector/cartoon-farmer-in-front-of-colorful-farm-with-barn.jpg?s=612x612&w=0&k=20&c=ykIcrGlHqd3GyqVdWiV6HTQk2yDJGTISaflANDOiSe4=" 
          alt="Farm Illustration" 
          className="w-4/5 h-auto rounded-xl shadow-xl"
        />
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-20">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-semibold text-green-700 mb-6">
            Create your account
          </h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Ravi Sharma"
                required
                className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:ring-green-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:ring-green-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:ring-green-500 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white p-3 rounded-md hover:bg-green-700 transition-all"
            >
              Sign Up
            </button>
          </form>
          <p className="text-sm text-center text-gray-600 mt-6">
            Already have an account?{" "}
            <a href="/login" className="text-green-600 hover:underline">
              Log In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
