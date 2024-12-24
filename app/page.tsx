import PageHeader from "./components/PageHeader";
import ProgressStatus from "./components/ProgressStatus";

const Home = () => {
  return (
    <main className="font-vazir overflow-hidden bg-gray-tertiary min-h-screen min-w-screen lg:bg-gray-tertiary flex flex-col gap-5">
      <PageHeader />
      <ProgressStatus />
    </main>
  );
};

export default Home;
