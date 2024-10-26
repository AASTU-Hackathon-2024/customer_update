import { Heart, Search, ShoppingCart, User, X } from "lucide-react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export default function WishList() {
  const wishListItems = [
    {
      id: 1,
      name: "Gradient Graphic T-shirt",
      price: 120,
      image:
        "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=800",
    },
    {
      id: 2,
      name: "Polo with Tipping Details",
      price: 120,
      image:
        "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800",
    },
    {
      id: 3,
      name: "Block Striped T-shirt",
      price: 120,
      image:
        "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800",
    },
    {
      id: 4,
      name: "Skinny Fit Jeans",
      price: 120,
      image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800",
    },
    {
      id: 5,
      name: "Checkered Shirt",
      price: 120,
      image:
        "https://images.unsplash.com/photo-1608063615781-e2ef8c73d114?w=800",
    },
    {
      id: 6,
      name: "Sleeve Striped T-shirt",
      price: 120,
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-bold mb-6">My Wish List</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishListItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                <p className="text-gray-600">Br {item.price}</p>
                <div className="mt-4 flex justify-between items-center">
                  <button className="bg-black text-white px-4 py-2 rounded">
                    Add to Cart
                  </button>
                  <button>
                    <X className="h-6 w-6 text-gray-400" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Newsletter */}
      <section className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h2 className="text-2xl font-bold mb-4 md:mb-0">
              STAY UP TO DATE ABOUT OUR LATEST OFFERS
            </h2>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-4 py-2 text-black rounded-l-md"
              />
              <button className="bg-white text-black px-4 py-2 rounded-r-md">
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
