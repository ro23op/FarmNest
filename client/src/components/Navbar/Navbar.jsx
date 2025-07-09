import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { auth } from '../../firebase'; // make sure this path is correct
import { onAuthStateChanged, signOut } from 'firebase/auth';

const Navbar = () => {
  const links = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Farms', href: '/farms' },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    window.location.href = '/'; // or refresh state
  };

  return (
    <nav className="bg-white drop-shadow-xl px-4 py-3 md:px-10 lg:px-20 flex items-center justify-between sticky top-0 z-50">
      <div className="font-black text-emerald-700 text-2xl tracking-wide">
        FarmNest<span className="text-black">.</span>
      </div>

      {/* Hamburger Icon */}
      <button
        className="md:hidden hover:cursor-pointer flex flex-col justify-center items-center w-10 h-10"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <GiHamburgerMenu />
      </button>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 list-none m-0 p-0 items-center">
        {links.map((link, idx) => (
          <li key={idx}>
            <a
              href={link.href}
              className="relative text-gray-900 font-bold transition-all before:content-[''] before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:h-[2px] before:w-0 before:bg-emerald-600 before:transition-all before:duration-300 hover:before:w-full"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      <div className="hidden md:flex gap-4">
        {!user ? (
          <>
            <a
              href="/login"
              className="px-5 py-2 border-2 rounded-full bg-[#0B7779] text-white font-semibold hover:bg-white hover:text-[#0B7779] border-[#0B7779] transition-colors flex items-center justify-center"
            >
              Login
            </a>
            <a
              href="/signup"
              className="px-5 py-2 rounded-full border-2 border-[#DA6801] bg-[#DA6801] text-white font-semibold hover:text-[#DA6801] hover:bg-white transition-colors flex items-center justify-center"
            >
              Sign Up
            </a>
          </>
        ) : (
          <>
            <a
              href="/dashboard"
              className="flex items-center px-5 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition-colors font-semibold"
            >
              My Profile
            </a>
            <button
              onClick={handleLogout}
              className="px-5 py-2 border-2 rounded-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-colors font-semibold"
            >
              Logout
            </button>
          </>
        )}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white/90 shadow-md flex flex-col items-center md:hidden z-40">
          <ul className="flex flex-col gap-4 py-4 w-full items-center">
            {links.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="relative text-gray-900 font-medium transition-all before:content-[''] before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:h-[2px] before:w-0 before:bg-emerald-600 before:transition-all before:duration-300 hover:before:w-full"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2 pb-4 w-full items-center">
            {!user ? (
              <>
                <a
                  href="/login"
                  onClick={() => setMenuOpen(false)}
                  className="w-4/5 px-5 py-2 border-2 rounded-full bg-[#0B7779] text-white font-semibold hover:bg-white hover:text-[#0B7779] border-[#0B7779] transition-colors flex items-center justify-center"
                >
                  Login
                </a>
                <a
                  href="/signup"
                  onClick={() => setMenuOpen(false)}
                  className="w-4/5 px-5 py-2 rounded-full border-2 border-[#DA6801] bg-[#DA6801] text-white font-semibold hover:bg-white hover:text-[#DA6801] transition-colors flex items-center justify-center"
                >
                  Sign Up
                </a>
              </>
            ) : (
              <>
                <a
                  href="/dashboard"
                  onClick={() => setMenuOpen(false)}
                  className="w-4/5 px-5 py-2 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition-colors font-semibold text-center"
                >
                  My Profile
                </a>
                <button
                  onClick={() => {
                    handleLogout();
                    setMenuOpen(false);
                  }}
                  className="w-4/5 px-5 py-2 border-2 rounded-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-colors font-semibold"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
