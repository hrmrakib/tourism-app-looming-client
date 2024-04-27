import ChooseUs from "../components/extra/ChooseUs";
import Review from "../components/extra/Review";
import HeroSlider from "../components/header/HeroSlider";
import TouristSpot from "../components/tourist/TouristSpot";

const HomePage = () => {
  return (
    <div className='bg-white dark:bg-gray-900'>
      <HeroSlider />
      <div className='w-[88%] mx-auto'>
        <TouristSpot />
        <ChooseUs />
        <Review />
      </div>
    </div>
  );
};

export default HomePage;
