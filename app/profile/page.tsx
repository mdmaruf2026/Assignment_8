"use client";
import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

export default function ProfilePage() {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isPending && !session) {
      router.push("/login");
    }
  }, [session, isPending, router]);

  if (isPending) return <div className="text-center py-20">Loading...</div>;
  if (!session) return null;

  const user = session.user;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-lg mx-auto">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <div className="avatar mb-4">
              <div className="w-24 rounded-full ring ring-primary ring-offset-2">
                <img
                  src={user.image || "https://api.dicebear.com/7.x/avataaars/svg?seed=" + user.name}
                  alt={user.name}
                />
              </div>
            </div>
            <h2 className="card-title text-2xl">{user.name}</h2>
            <p className="text-gray-500">{user.email}</p>
            <div className="badge badge-primary mt-2">Member</div>

            <div className="divider"></div>

            <div className="w-full text-left">
              <div className="flex justify-between py-2 border-b">
                <span className="font-semibold">Name:</span>
                <span>{user.name}</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="font-semibold">Email:</span>
                <span>{user.email}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="font-semibold">Joined:</span>
                <span>{new Date(user.createdAt).toLocaleDateString()}</span>
              </div>
            </div>

            <div className="card-actions mt-6">
              <Link href="/profile/update" className="btn btn-primary">
                Update Information
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}