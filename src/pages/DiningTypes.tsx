
import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";

const DiningTypes = () => {
  const diningTypes = [
    {
      name: "Fine Dining",
      description: "Elegant restaurants with premium cuisine and exceptional service",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      link: "/search?type=fine-dining"
    },
    {
      name: "Rooftop",
      description: "Stunning views with great food and ambiance",
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      link: "/search?type=rooftop"
    },
    {
      name: "Café",
      description: "Cozy spots perfect for coffee, light meals, and conversations",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      link: "/search?type=cafe"
    },
    {
      name: "Fast Food",
      description: "Quick, convenient, and delicious meals on the go",
      image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      link: "/search?type=fast-food"
    },
    {
      name: "Family-Friendly",
      description: "Welcoming spaces perfect for dining with kids and family",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      link: "/search?type=family-friendly"
    },
    {
      name: "Romantic",
      description: "Intimate settings perfect for date nights and special occasions",
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      link: "/search?type=romantic"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Explore Dining Types
            </h1>
            <p className="text-lg text-gray-600">
              Discover the perfect dining experience for every occasion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {diningTypes.map((type, index) => (
              <div 
                key={type.name}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${type.image})` }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{type.name}</h3>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <Link 
                    to={type.link}
                    className="inline-block bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
                  >
                    View Restaurants
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiningTypes;
