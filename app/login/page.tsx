"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "@/lib/auth-client";
import toast from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await signIn.email({ email, password });
    if (res.error) {
      toast.error(res.error.message || "Login failed!");
    } else {
      toast.success("Login successful!");
      router.push("/");
    }
    setLoading(false);
  };

  const handleGoogle = async () => {
    await signIn.social({ provider: "google", callbackURL: "/" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold text-center justify-center mb-4">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="form-control mb-3">
              <label className="label"><span className="label-text">Email</span></label>
              <input type="email" placeholder="email@example.com" className="input input-bordered" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="form-control mb-4">
              <label className="label"><span className="label-text">Password</span></label>
              <input type="password" placeholder="••••••••" className="input input-bordered" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button type="submit" className="btn btn-primary w-full" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
          <div className="divider">OR</div>
          <button onClick={handleGoogle} className="btn btn-outline w-full">
            🔵 Login with Google
          </button>
          <p className="text-center mt-4 text-sm">
            No account? <Link href="/register" className="link link-primary">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
}