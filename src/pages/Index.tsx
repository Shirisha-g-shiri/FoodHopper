
import Hero from "../components/Hero";
import FeaturedCities from "../components/FeaturedCities";
import TrendingRestaurants from "../components/TrendingRestaurants";
import Categories from "../components/Categories";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <FeaturedCities />
      <TrendingRestaurants />
      <Categories />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
