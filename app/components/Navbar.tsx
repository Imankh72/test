import Link from "next/link";
import { PhoneIcon } from "./svgs/PhoneIcon";
import { SearchStatusIcon } from "./svgs/SearchStatusIcon";
import { CategoryIcon } from "./svgs/CategoryIcon";
import { UserProfileIcon } from "./svgs/UserProfileIcon";
import { StarIcon } from "./svgs/StarIcon";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-2 mx-8 bg-white rounded-[10px] -mt-5 lg:gap-32 lg:mx-0">
      <button className="lg:hidden">
        <CategoryIcon />
      </button>
      <div className="flex items-center gap-2 lg:hidden">
        <button>
          <PhoneIcon primaryColor="##262630" secondaryColor="#949494" />
        </button>
        <button>
          <SearchStatusIcon />
        </button>
        <span className="inline-block bg-dark-main opacity-30 w-[0.125rem] rounded-[11px] h-5"></span>
        <button>
          <UserProfileIcon primaryColor="#262630" secondaryColor="#949494" />
        </button>
      </div>
      <ul className="hidden lg:flex items-center gap-10">
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
      <ul className="hidden lg:flex items-center gap-3">
        <li className="nav__link--dark">
          <button>
            <PhoneIcon
              primaryColor="##262630"
              secondaryColor="#fff"
              width="40"
              height="40"
            />
          </button>
        </li>
        <li className="nav__link--dark">
          <button>
            <StarIcon />
          </button>
        </li>
        <li className="nav__link--dark h-16 w-40">
          <button>
            <UserProfileIcon
              primaryColor="#fff"
              secondaryColor="#262630"
              width="40"
              height="40"
            />
            <span className="text-base font-vazir font-bold text-white">
              ورود به حساب
            </span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
