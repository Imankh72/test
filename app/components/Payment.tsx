const Payment = () => {
  return (
    <div className="flex flex-col gap-3 py-5 px-4 bg-white rounded-md mx-8 lg:flex-row lg:gap-8 lg:py-8 lg:items-center">
      <div className="bg-gray-secondary rounded-md p-3 lg:w-1/2 lg:bg-white">
        <p className="text-xs font-bold text-dark-primary lg:text-2xl lg:whitespace-nowrap">
          * مشتری گرامی با کلیک روی دکمه سبز می توانید ادامه فرایند را دنبال
          کنید.
        </p>
      </div>
      <div className="flex flex-col gap-3 justify-center lg:items-center lg:flex-row lg:w-full lg:justify-end">
        <div className="p-3 bg-green-secondary text-green-primary text-xs font-bold flex items-center justify-between rounded-md py-5 flex-1 lg:bg-white lg:text-dark-primary lg:text-2xl lg:justify-end">
          <p className="lg:hidden">قیمت نهایی :</p>
          <p>24,500,000 تومان</p>
        </div>
        <button className="py-5 px-3 rounded-md bg-green-primary text-white text-xs font-bold w-full lg:flex lg:items-center lg:justify-center lg:flex-1 lg:text-2xl lg:rounded-[11px]">
          <span>تایید شده - پرداخت نهایی</span>
        </button>
      </div>
    </div>
  );
};

export default Payment;
