import ChooseUs from "../components/extra/ChooseUs";
import Review from "../components/extra/Review";
import HeroSlider from "../components/header/HeroSlider";

const HomePage = () => {
  return (
    <>
      <HeroSlider />
      <div className='w-[88%] mx-auto'>
        <ChooseUs />
        <Review />
      </div>
    </>
  );
};

export default HomePage;
