"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signUp, signIn } from "@/lib/auth-client";
import toast from "react-hot-toast";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await signUp.email({ name, email, password, image: photoUrl });
    if (res.error) {
      toast.error(res.error.message || "Registration failed!");
    } else {
      toast.success("Registration successful!");
      router.push("/login");
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
          <h2 className="card-title text-2xl font-bold text-center justify-center mb-4">Register</h2>
          <form onSubmit={handleRegister}>
            <div className="form-control mb-3">
              <label className="label"><span className="label-text">Name</span></label>
              <input type="text" placeholder="Your name" className="input input-bordered" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="form-control mb-3">
              <label className="label"><span className="label-text">Email</span></label>
              <input type="email" placeholder="email@example.com" className="input input-bordered" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="form-control mb-3">
              <label className="label"><span className="label-text">Photo URL</span></label>
              <input type="url" placeholder="https://photo-url.com/photo.jpg" className="input input-bordered" value={photoUrl} onChange={(e) => setPhotoUrl(e.target.value)} />
            </div>
            <div className="form-control mb-4">
              <label className="label"><span className="label-text">Password</span></label>
              <input type="password" placeholder="••••••••" className="input input-bordered" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button type="submit" className="btn btn-primary w-full" disabled={loading}>
              {loading ? "Registering..." : "Register"}
            </button>
          </form>
          <div className="divider">OR</div>
          <button onClick={handleGoogle} className="btn btn-outline w-full">
            🔵 Login with Google
          </button>
          <p className="text-center mt-4 text-sm">
            Already have an account? <Link href="/login" className="link link-primary">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}