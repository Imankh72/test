import Navbar from "./Navbar";
import SearchInput from "./SearchInput";
import { HeroIcon } from "./svgs/HeroIcon";

const PageHeader = () => {
  return (
    <header className="lg:flex lg:items-center lg:px-4 lg:bg-white">
      <div className="flex flex-col items-center gap-3 bg-[#262630] size-full pt-3 pb-10 lg:bg-white lg:flex-row lg:justify-start">
        <SearchInput />
        <div className="flex justify-center items-center gap-2 lg:justify-start">
          <p className="font-inter text-white text-xl tracking-widest font-bold lg:hidden">
            ZARVANTRIP
          </p>
          <span className="inline-block bg-[#48486A] h-6 w-[0.125rem] rounded-[11px] lg:hidden"></span>
          <HeroIcon />
          <div className="hidden lg:flex flex-col items-center gap-1">
            <p className="font-inter text-xl font-bold">ZARVANTRIP</p>
            <p className="font-mani">هتلداری زروان تریپ</p>
          </div>
        </div>
      </div>
      <Navbar />
    </header>
  );
};

export default PageHeader;
