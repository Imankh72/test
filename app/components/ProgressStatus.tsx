import { CheckMarkIcon } from "./svgs/CheckMarkIcon";
import DashedLine from "./svgs/DashedLine";

const ProgressStatus = () => {
  return (
    <div className="p-2 flex justify-between items-center bg-white rounded-[11px] mx-8 lg:px-8 lg:py-12">
      <div className="flex justify-between items-center lg:hidden">
        <div className="flex items-center justify-center gap-2">
          <div className="p-2 rounded-md bg-green-secondary flex items-center justify-center">
            <CheckMarkIcon />
          </div>
          <div className="text-green-primary font-bold">
            <p className="text-[10px]">گام سوم</p>
            <p className="text-xs">پرداخت وجه</p>
          </div>
        </div>
        <div className=""></div>
      </div>
      <button className="flex items-center justify-center py-2 px-5 text-green-primary font-bold text-[10px] bg-green-secondary rounded-md lg:hidden">
        تکمیل شد
      </button>
      <div className="hidden lg:flex items-center justify-center gap-4">
        {data.map(({ id, stepName, stepNumber }) => (
          <div key={id} className="">
            <div className="flex items-end justify-center gap-5">
              <div className="p-2 rounded-md bg-green-secondary flex items-center justify-center">
                <CheckMarkIcon width="29" height="29" />
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-green-primary font-bold">
                  <p className="text-lg">گام {stepNumber}</p>
                  <p className="text-2xl">{stepName}</p>
                </div>
                <DashedLine />
              </div>
            </div>
          </div>
        ))}
        <button className="flex items-center justify-center py-2 px-5 text-green-primary font-bold text-[10px] bg-green-secondary rounded-md lg:hidden">
          تکمیل شد
        </button>
      </div>
    </div>
  );
};

export default ProgressStatus;

const data = [
  {
    id: 1,
    stepNumber: "اول",
    stepName: "مشخصات فرد",
  },
  {
    id: 2,
    stepNumber: "دوم",
    stepName: "بررسی ظرفیت",
  },
  {
    id: 3,
    stepNumber: "سوم",
    stepName: "پرداخت وجه",
  },
  {
    id: 4,
    stepNumber: "چهارم",
    stepName: "صدور واچر",
  },
];
