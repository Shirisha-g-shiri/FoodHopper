
const Categories = () => {
  const categories = [
    {
      name: "Fine Dining",
      icon: "🍽️",
      count: "500+ restaurants",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Fast Food",
      icon: "🍔",
      count: "1200+ restaurants",
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Cafes",
      icon: "☕",
      count: "800+ restaurants",
      color: "from-amber-500 to-orange-500"
    },
    {
      name: "Vegan",
      icon: "🥗",
      count: "300+ restaurants",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Desserts",
      icon: "🧁",
      count: "400+ restaurants",
      color: "from-pink-500 to-rose-500"
    },
    {
      name: "Street Food",
      icon: "🌮",
      count: "600+ restaurants",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Browse by Category</h2>
          <p className="text-lg text-gray-600">Find restaurants that match your mood</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <div 
              key={category.name}
              className="group cursor-pointer"
            >
              <div className={`bg-gradient-to-br ${category.color} rounded-lg p-6 text-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-bold text-lg mb-2">{category.name}</h3>
                <p className="text-sm opacity-90">{category.count}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
