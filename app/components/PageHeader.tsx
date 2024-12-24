import SearchInput from "./SearchInput";
import HeroIcon from "./svgs/HeroIcon";

const PageHeader = () => {
  return (
    <header className="bg-[#262630] h-36 flex flex-col items-center gap-3 pt-3 lg:bg-white">
      <SearchInput />
      <div className="flex justify-center items-center gap-2">
        <HeroIcon />
        <span className="inline-block bg-[#48486A] h-6 w-[0.125rem] rounded-[11px]"></span>
        <p className="text-white text-xl tracking-widest font-bold">
          ZARVANTRIP
        </p>
      </div>
    </header>
  );
};

export default PageHeader;
