
const FeaturedCities = () => {
  const cities = [
    {
      name: "Mumbai",
      restaurants: "2,500+",
      image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Delhi",
      restaurants: "3,200+",
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Bangalore",
      restaurants: "2,100+",
      image: "https://images.unsplash.com/photo-1558618666-fbd19c732b00?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Pune",
      restaurants: "1,800+",
      image: "https://images.unsplash.com/photo-1586999918689-6e9e81bca05b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Cities</h2>
          <p className="text-lg text-gray-600">Discover amazing restaurants in these popular destinations</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cities.map((city, index) => (
            <div 
              key={city.name}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div 
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${city.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-2xl font-bold">{city.name}</h3>
                <p className="text-orange-300">{city.restaurants} restaurants</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCities;
