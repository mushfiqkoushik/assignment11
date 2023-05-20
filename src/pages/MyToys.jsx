import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
// Image 1: https://i.ibb.co/YRgsNSD/car-4.jpg
// Image 2: https://i.ibb.co/YRgsNSD/car-4.jpg
// Image 3: https://i.ibb.co/WWDhKtz/car18.jpg
// Image 4: https://i.ibb.co/YRgsNSD/car-4.jpg
// Image 5: https://i.ibb.co/xSMqzKj/car14.jpg
// Image 6: https://i.ibb.co/QnF7TPx/car13.jpg
// Image 7: https://i.ibb.co/DRLX08N/car12.jpg
// Image 8: https://i.ibb.co/YRgsNSD/car-4.jpg
export default function MyToy() {
  const [toys, setToys] = useState([]);
  const [isChange, setIsChange] = useState(false);

  useEffect(() => {
    async function getToys() {
      const res = await axios.get("http://localhost:5000/toys");
      console.log(res);
      setToys(res?.data);
    }
    getToys();
  }, [isChange]);

  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  //   const [toys, setToys] = useState([
  //     {
  //       id: 1,
  //       seller: "John Doe",
  //       name: "Awesome Toy 1",
  //       subCategory: "Educational Toys",
  //       price: 29.99,
  //       quantity: 10,
  //     },
  //     {
  //       id: 2,
  //       seller: "Jane Smith",
  //       name: "Awesome Toy 2",
  //       subCategory: "Building Blocks",
  //       price: 19.99,
  //       quantity: 5,
  //     },
  //     {
  //       id: 3,
  //       seller: "Ane Smith",
  //       name: "Awesome Toy 2",
  //       subCategory: "Building Blocks",
  //       price: 19.99,
  //       quantity: 5,
  //     },
  //     // Add more toy objects as needed
  //   ]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleViewDetails = (toyId) => {
    // Check if the user is logged in
    const isLoggedIn = true; // Replace with your authentication logic

    if (isLoggedIn) {
      // If logged in, navigate to the toy details page
      navigate(`/toy/${toyId}`);
    } else {
      // If not logged in, redirect to the login page
      navigate("/login");
    }
  };

  const filteredToys = toys.filter((toy) =>
    toy.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log(filteredToys);

  const handleDelete = async (id) => {
    console.log(id);
    const { isConfirmed } = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });
    if (isConfirmed) {
      const res = await axios.delete(`http://localhost:5000/toys/${id}`);

      console.log(res);
      if (res?.data?.deletedCount == 1) setIsChange(!isChange);
      Swal.fire("Deleted!", "Toy has been deleted.", "success");
    }
  };
  return (
    <div className="container mx-auto mt-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search by Toy Name"
            value={searchTerm}
            onChange={handleSearch}
            className="border border-gray-300 rounded-md px-4 py-2 w-64"
          />
        </div>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">Seller</th>
              <th className="px-4 py-2 border-b">Toy Name</th>
              <th className="px-4 py-2 border-b">Sub-category</th>
              <th className="px-4 py-2 border-b">Price</th>
              <th className="px-4 py-2 border-b">Available Quantity</th>
              <th className="px-4 py-2 border-b"></th>
            </tr>
          </thead>
          <tbody>
            {filteredToys.map((toy) => (
              <tr key={toy.id}>
                <td className="px-4 py-2 border-b">{toy.sellerName}</td>
                <td className="px-4 py-2 border-b">{toy.name}</td>
                <td className="px-4 py-2 border-b">{toy.subCategory}</td>
                <td className="px-4 py-2 border-b">{toy.price}</td>
                <td className="px-4 py-2 border-b">{toy.quantity}</td>
                <td className="px-4 py-2 border-b">
                  <button
                    onClick={() => handleViewDetails(toy?._id)}
                    className="px-4 py-2 rounded-md bg-violet-500 text-white font-semibold hover:bg-violet-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(toy?._id)}
                    className="px-4 py-2 rounded-md bg-red-500 text-white font-semibold hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
