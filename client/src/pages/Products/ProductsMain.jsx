import ProductCard from "./ProductCard"

const ProductsMain = () => {
  const products = [
    {
      id: 1,
      name: "Organic Cherry Tomatoes",
      description: "Sweet, juicy cherry tomatoes grown without pesticides. Perfect for salads and snacking.",
      image:
        "https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      farm: "Green Valley Organics",
      price: "120",
      unit: "kg",
      category: "Vegetables",
      isOrganic: true,
      rating: "4.8",
      stock: "25 kg",
    },
    {
      id: 2,
      name: "Farm Fresh Carrots",
      description: "Crunchy orange carrots packed with beta-carotene and natural sweetness.",
      image:
        "https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      farm: "Sunrise Heritage Farm",
      price: "60",
      unit: "kg",
      category: "Vegetables",
      isOrganic: true,
      rating: "4.7",
      stock: "40 kg",
    },
    {
      id: 3,
      name: "Free-Range Eggs",
      description: "Fresh eggs from happy hens roaming freely in natural pastures.",
      image:
        "https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      farm: "Happy Hens Farm",
      price: "120",
      unit: "dozen",
      category: "Dairy & Eggs",
      isOrganic: false,
      rating: "4.9",
      stock: "50 dozens",
    },
    {
      id: 4,
      name: "Pure Wildflower Honey",
      description: "Raw, unprocessed honey collected from wildflower meadows. Rich in antioxidants.",
      image:
        "https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      farm: "Bee Haven Apiaries",
      price: "450",
      unit: "500g",
      category: "Pantry",
      isOrganic: true,
      rating: "4.9",
      stock: "15 jars",
    },
    {
      id: 5,
      name: "Fresh Spinach Leaves",
      description: "Tender baby spinach leaves, iron-rich and perfect for salads and smoothies.",
      image:
        "https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      farm: "Green Valley Organics",
      price: "45",
      unit: "bunch",
      category: "Leafy Greens",
      isOrganic: true,
      rating: "4.6",
      stock: "30 bunches",
    },
    {
      id: 6,
      name: "Artisan Sourdough Bread",
      description: "Handcrafted sourdough made with organic flour and traditional fermentation.",
      image:
        "https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      farm: "Village Bakery Co.",
      price: "85",
      unit: "loaf",
      category: "Bakery",
      isOrganic: true,
      rating: "4.8",
      stock: "12 loaves",
    },
    {
      id: 7,
      name: "Seasonal Mixed Vegetables",
      description: "A variety pack of seasonal vegetables including bell peppers, zucchini, and eggplant.",
      image:
        "https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      farm: "Eco Harvest Farm",
      price: "95",
      unit: "kg",
      category: "Vegetables",
      isOrganic: true,
      rating: "4.7",
      stock: "20 kg",
    },
    {
      id: 8,
      name: "Aged Goat Cheese",
      description: "Creamy, tangy goat cheese aged to perfection. Great for cheese boards.",
      image:
        "https://images.pexels.com/photos/773253/pexels-photo-773253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      farm: "Mountain Dairy Co.",
      price: "320",
      unit: "200g",
      category: "Dairy & Eggs",
      isOrganic: false,
      rating: "4.8",
      stock: "8 pieces",
    },
    {
      id: 9,
      name: "Grass-Fed Beef",
      description: "Premium quality beef from cattle raised on natural pastures.",
      image:
        "https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      farm: "Prairie Cattle Ranch",
      price: "650",
      unit: "500g",
      category: "Meat",
      isOrganic: false,
      rating: "4.9",
      stock: "10 packs",
    },
    {
      id: 10,
      name: "Fresh A2 Milk",
      description: "Pure A2 milk from desi cows, easier to digest and naturally creamy.",
      image:
        "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      farm: "River Valley Dairy",
      price: "75",
      unit: "liter",
      category: "Dairy & Eggs",
      isOrganic: false,
      rating: "4.8",
      stock: "25 liters",
    },
    {
      id: 11,
      name: "Organic Baby Potatoes",
      description: "Small, tender potatoes with thin skin. Perfect for roasting and boiling.",
      image:
        "https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      farm: "Earth Harvest Farm",
      price: "40",
      unit: "kg",
      category: "Vegetables",
      isOrganic: true,
      rating: "4.6",
      stock: "35 kg",
    },
    {
      id: 12,
      name: "Fresh Herb Bundle",
      description: "A mix of fresh herbs including mint, coriander, and basil for cooking.",
      image:
        "https://images.pexels.com/photos/1458694/pexels-photo-1458694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      farm: "Mountain Fresh Herbs",
      price: "25",
      unit: "bundle",
      category: "Herbs",
      isOrganic: true,
      rating: "4.7",
      stock: "40 bundles",
    },
    {
      id: 13,
      name: "Himalayan Red Apples",
      description: "Crisp, sweet apples grown in the high altitudes of Himachal Pradesh.",
      image:
        "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      farm: "Himalayan Orchards",
      price: "180",
      unit: "kg",
      category: "Fruits",
      isOrganic: true,
      rating: "4.9",
      stock: "30 kg",
    },
    {
      id: 14,
      name: "Organic Quinoa",
      description: "Protein-rich superfood quinoa, perfect for healthy meals and salads.",
      image:
        "https://images.pexels.com/photos/793785/pexels-photo-793785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      farm: "Health Grains Farm",
      price: "280",
      unit: "500g",
      category: "Grains",
      isOrganic: true,
      rating: "4.8",
      stock: "20 packs",
    },
    {
      id: 15,
      name: "Fresh Coconut",
      description: "Young, tender coconuts with sweet water and soft flesh.",
      image:
        "https://images.pexels.com/photos/1002543/pexels-photo-1002543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      farm: "Coastal Spice Gardens",
      price: "35",
      unit: "piece",
      category: "Fruits",
      isOrganic: false,
      rating: "4.7",
      stock: "50 pieces",
    },
    {
      id: 16,
      name: "Organic Turmeric Powder",
      description: "Pure turmeric powder with high curcumin content. Anti-inflammatory superfood.",
      image:
        "https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      farm: "Spice Valley Farm",
      price: "150",
      unit: "250g",
      category: "Spices",
      isOrganic: true,
      rating: "4.9",
      stock: "25 packs",
    },
  ]

  const categories = [
    "All",
    "Vegetables",
    "Fruits",
    "Dairy & Eggs",
    "Meat",
    "Herbs",
    "Grains",
    "Spices",
    "Pantry",
    "Bakery",
  ]

  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="px-5 xl:px-20 py-10">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              Fresh Products
              <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-green-600 mx-auto mt-2"></div>
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover farm-fresh produce delivered straight from local farms to your doorstep. Quality guaranteed,
              freshness assured.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border border-emerald-200 text-emerald-700 hover:bg-emerald-500 hover:text-white transition-all duration-300 font-medium"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="text-center p-4 bg-emerald-50 rounded-lg">
              <div className="text-2xl font-bold text-emerald-600">150+</div>
              <div className="text-sm text-gray-600">Fresh Products</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">50+</div>
              <div className="text-sm text-gray-600">Partner Farms</div>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <div className="text-2xl font-bold text-yellow-600">100%</div>
              <div className="text-sm text-gray-600">Organic Options</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-600">24hrs</div>
              <div className="text-sm text-gray-600">Fresh Delivery</div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="px-5 xl:px-20 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors duration-300 font-medium shadow-lg">
            Load More Products
          </button>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-emerald-600 text-white py-16">
        <div className="px-5 xl:px-20 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Fresh Arrivals</h2>
          <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
            Get notified about new products, seasonal offers, and farming tips directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-emerald-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductsMain
