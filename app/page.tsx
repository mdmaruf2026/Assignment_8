import Link from "next/link";
import booksData from "@/public/books.json";

export default function Home() {
  const featuredBooks = booksData.slice(0, 4);

  return (
    <div>
      <div className="hero min-h-[60vh] bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Find Your Next Read</h1>
            <p className="py-6">Explore thousands of books and borrow them digitally.</p>
            <Link href="/books" className="btn btn-primary btn-lg">Browse Now</Link>
          </div>
        </div>
      </div>

      <div className="bg-primary text-primary-content py-2 overflow-hidden">
        {/* <marquee> */}
          New Arrivals: The Alchemist | Clean Code | Sapiens | Harry Potter | Special Discount on Memberships!
          {/* </marquee> */}
      </div>

      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Books</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredBooks.map((book) => (
            <div key={book.id} className="card bg-base-100 shadow-xl">
              <figure className="px-4 pt-4">
                <img src={book.image_url} alt={book.title} className="rounded-xl h-48 object-cover w-full" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-sm">{book.title}</h2>
                <p className="text-xs text-gray-500">{book.author}</p>
                <div className="badge badge-secondary">{book.category}</div>
                <div className="card-actions justify-end">
                  <Link href={`/books/${book.id}`} className="btn btn-primary btn-sm">View Details</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-base-200 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Why Choose BookBorrow?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6"><div className="text-4xl mb-4">📖</div><h3 className="font-bold text-xl mb-2">1000+ Books</h3><p>Huge collection across all genres</p></div>
            <div className="p-6"><div className="text-4xl mb-4">⚡</div><h3 className="font-bold text-xl mb-2">Instant Access</h3><p>Borrow and read instantly online</p></div>
            <div className="p-6"><div className="text-4xl mb-4">🔒</div><h3 className="font-bold text-xl mb-2">Secure and Safe</h3><p>Your data is always protected</p></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="mb-6">Subscribe to get notified about new arrivals.</p>
        <div className="flex justify-center gap-2">
          <input type="email" placeholder="Enter your email" className="input input-bordered w-full max-w-xs" />
          <button className="btn btn-primary">Subscribe</button>
        </div>
      </div>
    </div>
  );
}