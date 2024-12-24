import FollowUpCode from "./components/FollowUpCode";
import Information from "./components/Information";
import PageHeader from "./components/PageHeader";
import ProgressStatus from "./components/ProgressStatus";
import RequestResult from "./components/RequestResult";

const Home = () => {
  return (
    <main className="font-vazir overflow-hidden bg-gray-tertiary min-h-screen min-w-screen lg:bg-gray-tertiary flex flex-col gap-5">
      <PageHeader />
      <ProgressStatus />
      <RequestResult />
      <div className="lg:flex">
        <div className="lg:w-1/2">
          <FollowUpCode />
          <Information />
        </div>
        <div className=""></div>
      </div>
    </main>
  );
};

export default Home;
