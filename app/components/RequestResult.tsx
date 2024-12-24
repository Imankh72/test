import { BoxIcon } from "./svgs/BoxIcon";

const RequestResult = () => {
  return (
    <div className="bg-green-secondary text-green-primary mx-8 rounded-md py-5 px-4 lg:bg-white lg:py-8 lg:px-8 lg:text-dark-primary lg:flex lg:items-center lg:gap-3">
      <div className="hidden lg:block">
        <BoxIcon />
      </div>
      <p className="font-bold lg:text-3xl">درخواست شما با موفقیت تایید شد.</p>
    </div>
  );
};

export default RequestResult;
