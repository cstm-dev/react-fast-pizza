import SearchOrder from "features/Order/SearchOrder.jsx";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/">Fast React Pizza Co.</Link>

      <SearchOrder />

      <p>John Wick</p>
    </header>
  );
}

export default Header;
