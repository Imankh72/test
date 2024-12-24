import { SearchInputIcon } from "./svgs/SearchInputIcon";

const SearchInput = () => {
  return (
    <div className="relative h-9 flex justify-center lg:hidden">
      <input
        type="text"
        className="bg-[#080F21] w-[60%] inline-block h-full rounded-[35px] text-white pr-7"
      />
      <div className="absolute top-1/2 right-12 -translate-y-1/2">
        <SearchInputIcon />
      </div>
    </div>
  );
};

export default SearchInput;
