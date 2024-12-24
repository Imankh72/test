import SearchInputIcon from "./svgs/SearchInputIcon";

const SearchInput = () => {
  return (
    <div className="relative h-9">
      <input
        type="text"
        className="bg-[#080F21] inline-block h-full rounded-[35px]"
      />
      <div className="absolute top-1/2 right-3 -translate-y-1/2">
        <SearchInputIcon />
      </div>
    </div>
  );
};

export default SearchInput;
