import Link from "next/link";
import PhoneIcon from "./svgs/PhoneIcon";
import { SearchStatusIcon } from "./svgs/SearchStatusIcon";
import { CategoryIcon } from "./svgs/CategoryIcon";
import { UserProfileIcon } from "./svgs/UserProfileIcon";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-2 mx-8 bg-white rounded-[10px] -mt-5">
      <div className="lg:hidden">
        <CategoryIcon />
      </div>
      <div className="flex items-center gap-2 lg:hidden">
        <PhoneIcon />
        <SearchStatusIcon />
        <span className="inline-block bg-[#262630] opacity-30 w-[0.125rem] rounded-[11px] h-5"></span>
        <UserProfileIcon />
      </div>
      <ul className="flex items-center gap-10">
        <li>
          <Link href="#" className="nav__link">
            صفحه اصلی
          </Link>
        </li>
        <li>
          <Link href="#" className="nav__link">
            بهترین هتل ها
          </Link>
        </li>
        <li>
          <Link href="#" className="nav__link">
            مجله گردشگری
          </Link>
        </li>
        <li>
          <Link href="#" className="nav__link">
            درباره ما
          </Link>
        </li>
        <li>
          <Link href="#" className="nav__link">
            تماس با ما
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
