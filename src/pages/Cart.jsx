import { motion } from "framer-motion";
import { headerAnimation } from "../animation/animate";
import Footer from "../components/Footer";
import { NavLink, useParams, useSearchParams } from "react-router";
import myCart from "../data/cartData";
import handleEventsData from "../utils/handleEventsData";
import { useEffect } from "react";

function Cart() {
    const [searchParam] = useSearchParams();
    const { id } = useParams();
    let repeatedTicket = false;
    console.log(
        "quantity => ",
        searchParam.get("quantity") * 1,
        "status => ",
        searchParam.get("status")
    );

    if (searchParam.get("status") !== "none") {
        const quantity = searchParam.get("quantity");

        const concertTicket = handleEventsData(
            searchParam.get("status"),
            id * 1
        );
        concertTicket.quantity = quantity;

        myCart.forEach((cart) => {
            if (
                (cart.id === id * 1 && cart.name === concertTicket.name) ||
                id === "gib"
            ) {
                repeatedTicket = true;
            }
        });

        if (!repeatedTicket) {
            myCart.push(concertTicket);
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <header className="bg-eventDetailbg2 bg-no-repeat bg-center h-[40vh] relative">
                <div className="h-full w-full bg-purple-900 opacity-40"> </div>
                <motion.div
                    variants={headerAnimation(0.6, "70%")}
                    initial="initial"
                    animate="animate"
                    className="bg-white min-h-[150px] flex flex-col justify-center items-center w-[50%] absolute left-1/2 -translate-x-1/2 top-[70%]   "
                >
                    <h2 className="text-4xl border-b-[3px] pb-4 mb-4 border-b-[#6B30BE] text-[#6B30BE]">
                        Ticket Cart
                    </h2>
                </motion.div>
            </header>
            <section className="mt-[150px] mb-24 flex flex-col justify-center items-center gap-8  ">
                {myCart.length > 0 ? (
                    <>
                        <p className="text-gray-500 text-xl ">
                            Your ticket cart lists
                        </p>
                        <div className="min-w-[1000px] bg-[#F0F0F0] flex flex-col gap-6">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-[#902CB2] text-white ">
                                        <th className="py-4">Event</th>
                                        <th>Package</th>
                                        <th>Cost</th>
                                        <th>Quantity</th>
                                        <th>Total Amount</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {myCart.map((cart) => {
                                        return (
                                            <tr
                                                className="text-center text-gray-500"
                                                key={cart.name}
                                            >
                                                <td className="py-4">
                                                    {cart.name}
                                                    Ticket
                                                </td>
                                                <td>
                                                    Malaysian (With Mykad) -
                                                    Adult
                                                </td>
                                                <td>Rs.{cart.price}</td>
                                                <td>{cart.quantity}</td>
                                                <td>
                                                    Rs.
                                                    {cart.price * cart.quantity}
                                                </td>
                                                <td>
                                                    <button className="bg-red-600 mr-2 opacity-90 hover:bg-red-700 text-white py-1 px-4 rounded-md ">
                                                        Delete
                                                    </button>
                                                    <NavLink
                                                        to={`/checkout/${cart.id}/?status=${cart.status}`}
                                                        className="bg-red-600 opacity-90 hover:bg-red-700 text-white py-1 px-4 rounded-md"
                                                    >
                                                        Checkout
                                                    </NavLink>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                                <tfoot>
                                    <tr className="bg-[#CCCCCC] text-[#6C6C6C] font-bold ">
                                        <td
                                            colSpan={4}
                                            scope="col"
                                            className="text-right pr-4 py-2"
                                        >
                                            Grand Total
                                        </td>
                                        <td
                                            className="text-left pl-8"
                                            colSpan={2}
                                        >
                                            Rs.
                                            {myCart.reduce(
                                                (accumulator, current) => {
                                                    return (
                                                        accumulator +
                                                        current.price *
                                                            current.quantity
                                                    );
                                                },
                                                0
                                            )}
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                            <div className="flex justify-between ">
                                <NavLink
                                    to={"/events"}
                                    className="bg-red-600 opacity-90 hover:bg-red-700 text-white py-1 px-4 rounded-md"
                                >
                                    Continuous Shopping
                                </NavLink>
                                {/* <button className="bg-red-600 opacity-90 hover:bg-red-700 text-white py-1 px-4 rounded-md">
                            Checkout
                        </button> */}
                            </div>
                        </div>
                    </>
                ) : (
                    <p className="text-gray-500 text-xl">
                        Your ticket cart list is empty
                    </p>
                )}
            </section>
            <Footer />
        </>
    );
}

export default Cart;
