"use client";
import Link from "next/link";
import { useSession, signOut } from "@/lib/auth-client";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <div className="navbar bg-base-100 shadow-md px-4">
      <div className="navbar-start">
        <Link href="/" className="text-xl font-bold text-primary">
          BookBorrow
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/books">All Books</Link></li>
          {session && <li><Link href="/profile">My Profile</Link></li>}
        </ul>
      </div>
      <div className="navbar-end">
        {session ? (
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium">{session.user.name}</span>
            <button onClick={() => signOut()} className="btn btn-sm btn-error">
              Logout
            </button>
          </div>
        ) : (
          <Link href="/login" className="btn btn-sm btn-primary">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}