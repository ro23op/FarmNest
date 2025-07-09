import React, { useState } from 'react';
import { auth, provider } from '../../firebase';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      const idToken = await userCred.user.getIdToken();

      // Send token to backend to create session (optional)
      await fetch('/auth/firebase-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idToken })
      });

      window.location.href = '/dashboard'; // or wherever
    } catch (err) {
      console.error(err);
      setError('Login failed. Please check your credentials.');
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const idToken = await result.user.getIdToken();

      // Send token to backend
      await fetch('/auth/firebase-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idToken })
      });

      window.location.href = '/';

    } catch (err) {
      console.error(err);
      setError('Google login failed.');
    }
  };

  return (
    <div className="min-h-screen -mt-10 flex">
      {/* Left Image Section */}
      <div className="w-1/2 hidden lg:flex items-center justify-center bg-green-100">
        <img 
          src="https://media.istockphoto.com/id/1266313532/vector/cartoon-farmer-in-front-of-colorful-farm-with-barn.jpg?s=612x612&w=0&k=20&c=ykIcrGlHqd3GyqVdWiV6HTQk2yDJGTISaflANDOiSe4=" 
          alt="Farm Illustration" 
          className="w-4/5 h-auto rounded-xl shadow-xl"
        />
      </div>

      {/* Right Login Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-green-700 mb-6">Welcome to FarmNest 🌱</h2>

          {error && <p className="text-red-500 mb-4">{error}</p>}

          <form className="space-y-5" onSubmit={handleEmailLogin}>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="you@example.com"
                required 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="••••••••" 
                required 
              />
            </div>
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-green-600" />
                Remember me
              </label>
              <a href="#" className="text-green-600 hover:underline">Forgot password?</a>
            </div>
            <button 
              type="submit" 
              className="w-full bg-green-600 text-white p-3 rounded-md hover:bg-green-700 transition-all"
            >
              Login
            </button>
          </form>

          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">or</p>
            <button 
              onClick={handleGoogleLogin}
              className="mt-3 w-full border border-gray-300 rounded-md p-3 flex items-center justify-center gap-3 hover:bg-gray-50 transition-all"
            >
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
              Sign in with Google
            </button>
          </div>

          <p className="text-sm text-center text-gray-600 mt-6">
            Don’t have an account? <a href="/signup" className="text-green-600 hover:underline">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
