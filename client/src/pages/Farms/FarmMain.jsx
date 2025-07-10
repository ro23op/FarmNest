import FarmCard from "./FarmCard"

const FarmMain = () => {
  const farms = [
    {
      id: 1,
      name: "Green Valley Organics",
      location: "Pune, Maharashtra",
      description:
        "A pioneer in organic farming with over 15 years of experience. We specialize in pesticide-free vegetables and seasonal fruits using traditional farming methods combined with modern sustainable practices.",
      image:
        "https://media.istockphoto.com/id/1328004520/photo/healthy-young-soybean-crop-in-field-at-dawn.jpg?s=612x612&w=0&k=20&c=XRw20PArfhkh6LLgFrgvycPLm0Uy9y7lu9U7fLqabVY=",
      farmType: "Organic",
      isCertified: true,
      established: "2008",
      rating: "4.9",
      specialties: "Organic Vegetables, Seasonal Fruits",
      size: "25 acres",
    },
    {
      id: 2,
      name: "Sunrise Heritage Farm",
      location: "Bangalore, Karnataka",
      description:
        "Family-owned farm practicing traditional farming methods passed down through generations. We focus on heirloom varieties and sustainable agriculture practices.",
      image: "https://images.pexels.com/photos/1198507/pexels-photo-1198507.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      farmType: "Heritage",
      isCertified: true,
      established: "1995",
      rating: "4.8",
      specialties: "Heirloom Tomatoes, Traditional Grains",
      size: "40 acres",
    },
    {
      id: 3,
      name: "Himalayan Orchards",
      location: "Shimla, Himachal Pradesh",
      description:
        "High-altitude apple orchards nestled in the Himalayas. Our apples are naturally sweet and crisp due to the perfect climate and soil conditions at 2000m elevation.",
      image:
        "https://media.istockphoto.com/id/965148388/photo/green-ripening-soybean-field-agricultural-landscape.jpg?s=612x612&w=0&k=20&c=cEVP3uj34-5obt-Jf_WI3O9qfP6tVrFaQIv1rBvvpzc=",
      farmType: "Orchard",
      isCertified: false,
      established: "1985",
      rating: "4.9",
      specialties: "Apples, Stone Fruits, Walnuts",
      size: "60 acres",
    },
    {
      id: 4,
      name: "Eco Harvest Farm",
      location: "Hyderabad, Telangana",
      description:
        "Zero-waste farming initiative focusing on sustainable practices and renewable energy. We grow exotic vegetables and leafy greens using hydroponic and aquaponic systems.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkrXLO_qY5NfHn_htENrb2QKnbErSo12fVog&s",
      farmType: "Hydroponic",
      isCertified: true,
      established: "2015",
      rating: "4.7",
      specialties: "Leafy Greens, Exotic Vegetables",
      size: "15 acres",
    },
    {
      id: 5,
      name: "Coastal Spice Gardens",
      location: "Kochi, Kerala",
      description:
        "Traditional spice plantation in the Western Ghats. We cultivate premium quality spices including cardamom, black pepper, and medicinal herbs in their natural habitat.",
      image:
        "https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      farmType: "Spice Garden",
      isCertified: true,
      established: "1978",
      rating: "4.8",
      specialties: "Cardamom, Black Pepper, Medicinal Herbs",
      size: "80 acres",
    },
    {
      id: 6,
      name: "Prairie Cattle Ranch",
      location: "Nagpur, Maharashtra",
      description:
        "Grass-fed cattle ranch committed to ethical animal husbandry. Our cattle roam freely on natural pastures, producing premium quality meat and dairy products.",
      image:
        "https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      farmType: "Livestock",
      isCertified: false,
      established: "2001",
      rating: "4.6",
      specialties: "Grass-fed Beef, Organic Dairy",
      size: "120 acres",
    },
    {
      id: 7,
      name: "Desert Bloom Farm",
      location: "Jodhpur, Rajasthan",
      description:
        "Innovative desert farming using drip irrigation and drought-resistant crops. We specialize in millets, desert beans, and traditional Rajasthani vegetables.",
      image:
        "https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      farmType: "Desert Farm",
      isCertified: true,
      established: "2012",
      rating: "4.7",
      specialties: "Millets, Desert Vegetables, Drought-resistant Crops",
      size: "35 acres",
    },
    {
      id: 8,
      name: "River Valley Dairy",
      location: "Mathura, Uttar Pradesh",
      description:
        "Traditional dairy farm with indigenous A2 milk cows. We follow ancient Vedic practices for cow care and produce pure, unadulterated dairy products.",
      image:
        "https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      farmType: "Dairy",
      isCertified: true,
      established: "1992",
      rating: "4.9",
      specialties: "A2 Milk, Ghee, Traditional Dairy Products",
      size: "50 acres",
    },
    {
      id: 9,
      name: "Mountain Fresh Herbs",
      location: "Ooty, Tamil Nadu",
      description:
        "High-altitude herb cultivation specializing in medicinal and culinary herbs. Our herbs are grown in pristine mountain air and harvested at peak potency.",
      image:
        "https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      farmType: "Herb Farm",
      isCertified: true,
      established: "2005",
      rating: "4.8",
      specialties: "Medicinal Herbs, Culinary Herbs, Essential Oils",
      size: "20 acres",
    },
    {
      id: 10,
      name: "Golden Wheat Fields",
      location: "Ludhiana, Punjab",
      description:
        "Traditional wheat and grain farm in the heart of Punjab's fertile plains. We grow heritage wheat varieties and practice crop rotation for soil health.",
      image:
        "https://media.istockphoto.com/id/1328004520/photo/healthy-young-soybean-crop-in-field-at-dawn.jpg?s=612x612&w=0&k=20&c=XRw20PArfhkh6LLgFrgvycPLm0Uy9y7lu9U7fLqabVY=",
      farmType: "Grain Farm",
      isCertified: false,
      established: "1988",
      rating: "4.6",
      specialties: "Heritage Wheat, Basmati Rice, Pulses",
      size: "100 acres",
    },
    {
      id: 11,
      name: "Tropical Fruit Paradise",
      location: "Mangalore, Karnataka",
      description:
        "Coastal fruit farm specializing in tropical fruits. Our mangoes, coconuts, and jackfruits are grown in the perfect tropical climate near the Arabian Sea.",
      image: "https://images.pexels.com/photos/1198507/pexels-photo-1198507.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      farmType: "Tropical Farm",
      isCertified: true,
      established: "1999",
      rating: "4.8",
      specialties: "Mangoes, Coconuts, Jackfruit, Cashews",
      size: "45 acres",
    },
    {
      id: 12,
      name: "Organic Tea Gardens",
      location: "Darjeeling, West Bengal",
      description:
        "High-altitude organic tea garden producing world-renowned Darjeeling tea. Our tea bushes grow at 2000m elevation, creating the perfect muscatel flavor.",
      image:
        "https://media.istockphoto.com/id/965148388/photo/green-ripening-soybean-field-agricultural-landscape.jpg?s=612x612&w=0&k=20&c=cEVP3uj34-5obt-Jf_WI3O9qfP6tVrFaQIv1rBvvpzc=",
      farmType: "Tea Garden",
      isCertified: true,
      established: "1975",
      rating: "4.9",
      specialties: "Darjeeling Tea, Green Tea, White Tea",
      size: "200 acres",
    },
  ]

  const farmTypes = [
    "All Farms",
    "Organic",
    "Heritage",
    "Orchard",
    "Hydroponic",
    "Spice Garden",
    "Livestock",
    "Dairy",
    "Herb Farm",
    "Tea Garden",
  ]

  return (
    <section className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="px-5 xl:px-20 py-12">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              Partner Farms
              <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-green-600 mx-auto mt-2"></div>
            </h1>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Meet our trusted farming partners who bring you the freshest produce. Each farm is carefully selected for
              their commitment to quality, sustainability, and ethical farming practices.
            </p>
          </div>

          {/* Farm Type Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {farmTypes.map((type) => (
              <button
                key={type}
                className="px-6 py-2 rounded-full border border-emerald-200 text-emerald-700 hover:bg-emerald-500 hover:text-white transition-all duration-300 font-medium"
              >
                {type}
              </button>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="text-center p-4 bg-emerald-50 rounded-lg">
              <div className="text-2xl font-bold text-emerald-600">50+</div>
              <div className="text-sm text-gray-600">Partner Farms</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">15</div>
              <div className="text-sm text-gray-600">States Covered</div>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <div className="text-2xl font-bold text-yellow-600">80%</div>
              <div className="text-sm text-gray-600">Certified Organic</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-600">25+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Farms Grid */}
      <div className="px-5 xl:px-20 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {farms.map((farm) => (
            <FarmCard key={farm.id} farm={farm} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors duration-300 font-medium shadow-lg">
            Discover More Farms
          </button>
        </div>
      </div>

      {/* Partnership Section */}
      <div className="bg-emerald-600 text-white py-16">
        <div className="px-5 xl:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Want to Partner With Us?</h2>
            <p className="text-emerald-100 mb-8 text-lg">
              Are you a farmer looking to reach more customers? Join our network of trusted partners and grow your
              business while promoting sustainable agriculture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-medium">
                Become a Partner
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-emerald-600 transition-colors duration-300 font-medium">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Farm Visit Section */}
      <div className="bg-white py-16">
        <div className="px-5 xl:px-20 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Visit Our Farms</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience farm life firsthand! Book a visit to see how your food is grown and meet the farmers who make it
            possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email for farm tours"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors duration-300 font-medium">
              Book Tour
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FarmMain
