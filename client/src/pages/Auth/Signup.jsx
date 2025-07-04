import React from 'react';

const Signup = () => {
  return (
    <div className="flex min-h-screen flex-col lg:flex-row -mt-10">
      <div className="w-1/2 hidden lg:flex items-center justify-center bg-green-100">
        <img 
          src="https://media.istockphoto.com/id/1266313532/vector/cartoon-farmer-in-front-of-colorful-farm-with-barn.jpg?s=612x612&w=0&k=20&c=ykIcrGlHqd3GyqVdWiV6HTQk2yDJGTISaflANDOiSe4=" 
          alt="Farm Illustration" 
          className="w-4/5 h-auto rounded-xl shadow-xl"
        />
      </div>

      {/* Right Side Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-20">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-semibold text-green-700 mb-6">
            Create your account
          </h2>
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                placeholder="Ravi Sharma"
                className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:ring-green-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:ring-green-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                placeholder="••••••••"
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
