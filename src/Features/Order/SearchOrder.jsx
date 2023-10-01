import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  // Test ID: IIDSAT, CQE92U
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!searchQuery) return;

    navigate(`/order/${searchQuery}`);
    setSearchQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order #"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      ></input>
    </form>
  );
}

export default SearchOrder;
