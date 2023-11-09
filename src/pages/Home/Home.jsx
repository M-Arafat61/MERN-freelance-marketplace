import Banner from "./Banner";
import Category from "./Category";
import Newsletter from "./Newsletter";
import Feedback from "./Feedback";

const Home = () => {
  document.title = "IT-Quester | Home";
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <div className='bg-teal-100 rounded-3xl overflow-hidden'>
        <Newsletter></Newsletter>
      </div>
      <Feedback></Feedback>
    </div>
  );
};

export default Home;
