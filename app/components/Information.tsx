const Information = () => {
  return (
    <div className="mx-8 py-5 px-4 bg-white rounded-md lg:px-8 lg:w-full">
      <div className="bg-white relative py-5 lg:w-full lg:px-0">
        <span className="inline-block w-[2px] h-10 bg-red-primary rounded-md absolute -right-4 top-1/2 -translate-y-1/2 lg:-right-8 lg:w-[6px] lg:h-16"></span>
        <button className="flex items-center justify-center font-bold text-xs text-white bg-red-primary px-5 py-3 rounded-md lg:text-xl lg:px-8 lg:py-5">
          اطلاعات رزرو کننده
        </button>
      </div>
      <div className="mt-2 lg:mt-4 lg:w-full">
        {data.map(
          ({
            id,
            firstName,
            lastName,
            phone,
            firstNameValue,
            idValue,
            lastNameValue,
            phoneValue,
          }) => (
            <div className="flex flex-col gap-2 lg:gap-4" key={idValue}>
              <div className="lg:flex lg:items-center lg:justify-between">
                <div className="hidden w-full lg:block lg:bg-gray-secondary lg:rounded-md lg:px-10 lg:py-[1.25rem] lg:font-bold lg:text-xl lg:w-1/2 whitespace-nowrap">
                  {firstName}:
                </div>
                <div className="text-xs text-dark-primary font-bold bg-gray-secondary p-2 rounded-md lg:text-white lg:text-xl lg:bg-dark-primary lg:py-5 lg:px-10 lg:w-1/2 whitespace-nowrap lg:text-center">
                  {firstNameValue}
                </div>
              </div>
              <div className="lg:flex lg:items-center lg:justify-between">
                <div className="hidden lg:block lg:bg-gray-secondary lg:rounded-md lg:px-10 lg:py-[1.25rem] lg:font-bold lg:text-xl lg:w-1/2 whitespace-nowrap">
                  {lastName}:
                </div>
                <div className="text-xs text-dark-primary font-bold bg-gray-secondary p-2 rounded-md lg:text-white lg:text-xl lg:bg-dark-primary lg:py-5 lg:px-10 lg:w-1/2 whitespace-nowrap lg:text-center">
                  {lastNameValue}
                </div>
              </div>
              <div className="lg:flex lg:items-center lg:justify-between">
                <div className="hidden lg:block lg:bg-gray-secondary lg:rounded-md lg:px-10 lg:py-[1.25rem] lg:font-bold lg:text-xl lg:w-1/2 whitespace-nowrap">
                  {id}:
                </div>
                <div className="text-xs text-dark-primary font-bold bg-gray-secondary p-2 rounded-md lg:text-white lg:text-xl lg:bg-dark-primary lg:py-5 lg:px-10 lg:w-1/2 whitespace-nowrap lg:text-center">
                  {idValue}
                </div>
              </div>
              <div className="lg:flex lg:items-center lg:justify-between">
                <div className="hidden lg:block lg:bg-gray-secondary lg:rounded-md lg:px-10 lg:py-[1.25rem] lg:font-bold lg:text-xl lg:w-1/2 whitespace-nowrap">
                  {phone}:
                </div>
                <div className="text-xs text-dark-primary font-bold bg-gray-secondary p-2 rounded-md lg:text-white lg:text-xl lg:bg-dark-primary lg:py-5 lg:px-10 lg:w-1/2 whitespace-nowrap lg:text-center">
                  {phoneValue}
                </div>
              </div>
            </div>
          )
        )}
      </div>
      <div className="py-6 relative lg:py-9">
        <span className="inline-block w-[2px] h-10 bg-dark-primary rounded-md absolute -right-4 top-1/2 -translate-y-1/2 lg:-right-8 lg:w-[6px] lg:h-16"></span>
        <button className="flex items-center justify-center font-bold text-xs text-white bg-dark-primary px-5 py-3 rounded-md lg:text-xl lg:px-8 lg:py-5">
          مسافران - اتاق 1
        </button>
      </div>
      <div className="mt-2 flex flex-col gap-3 w-full lg:gap-5 lg:mt-4">
        <div className="hidden lg:flex justify-between items-center gap-14">
          <div className="flex items-center justify-center text-dark-primary bg-gray-secondary rounded-md px-10 py-[1.25rem] font-bold text-xl w-1/2 whitespace-nowrap">
            نام مسافران اصلی
          </div>
          <div className="flex items-center justify-center text-dark-primary bg-gray-secondary rounded-md px-10 py-[1.25rem] font-bold text-xl w-1/2 whitespace-nowrap">
            کد ملی مسافر
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full lg:justify-between lg:items-center lg:gap-14 lg:flex-row">
          <div className="flex items-center text-white bg-dark-primary rounded-md px-5 py-3 font-bold text-xs w-full whitespace-nowrap lg:text-xl lg:py-[1.25rem] lg:justify-center">
            محمد حسین رسولی
          </div>
          <div className="flex items-center text-white bg-dark-primary rounded-md px-5 py-3 font-bold text-xs w-full whitespace-nowrap lg:text-xl lg:py-[1.25rem] lg:justify-center">
            0024773321
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full lg:justify-between lg:items-center lg:gap-14 lg:flex-row">
          <div className="flex items-center text-white bg-dark-primary rounded-md px-5 py-3 font-bold text-xs w-full whitespace-nowrap lg:text-xl lg:py-[1.25rem] lg:justify-center">
            محمد حسین رسولی
          </div>
          <div className="flex items-center text-white bg-red-primary rounded-md px-5 py-3 font-bold text-xs w-full whitespace-nowrap lg:text-xl lg:py-[1.25rem] lg:justify-center">
            وارد نشده
          </div>
        </div>
      </div>
      <div className="py-6 relative lg:py-9">
        <span className="inline-block w-[2px] h-10 bg-dark-primary rounded-md absolute -right-4 top-1/2 -translate-y-1/2 lg:-right-8 lg:w-[6px] lg:h-16"></span>
        <button className="flex items-center justify-center font-bold text-xs text-white bg-dark-primary px-5 py-3 rounded-md lg:text-xl lg:px-8 lg:py-5">
          مسافران - اتاق 2
        </button>
      </div>
      <div className="mt-2 flex flex-col gap-3 w-full lg:gap-5 lg:mt-4">
        <div className="hidden lg:flex justify-between items-center gap-14">
          <div className="flex items-center justify-center text-dark-primary bg-gray-secondary rounded-md px-10 py-[1.25rem] font-bold text-xl w-1/2 whitespace-nowrap">
            نام مسافران اصلی
          </div>
          <div className="flex items-center justify-center text-dark-primary bg-gray-secondary rounded-md px-10 py-[1.25rem] font-bold text-xl w-1/2 whitespace-nowrap">
            کد ملی مسافر
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full lg:justify-between lg:items-center lg:gap-14 lg:flex-row">
          <div className="flex items-center text-white bg-dark-primary rounded-md px-5 py-3 font-bold text-xs w-full whitespace-nowrap lg:text-xl lg:py-[1.25rem] lg:justify-center">
            محمد حسین رسولی
          </div>
          <div className="flex items-center text-white bg-dark-primary rounded-md px-5 py-3 font-bold text-xs w-full whitespace-nowrap lg:text-xl lg:py-[1.25rem] lg:justify-center">
            0024773321
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full lg:justify-between lg:items-center lg:gap-14 lg:flex-row">
          <div className="flex items-center text-white bg-dark-primary rounded-md px-5 py-3 font-bold text-xs w-full whitespace-nowrap lg:text-xl lg:py-[1.25rem] lg:justify-center">
            محمد حسین رسولی
          </div>
          <div className="flex items-center text-white bg-red-primary rounded-md px-5 py-3 font-bold text-xs w-full whitespace-nowrap lg:text-xl lg:py-[1.25rem] lg:justify-center">
            وارد نشده
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;

const data = [
  {
    id: "کدملی",
    firstName: "نام ",
    lastName: "نام خانوادگی",
    phone: "تلفن",
    idValue: "1234567890",
    firstNameValue: "محمد",
    lastNameValue: "محمدی",
    phoneValue: "09123456789",
  },
];
