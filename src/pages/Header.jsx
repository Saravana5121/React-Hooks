import { FcHome } from "react-icons/fc";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <span className="sr-only">Sana React Dev.</span>
        <img
          className="h-10 w-auto"
          src="https://imgs.search.brave.com/vo6BX_XoOCp2zawTPCX6LDR7GYMp4BkOPyDkA_f-uFs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9h/L2E3L1JlYWN0LWlj/b24uc3Zn.svg"
          alt="React Dev"
        />
        <Link to="/">
          <span className="">
            <FcHome size={40} />
          </span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
