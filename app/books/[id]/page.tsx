"use client";
import { use } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "@/lib/auth-client";
import booksData from "@/public/books.json";

export default function BookDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { data: session } = useSession();
  const router = useRouter();

  const book = booksData.find((b) => b.id === parseInt(id));

  if (!book) return <div className="text-center py-20">Book not found!</div>;

  const handleBorrow = () => {
    if (!session) {
      router.push("/login");
    } else {
      alert(`You have borrowed "${book.title}" successfully!`);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Book Cover */}
        <div className="md:w-1/3">
          <img
            src={book.image_url}
            alt={book.title}
            className="rounded-xl shadow-xl w-full object-cover"
          />
        </div>

        {/* Book Details */}
        <div className="md:w-2/3">
          <h1 className="text-4xl font-bold mb-2">{book.title}</h1>
          <p className="text-xl text-gray-500 mb-4">by {book.author}</p>
          <div className="badge badge-secondary badge-lg mb-4">{book.category}</div>
          <p className="text-base leading-relaxed mb-6">{book.description}</p>
          <div className="alert alert-info mb-6">
            <span>📚 {book.available_quantity} copies available</span>
          </div>
          <button onClick={handleBorrow} className="btn btn-primary btn-lg">
            Borrow This Book
          </button>
        </div>
      </div>
    </div>
  );
}