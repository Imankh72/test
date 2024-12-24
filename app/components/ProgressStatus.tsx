import { CheckMarkIcon } from "./svgs/CheckMarkIcon";
import { CrossIcon } from "./svgs/CrossIcon";
import { DashedLine } from "./svgs/DashedLine";

const ProgressStatus = () => {
  return (
    <div className="">
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
          {data.map(({ id, stepName, stepNumber, stepStatus }) => (
            <div key={id} className="">
              <div className="flex items-end justify-center gap-5">
                <div
                  className={`p-2 rounded-md flex items-center justify-center ${
                    stepStatus === "not-active"
                      ? "bg-[#5b5b6d33]"
                      : "bg-green-secondary"
                  }`}
                >
                  {stepStatus === "not-active" ? (
                    <CrossIcon />
                  ) : (
                    <CheckMarkIcon width="30" height="30" />
                  )}
                </div>
                <div className="flex flex-col gap-3">
                  <div
                    className={`font-bold ${
                      stepStatus === "not-active"
                        ? "text-[#5b5b6d]"
                        : "text-green-primary"
                    }`}
                  >
                    <p className="text-lg">گام {stepNumber}</p>
                    <p
                      className={`text-2xl ${
                        stepStatus === "not-active"
                          ? "text-black"
                          : "text-green-primary"
                      }`}
                    >
                      {stepName}
                    </p>
                  </div>
                  {stepStatus === "not-active" ? (
                    <DashedLine color="#5b5b6d" />
                  ) : (
                    <DashedLine />
                  )}
                </div>
              </div>
            </div>
          ))}
          <button className="flex items-center justify-center py-2 px-5 text-green-primary font-bold text-[10px] bg-green-secondary rounded-md lg:hidden">
            تکمیل شد
          </button>
        </div>
      </div>
      <div className="mx-8 flex items-center justify-center gap-3 mt-5 lg:hidden">
        <span className="inline-block bg-green-primary h-[0.125rem] w-5 rounded-md"></span>
        <span className="inline-block bg-green-primary h-[0.125rem] w-5 rounded-md"></span>
        <span className="inline-block bg-[#5b5b6d] h-[0.125rem] w-5 rounded-md"></span>
        <span className="inline-block bg-[#5b5b6d] h-[0.125rem] w-5 rounded-md"></span>
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
    stepStatus: "not-active",
  },
];
