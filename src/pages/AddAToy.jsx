import { useState } from "react";
import axios from "axios";

export default function AddAToy() {
  const [toy, setToy] = useState({});
  const handleOnchage = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    toy[field] = value;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(toy);
    axios.get();
  };

  return (
    <div className="text-base ]">
      <section className="p-6 text-gray-100 ">
        <form
          onSubmit={handleSubmit}
          className="container w-full max-w-5xl p-8 mx-auto space-y-6 rounded-md shadow bg-violet-950 ng-untouched ng-pristine ng-valid"
        >
          <h2 className="w-full text-3xl font-bold leading-tight">ADD A TOY</h2>
          <div className="flex justify-around gap-4">
            <div className="w-full">
              <div>
                <label htmlFor="picture url" className="block mb-1 ml-1">
                  Picture URL
                </label>
                <input
                  onChange={handleOnchage}
                  id="picture"
                  name="picture"
                  type="url"
                  placeholder="Your photo url please"
                  className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-800"
                />
              </div>
              <div>
                <label htmlFor="name" className="block mb-1 ml-1">
                  Name
                </label>
                <input
                  onChange={handleOnchage}
                  name="name"
                  id="name"
                  type="text"
                  placeholder="Toy name"
                  required=""
                  className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-800"
                />
              </div>
              <div>
                <label htmlFor="name" className="block mb-1 ml-1">
                  {" "}
                  Seller Name
                </label>
                <input
                  onChange={handleOnchage}
                  name="selerName"
                  id="selerName"
                  type="text"
                  placeholder="Seller name"
                  required=""
                  className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-800"
                />
              </div>
              <div>
                <label htmlFor="name" className="block mb-1 ml-1">
                  {" "}
                  Seller Email
                </label>
                <input
                  onChange={handleOnchage}
                  name="selerEmail"
                  id="selerEmail"
                  type="email"
                  placeholder="Seller Email"
                  required=""
                  className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-800"
                />
              </div>
              <div>
                {" "}
                <div>
                  <label htmlFor="email" className="block mb-1 ml-1">
                    Price
                  </label>
                  <input
                    onChange={handleOnchage}
                    id="number"
                    type="number"
                    placeholder="Price"
                    required=""
                    className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-800"
                  />
                </div>
              </div>
            </div>
            <div className="w-full">
              <div>
                <label htmlFor="number" className="block mb-1 ml-1">
                  Rating
                </label>
                <input
                  onChange={handleOnchage}
                  id="number"
                  type="number"
                  placeholder="Rating please"
                  required=""
                  name="rating"
                  className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-800"
                />
              </div>
              <div>
                <label htmlFor="number" className="block mb-1 ml-1">
                  Available quantity
                </label>
                <input
                  id="number"
                  onChange={handleOnchage}
                  type="number"
                  placeholder="Quantity"
                  required=""
                  className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-800"
                />
              </div>
              <div>
                <label htmlFor="text" className="block mb-1 ml-1">
                  Detail description
                </label>
                <input
                  onChange={handleOnchage}
                  id="text"
                  type="text"
                  placeholder="details"
                  required=""
                  className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-800"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 ml-1">
                  Sub-category
                </label>
                <input
                  onChange={handleOnchage}
                  id="message"
                  type="text"
                  placeholder="please select a category"
                  className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-800"
                ></input>
              </div>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-violet-400 focus:ring-violet-400 hover:ring-violet-400 text-gray-900"
            >
              ADD A TOY
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
