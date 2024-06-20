function Reservations() {
  return (
    <>
    <h1 className="text-center text-3xl mt-4">Food to order:</h1>
    <div className="flex items-center justify-center mt-8">
    <table>
        <tr>
            <th className="px-16">Name</th>
            <th className="px-16">Price</th>
            <th className="px-16">Amount</th>
        </tr>
    </table>
    </div>
    </>
  )
}

export default Reservations;