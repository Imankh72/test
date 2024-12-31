import { ArrowUpIcon } from "./svgs/ArrowUpIcon";
import { EnamadIcon } from "./svgs/EnamadIcon";
import { HeroIcon } from "./svgs/HeroIcon";
import { LinkedinIcon } from "./svgs/LinkedinIcon";

const Footer = () => {
  return (
    <footer>
      <div className="py-5 px-1 bg-dark-primary text-white border-t-4 border-orange-primary lg:pt-20 lg:pl-8 lg:px-12">
        <div className="grid grid-rows-[auto,auto,auto,auto] gap-y-5 pb-5 lg:grid-rows-2 lg:grid-cols-2 lg:gap-x-20">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-4">
              <div className="border border-gray-secondary rounded-[11px] p-3">
                <HeroIcon />
              </div>
              <div className="flex flex-col gap-2 text-sm lg:text-xl">
                <p>زروان تریپ</p>
                <p>Agency Zarvantrip Hotel</p>
              </div>
            </div>
            <p className="text-sm lg:text-xl">
              لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم
              اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم
              لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم اپیسوم لورم اپیسوم
              لورم اپیسوم لورم.
            </p>
          </div>
          <div className="flex items-center gap-3 lg:gap-6 2xl:justify-between">
            <div className="hidden lg:flex bg-orange-primary text-white px-5 py-3 rounded-md gap-2 lg:mt-16">
              <span className="text-lg font-bold lg:whitespace-nowrap">
                برو به بالا
              </span>
              <ArrowUpIcon />
            </div>
            <div className="bg-white rounded-[11px] p-4 lg:py-7 lg:px-10">
              <EnamadIcon />
            </div>
            <div className="bg-white rounded-[11px] p-4 lg:py-7 lg:px-10">
              <EnamadIcon />
            </div>
            <div className="bg-white rounded-[11px] p-4 lg:py-7 lg:px-10">
              <EnamadIcon />
            </div>
            <div className="bg-white rounded-[11px] p-4 lg:py-7 lg:px-10">
              <EnamadIcon />
            </div>
          </div>
          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-[1fr,1fr] lg:grid-rows-3 lg:gap-y-5 lg:row-start-1 lg:row-end-2 lg:col-start-2 lg:col-end-3">
            <div className="flex items-center gap-[0.75rem] lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3 lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-y-6 lg:gap-x-3">
              <div className="bg-orange-primary rounded-[11px] p-5 lg:hidden">
                <ArrowUpIcon />
              </div>
              <div className="bg-dark-secondary rounded-[11px] p-5 lg:w-full lg:h-full lg:flex lg:justify-center lg:items-center">
                <LinkedinIcon />
              </div>
              <div className="bg-dark-secondary rounded-[11px] p-5 lg:w-full lg:h-full lg:flex lg:justify-center lg:items-center">
                <LinkedinIcon />
              </div>
              <div className="bg-dark-secondary rounded-[11px] p-5 lg:w-full lg:h-full lg:flex lg:justify-center lg:items-center">
                <LinkedinIcon />
              </div>
              <div className="bg-dark-secondary rounded-[11px] p-5 lg:w-full lg:h-full lg:flex lg:justify-center lg:items-center">
                <LinkedinIcon />
              </div>
            </div>
            <div className="flex items-center gap-[0.75rem] lg:row-start-1 lg:row-end-2">
              <div className="bg-orange-primary rounded-[11px] p-5">
                <ArrowUpIcon />
              </div>
              <div className="lg:whitespace-nowrap bg-dark-secondary p-4 text-xs font-bold rounded-[11px]  lg:text-lg">
                بلوار فردوس خیابان ولیعصر کوچه تقدیری شرقی پلاک 6 واحد 7
              </div>
            </div>
            <div className="flex items-center gap-[0.75rem]">
              <div className="bg-orange-primary rounded-[11px] p-5">
                <ArrowUpIcon />
              </div>
              <div className="lg:whitespace-nowrap bg-dark-secondary p-4 text-xs font-bold rounded-[11px]  lg:text-lg">
                بلوار فردوس خیابان ولیعصر کوچه تقدیری شرقی پلاک 6 واحد 7
              </div>
            </div>
            <div className="flex items-center gap-[0.75rem] lg:row-start-3 lg:row-end-4">
              <div className="bg-orange-primary rounded-[11px] p-5">
                <ArrowUpIcon />
              </div>
              <div className="lg:whitespace-nowrap bg-dark-secondary p-4 text-xs font-bold rounded-[11px]  lg:text-lg">
                بلوار فردوس خیابان ولیعصر کوچه تقدیری شرقی پلاک 6 واحد 7
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 lg:row-start-2 lg:row-end-3">
            <div className="flex flex-col gap-5">
              <p className="text-sm font-bold lg:text-xl">دسترسی سریع</p>
              <ul className="list-disc flex flex-col gap-3 pr-3">
                <li className="text-xs font-bold lg:text-base">صفحه اصلی</li>
                <li className="text-xs font-bold lg:text-base">خدمات</li>
                <li className="text-xs font-bold lg:text-base text-orange-primary">
                  تماس با ما
                </li>
                <li className="text-xs font-bold lg:text-base">درباره ما</li>
              </ul>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-sm font-bold lg:text-xl">دسترسی سریع</p>
              <ul className="list-disc flex flex-col gap-3 pr-3">
                <li className="text-xs font-bold lg:text-base">صفحه اصلی</li>
                <li className="text-xs font-bold lg:text-base">خدمات</li>
                <li className="text-xs font-bold lg:text-base text-orange-primary">
                  تماس با ما
                </li>
                <li className="text-xs font-bold lg:text-base">درباره ما</li>
              </ul>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-sm font-bold lg:text-xl">دسترسی سریع</p>
              <ul className="list-disc flex flex-col gap-3 pr-3">
                <li className="text-xs font-bold lg:text-base">صفحه اصلی</li>
                <li className="text-xs font-bold lg:text-base">خدمات</li>
                <li className="text-xs font-bold lg:text-base text-orange-primary">
                  تماس با ما
                </li>
                <li className="text-xs font-bold lg:text-base">درباره ما</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-dark-secondary flex flex-col items-center gap-3 lg:flex-row lg:justify-between p-5 text-white lg:p-10">
        <p className="font-bold lg:text-xl lg:order-2">
          Design & Develop By{" "}
          <span className="text-orange-primary">SEVIN TEAM</span>
        </p>
        <p className="text-sm font-bold lg:text-xl lg:order-1">
          تمامی حقوق این وبسایت متعلق به زروان تریپ می باشد.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
