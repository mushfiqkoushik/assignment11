export default function MyToys() {
  return (
    <div className="items-center text-base content-center mx-auto">
      <div className="flex flex-col  p-6 space-y-4 sm:p-10 bg-gray-900 text-gray-100">
        <h2 className="text-xl font-semibold">My Toys</h2>
        <ul className="flex flex-col divide-y divide-gray-700">
          <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
            <div className="flex w-full space-x-2 sm:space-x-4">
              <img
                className="flex-shrink-0 object-cover w-18 h-18 px-1 py-2 items-center mr-2 border-transparent rounded outline-none sm:w-32 sm:h-32 bg-gray-500"
                src="https://i.ibb.co/QvNfzmM/car11.jpg"
                alt="Polaroid camera"
              />
              <div className="flex flex-col justify-between w-full pb-4">
                <div className="flex justify-between w-full pb-2 space-x-2">
                  <div className="space-y-1 text-justify">
                    <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                      Name : koushik
                    </h3>
                    <p className="text-base">Price : 99$</p>
                    <p className="text-lg font-semibold">
                      available quantity : 50 Pcs
                    </p>
                    <p className="text-base text-white">
                      Detail description: Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                  <div className="text-right flex gap-5">
                    <button
                      type="button"
                      className="flex items-center px-2 py-1 pl-0 space-x-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-4 h-4 fill-current"
                      >
                        <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                        <rect width="32" height="200" x="168" y="216"></rect>
                        <rect width="32" height="200" x="240" y="216"></rect>
                        <rect width="32" height="200" x="312" y="216"></rect>
                        <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                      </svg>
                      <span>Delete</span>
                    </button>
                    <button
                      type="button"
                      className="flex items-center px-2 py-1 space-x-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                        />
                      </svg>

                      <span>Update</span>
                    </button>
                  </div>
                </div>
                <div className="flex text-sm divide-x"></div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
