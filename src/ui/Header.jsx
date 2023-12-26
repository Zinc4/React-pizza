import { Link } from "react-router-dom";
import SearchOrder from "./SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <div>
      <header className=" flex items-center justify-between border-b-2 border-stone-500 bg-yellow-300 px-3 py-4 uppercase sm:px-6">
        <Link to="/" className=" tracking-widest">
          Fast React Pizza Co.
        </Link>

        <SearchOrder />

        <Username />
      </header>
    </div>
  );
}

export default Header;
