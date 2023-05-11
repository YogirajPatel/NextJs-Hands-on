import Link from 'next/link';
import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

const Navbar = () => {
  const { data: session } = useSession();
  console.log('Session', session);
  return (
    <>
      <nav className="mt-2 shadow-xl p-3">
        <ul className="flex justify-center items-center gap-10 text-xl font-bold font-mono ml-auto">
          <Link href="/">
            <li className="hover:text-blue-900">Home</li>
          </Link>
          <Link href="/blog">
            <li className="hover:text-blue-900">Blog</li>
          </Link>
          <Link href="/about">
            <li className="hover:text-blue-900">About</li>
          </Link>
          <Link href="/contact">
            <li className="hover:text-blue-900">Contact</li>
          </Link>
          {session ? (
            <li
              onClick={signOut}
              className="border-2 border-black bg-red-600 text-white px-3 py-1 rounded-md cursor-pointer"
            >
              Logout
            </li>
          ) : (
            <li
              onClick={signIn}
              className="border-2 border-black bg-blue-600 text-white px-3 py-1 rounded-md cursor-pointer"
            >
              Login
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
