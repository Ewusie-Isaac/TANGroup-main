import Navigation from './Navigation';
import Groups from './Groups';
import GroupList from './GroupList';

const HeroBanner = () => {
  return (
    <>
      <header className="tangroup">
        <Navigation />
        <div className="lg:mb-42 mb-14 mt-5 lg:mt-10">
          <h1 className="text-center text-5xl font-bold">
            TAN Group of Companies
          </h1>
          <p className="mt-5 text-center text-lg">
            TAN Groups is a community of people who are passionate about
            technology and science.
          </p>
          {/* <GroupList /> */}
        </div>
        <GroupList />

        {/* <Groups /> */}
      </header>
    </>
  );
};

export default HeroBanner;
