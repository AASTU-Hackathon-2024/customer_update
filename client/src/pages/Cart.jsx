import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Minus, Plus, X } from 'lucide-react';

const CART_ITEMS = [
  {
    id: '1',
    name: 'Gradient Graphic T-shirt',
    price: 145,
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800',
    quantity: 1,
  },
  {
    id: '2',
    name: 'Checkered Shirt',
    price: 180,
    image: 'https://images.unsplash.com/photo-1608063615781-e2ef8c73d114?w=800',
    quantity: 1,
  },
  {
    id: '3',
    name: 'Skinny Fit Jeans',
    price: 240,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800',
    quantity: 1,
  },
];

export function Cart() {
  const subtotal = CART_ITEMS.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = 15;
  const total = subtotal + deliveryFee;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-8">Your cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <div className="space-y-8">
              {CART_ITEMS.map(item => (
                <div key={item.id} className="flex gap-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h3 className="font-medium">{item.name}</h3>
                      <button className="text-gray-400 hover:text-gray-500">
                        <X size={20} />
                      </button>
                    </div>
                    <p className="text-gray-600 mt-1">Size: Large</p>
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center gap-4">
                        <button className="p-1 rounded-full hover:bg-gray-100">
                          <Minus size={16} />
                        </button>
                        <span>{item.quantity}</span>
                        <button className="p-1 rounded-full hover:bg-gray-100">
                          <Plus size={16} />
                        </button>
                      </div>
                      <p className="font-medium">Br {item.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-4">
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-lg font-bold mb-4">Order Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>Br {subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span>Br {deliveryFee}</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>Br {total}</span>
                  </div>
                </div>
              </div>
              <button className="w-full bg-black text-white py-3 rounded-full mt-6 font-medium hover:bg-gray-900">
                Go to Checkout
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}