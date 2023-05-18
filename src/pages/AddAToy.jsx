import React from 'react'

export default function 
() {
  return (
    <div className='text-base'>
        <section className="p-6 text-gray-100">
	<form novalidate="" className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-gray-900 ng-untouched ng-pristine ng-valid">
		<h2 className="w-full text-3xl font-bold leading-tight">ADD A TOY</h2>
		<div>
			<label for="picture url" className="block mb-1 ml-1">Picture URL</label>
			<input id="name" type="url" placeholder="Your photo url please" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-800" />
		</div>
		<div>
			<label for="name" className="block mb-1 ml-1">Name</label>
			<input id="name" type="text" placeholder="Your name" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-800" />
		</div>
		<div>
			<label for="name" className="block mb-1 ml-1"> Seller Name</label>
			<input id="name" type="text" placeholder="Seller name" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-800" />
		</div>
		<div>
			<label for="email" className="block mb-1 ml-1">Price</label>
			<input id="number" type="number" placeholder="Price" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-800" />
		</div>
		<div>
			<label for="number" className="block mb-1 ml-1">Rating</label>
			<input id="number" type="number" placeholder="Rating please" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-800" />
		</div>
		<div>
			<label for="number" className="block mb-1 ml-1">Available quantity</label>
			<input id="number" type="number" placeholder="Quantity" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-800" />
		</div>
		<div>
			<label for="text" className="block mb-1 ml-1">Detail description</label>
			<input id="text" type="text" placeholder="details" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-800" />
		</div>
		<div>
			<label for="message" className="block mb-1 ml-1">Sub-category</label>
			<input id="message" type="text" placeholder="please select a category" className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-800"></input>
		</div>
		<div>
			<button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-violet-400 focus:ring-violet-400 hover:ring-violet-400 text-gray-900">ADD A TOY</button>
		</div>
	</form>
</section>
    </div>
  )
}
