const testimonials = [
  { name: 'Gordon Ramsay', quote: 'That’s f***ing disgusting!', rating: 3 },
  { name: 'CaseOh', quote: 'This looks goood~', rating: 5 },
  { name: 'Fanum', quote: 'You’re so fanum tax', rating: 4 }
];
    
const Testimonials = () => {
  return (
    <section className="bg-yellow-100 py-8 pb-14">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
        <div className="flex justify-center space-x-4">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-white p-4 shadow rounded w-64">
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="italic">“{item.quote}”</p>
              <div className="mt-4 text-yellow-500">
                {'★'.repeat(item.rating) + '☆'.repeat(5 - item.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
