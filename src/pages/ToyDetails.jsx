export default function ToyDetails() {
  const toy = {
    pictureUrl: "https://i.ibb.co/YRgsNSD/car-4.jpg",
    name: "Awesome Toy",
    sellerName: "John Doe",
    sellerEmail: "johndoe@example.com",
    subCategory: "Educational Toys",
    price: 29.99,
    rating: 4.5,
    quantity: 10,
    description: "This is an awesome toy that helps children learn and grow.",
  };
  return (
    <div className="flex justify-center items-center h-screen  max-w-5xl mx-auto ">
      <div className=" p-6 bg-white rounded-md shadow-md w-full grid grid-cols-5 ">
        <div className="col-span-2">
          <img
            src={toy.pictureUrl}
            alt={toy.name}
            className="rounded-md mb-4"
          />
        </div>
        <div className="col-span-3">
          <h2 className="text-2xl font-semibold">{toy.name}</h2>
          <p className="text-gray-500 mb-2">Seller: {toy.sellerName}</p>
          <p className="text-gray-500 mb-4">Email: {toy.sellerEmail}</p>
          <p className="text-gray-500 mb-2">Sub-category: {toy.subCategory}</p>
          <p className="text-gray-500 mb-4">Price: ${toy.price.toFixed(2)}</p>
          <p className="text-gray-500 mb-2">Rating: {toy.rating}</p>
          <p className="text-gray-500 mb-4">
            Available Quantity: {toy.quantity} pcs
          </p>
          <p className="text-gray-500 mb-4">{toy.description}</p>
          <button
            type="button"
            className="w-full px-4 py-2 rounded-md bg-violet-500 text-white font-semibold hover:bg-violet-600"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
