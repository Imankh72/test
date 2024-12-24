import { NoteIcon } from "./svgs/NoteIcon";

const FollowUpCode = () => {
  return (
    <div className="flex items-center justify-between rounded-md mx-8 bg-white py-5 px-4 lg:relative lg:w-full">
      <span className="hidden lg:inline-block lg:w-[6px] lg:h-14 lg:bg-dark-primary lg:rounded-md lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2"></span>
      <p className="text-dark-primary text-xs font-bold lg:text-2xl">
        کد پیگیری :
      </p>
      <div className="flex items-center justify-center gap-2">
        <div className="flex items-center justify-center rounded-md bg-dark-primary p-2 lg:p-4">
          <div className="lg:hidden">
            <NoteIcon />
          </div>
          <div className="hidden lg:block">
            <NoteIcon width="40" height="40" />
          </div>
        </div>
        <div className="flex items-center justify-center rounded-md bg-orange-secondary py-[10px] px-4 lg:py-[1.35rem] lg:px-6">
          <p className="text-orange-primary text-xs font-bold lg:text-xl">
            0326464956
          </p>
        </div>
      </div>
    </div>
  );
};

export default FollowUpCode;
