import CountryTouristSpot from "../components/countrySpot/CountryTouristSpot";
import ChooseUs from "../components/extra/ChooseUs";
import Review from "../components/extra/Review";
import HeroSlider from "../components/header/HeroSlider";
import TouristSpot from "../components/tourist/TouristSpot";

const HomePage = () => {
  return (
    <div className='bg-white dark:bg-gray-900'>
      <HeroSlider />
      <div className='w-[80%] mx-auto'>
        <TouristSpot />
        <CountryTouristSpot />
        <ChooseUs />
        <Review />
      </div>
    </div>
  );
};

export default HomePage;
