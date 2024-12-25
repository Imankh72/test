import FollowUpCode from "./components/FollowUpCode";
import UserInformation from "./components/UserInformation";
import PageHeader from "./components/PageHeader";
import ProgressStatus from "./components/ProgressStatus";
import RequestResult from "./components/RequestResult";
import HotelInformation from "./components/HotelInformation";
import Payment from "./components/Payment";

const Home = () => {
  return (
    <main className="font-vazir overflow-hidden bg-gray-tertiary min-h-screen min-w-screen lg:bg-gray-tertiary flex flex-col gap-5">
      <PageHeader />
      <ProgressStatus />
      <RequestResult />
      <div className="flex flex-col justify-center gap-6 lg:gap-3 lg:flex-row">
        <div className="lg:w-1/2">
          <FollowUpCode />
          <UserInformation />
        </div>
        <div className="mx-8 lg:w-1/2">
          <HotelInformation />
        </div>
      </div>
      <Payment />
    </main>
  );
};

export default Home;
