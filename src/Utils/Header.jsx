import SearchOrder from "features/Order/SearchOrder.jsx";
import User from "features/User/User.jsx";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-500 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>

      <SearchOrder />

      <User />
    </header>
  );
}

export default Header;
