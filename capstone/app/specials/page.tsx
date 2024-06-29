const specials = [
  { name: 'Salad', price: '$3.99', description: 'This is a regular salad, enjoy!', rating: 5 },
  { name: 'Fries', price: '$3.45', description: 'Enjoy the wonderful taste of fries.', rating: 4 },
  { name: 'Chicken Wings', price: '$5.99', description: 'Chicken wings are here.', rating: 5 }
];

const Specials = () => {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Specials</h2>
        <div className="flex justify-evenly space-x-4">
          {specials.map((item, index) => (
            <div key={index} className="bg-white p-4 shadow rounded w-64">
              <div className="bg-gray-300 h-32 mb-4"></div>
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-green-700">{item.price}</p>
              <p className="mt-2">{item.description}</p>
              <button className="mt-4 px-4 py-2 bg-yellow-400 rounded">See More About {item.name}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Specials;
