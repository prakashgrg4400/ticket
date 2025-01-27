function TicketTable() {
    return (
        <section className="min-h-[85vh] mb-8">
            <div className="bg-white p-4 max-w-[80%] m-auto rounded-[15px]">
                <h2 className="text-xl my-4 font-bold text-gray-500 border-b-2 inline-block">
                    Your Orders
                </h2>
                <table className=" w-full text-left ">
                    <thead className="bg-[#F8FAFC] text-sm text-gray-500">
                        <tr>
                            <th className="p-4">SN</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Date</th>
                            <th>Tickets Quantity</th>
                            <th>Total Cost</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-500">
                        <tr>
                            <td className="p-4">1</td>
                            <td>nikeshlion@gmail.com</td>
                            <td>9806120955</td>
                            <td> 2025-01-26</td>
                            <td>2</td>
                            <td>Rs.20000</td>
                            <td>
                                <span className="text-[#FDB22F] bg-[#FFF9EF] px-4 py-2 rounded-[30px]">
                                    pending
                                </span>
                            </td>
                            <td>
                                <button className="px-4 py-2 rounded-[30px] bg-blue-500 text-white">
                                    Details
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td className="p-4">2</td>
                            <td>nikeshlion@gmail.com</td>
                            <td>9806120955</td>
                            <td> 2025-01-26</td>
                            <td>2</td>
                            <td>Rs.20000</td>
                            <td>
                                <span className="text-[#567D35] bg-[#EFF5EF] px-4 py-2 rounded-[30px]">
                                    Accepted
                                </span>
                            </td>
                            <td>
                                <button className="px-4 py-2 rounded-[30px] bg-blue-500 text-white">
                                    Details
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default TicketTable;
