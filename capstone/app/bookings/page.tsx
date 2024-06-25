function Bookings(props: { data: any }) {
  const { date, time, num_of_guests, occasion } = props.data || {
    date: '',
    time: '',
    num_of_guests: '',
    occasion: ''
  };

  return (
    <>
      <h1 className="text-center text-yellow-800 text-3xl mt-4">Reservations:</h1>
      <div className="flex items-center justify-center mt-8">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-200 bg-yellow-100 text-left text-sm uppercase font-semibold text-gray-700">Date</th>
              <th className="py-2 px-4 border-b border-gray-200 bg-yellow-100 text-left text-sm uppercase font-semibold text-gray-700">Time</th>
              <th className="py-2 px-4 border-b border-gray-200 bg-yellow-100 text-left text-sm uppercase font-semibold text-gray-700">Guests</th>
              <th className="py-2 px-4 border-b border-gray-200 bg-yellow-100 text-left text-sm uppercase font-semibold text-gray-700">Occasion</th>
            </tr>
          </thead>
          <tbody>
            {date && time && num_of_guests && occasion ? (
              <tr>
                <td className="py-2 px-4 border-b border-gray-200">{date}</td>
                <td className="py-2 px-4 border-b border-gray-200">{time}</td>
                <td className="py-2 px-4 border-b border-gray-200">{num_of_guests}</td>
                <td className="py-2 px-4 border-b border-gray-200">{occasion}</td>
              </tr>
            ) : (
              <tr>
                <td className="py-2 px-4 border-b border-gray-200" colSpan={4}>No reservations yet</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Bookings;
