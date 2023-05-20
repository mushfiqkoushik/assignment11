import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const ShopByCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState("Educational Toys");
  const [toys, setToys] = useState([]);
  const categories = [
    {
      name: "Educational Toys",
      subCategories: [
        "Math Toys",
        "Language Toys",
        "Engineering Toys",
        "Science Toys",
      ],
    },
    {
      name: "Language Toys",
      subCategories: [
        "Math Toys",
        "Language Toys",
        "Engineering Toys",
        "Science Toys",
      ],
    },
    {
      name: "Learning Toys",
      subCategories: [
        "Math Toys",
        "Language Toys",
        "Engineering Toys",
        "Science Toys",
      ],
    },
    // Add more categories and sub-categories as needed
  ];
  useEffect(() => {
    async function getToys() {
      const res = await axios.get("http://localhost:5000/toys");
      console.log(res);
      setToys(res?.data);
    }
    getToys();
  }, []);

  const filteredToys = toys.filter(
    (toy) => toy.subCategory === selectedCategory
  );

  return (
    <div className="container mx-auto">
      <Tabs>
        <TabList>
          {categories.map((category, index) => (
            <Tab onClick={() => setSelectedCategory(category.name)} key={index}>
              {category.name}
            </Tab>
          ))}
        </TabList>

        {categories.map((category, index) => (
          <TabPanel key={index}>
            <div className="toys-container grid grid-cols-2 gap-2 place-items-center my-4">
              {filteredToys.map((toy, toyIndex) => (
                <div key={toyIndex} className="toy-item shadow max-w-sm">
                  <img src={toy?.pictureUrl} alt={toy.name} />
                  <p>{toy.name}</p>
                  <p>Price: {toy.price}</p>
                  <p>Rating: {toy.rating}</p>
                  <Link to={`/toy/${toy?._id}`}>
                    <button className="bg-violet-700 text-xl text-white px-4 py-2 w-full">
                      View Details
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
