export default function Footer() {
  return (
    <footer className="footer footer-center bg-base-300 text-base-content p-10">
      <div>
        <p className="font-bold text-lg">📚 BookBorrow</p>
        <p>Your digital library — borrow books anytime, anywhere.</p>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a href="#" className="link link-hover">Facebook</a>
          <a href="#" className="link link-hover">Twitter</a>
          <a href="#" className="link link-hover">Instagram</a>
        </div>
      </div>
      <div>
        <p>Contact us: bookborrow@email.com</p>
        <p>© 2025 BookBorrow. All rights reserved.</p>
      </div>
    </footer>
  );
}