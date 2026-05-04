"use client";
import { useState } from "react";
import Link from "next/link";
import booksData from "@/public/books.json";

const categories = ["All", "Story", "Tech", "Science"];

export default function BooksPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filtered = booksData.filter((book) => {
    const matchSearch = book.title.toLowerCase().includes(search.toLowerCase());
    const matchCategory = selectedCategory === "All" || book.category === selectedCategory;
    return matchSearch && matchCategory;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">All Books</h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search books by title..."
          className="input input-bordered w-full max-w-lg"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="flex gap-6">
        {/* Category Sidebar */}
        <div className="w-48 shrink-0">
          <h2 className="font-bold text-lg mb-4">Categories</h2>
          <ul className="menu bg-base-200 rounded-box">
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  className={selectedCategory === cat ? "active" : ""}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Books Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.length === 0 ? (
              <p className="text-center col-span-3">No books found.</p>
            ) : (
              filtered.map((book) => (
                <div key={book.id} className="card bg-base-100 shadow-xl">
                  <figure className="px-4 pt-4">
                    <img src={book.image_url} alt={book.title} className="rounded-xl h-48 object-cover w-full" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title text-sm">{book.title}</h2>
                    <p className="text-xs text-gray-500">{book.author}</p>
                    <div className="badge badge-secondary">{book.category}</div>
                    <div className="card-actions justify-end">
                      <Link href={`/books/${book.id}`} className="btn btn-primary btn-sm">Details</Link>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}