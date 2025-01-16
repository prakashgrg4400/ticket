import { useState } from "react";
import { MdGroups2 } from "react-icons/md";
import Ticket from "../EventInfo/Ticket";
import Details from "../EventInfo/Details";
import SeatView from "../EventInfo/SeatView";
import Organizer from "../EventInfo/Organizer";
// import Footer from "../Footer";

const event = {
    id: 1,
    // img: ticket1,
    img: "https://cdn.pixabay.com/photo/2022/08/31/20/47/concert-7424190_1280.jpg",
    date: "21 Nov",
    name: "piano play",
    description: "It is a event organized by the dark concert band",
    eventDate: "26 Oct 2025",
    eventTime: "5:38pm",
    location: "Ipoh Convention Center",
    price: 300,
    totalTicket: 50,
    remainingTicket: 10,
    soldOut: false,
    delay: 0.5,
    status: "trending",
    seatView:
        "https://seatgeek.com/_next/image?url=https%3A%2F%2Fseatgeek.com%2Fimages%2Fseatviews%2Fde2b4efe-83f7-467a-9c06-f1a0fe7a2472%2Fflat%2F640x480.jpg&w=3840&q=75",
    organizerImg:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/06/attachment_130821073-e1656602175641.jpeg?auto=format&q=60&fit=max&w=930",
    organizerAddress: "Bheerkot-6, Syangja",
};

function Test() {
    const {
        name,
        eventDate,
        eventTime,
        location,
        img,
        seatView,
        description,
        organizerImg,
        organizerAddress,
        remainingTicket,
    } = event;
    const [showTicket, setShowTicket] = useState(true);
    const [showSeatView, setShowSeatView] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [showOrganizer, setShowOrganizer] = useState(false);
    return (
        <>
            <header className="bg-eventDetailbg2 bg-no-repeat bg-center h-[40vh] relative">
                <div className="h-full w-full bg-purple-900 opacity-40"> </div>
                <div className="bg-white min-h-[30vh] flex flex-col justify-center items-center w-[50%] absolute left-1/2 -translate-x-1/2 top-[70%]  ">
                    <h2 className="text-4xl border-b-[3px] pb-4 mb-4 border-b-[#6B30BE] text-[#6B30BE]">
                        {name.toUpperCase()}
                    </h2>
                    <div className=" gap-8 flex justify-around bg-[#F0F0F0] px-[2rem] py-[1rem] my-[1rem] ">
                        <div className="flex items-center gap-2">
                            <MdGroups2 className="opacity-70" />
                            <p className="opacity-70">{eventDate}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <MdGroups2 className="opacity-70" />
                            <p className="opacity-70">{eventTime}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <MdGroups2 className="opacity-70" />
                            <p className="opacity-70">{location}</p>
                        </div>
                    </div>
                </div>
            </header>
            <section className="relative top-[30vh] mb-[300px] flex flex-col gap-6 justify-center items-center">
                <h2 className="text-4xl text-[#6B30BE]">Event Info</h2>
                <div className=" flex flex-col gap-6 bg-white max-w-[50vw] p-6">
                    <div className="flex gap-4">
                        <button
                            onClick={() => {
                                setShowDetails(false);
                                setShowOrganizer(false);
                                setShowSeatView(false);
                                setShowTicket(true);
                            }}
                            className="bg-[#7B1FA2] text-white px-4 py-2 rounded-md cursor-pointer text-sm"
                        >
                            Ticket
                        </button>
                        <button
                            onClick={() => {
                                setShowDetails(false);
                                setShowOrganizer(false);
                                setShowSeatView(true);
                                setShowTicket(false);
                            }}
                            className="bg-[#7B1FA2] text-white px-4 py-2 rounded-md cursor-pointer text-sm"
                        >
                            Seat View
                        </button>
                        <button
                            onClick={() => {
                                setShowDetails(true);
                                setShowOrganizer(false);
                                setShowSeatView(false);
                                setShowTicket(false);
                            }}
                            className="bg-[#7B1FA2] text-white px-4 py-2 rounded-md cursor-pointer text-sm"
                        >
                            Details
                        </button>
                        <button
                            onClick={() => {
                                setShowDetails(false);
                                setShowOrganizer(true);
                                setShowSeatView(false);
                                setShowTicket(false);
                            }}
                            className="bg-[#7B1FA2] text-white px-4 py-2 rounded-md cursor-pointer text-sm"
                        >
                            Organizer
                        </button>
                    </div>
                    <div>
                        {(showTicket && <Ticket img={img} />) ||
                            (showSeatView && (
                                <SeatView seatView={seatView} />
                            )) ||
                            (showDetails && (
                                <Details
                                    description={description}
                                    eventDate={eventDate}
                                    name={name}
                                />
                            )) ||
                            (showOrganizer && (
                                <Organizer
                                    organizerImg={organizerImg}
                                    organizerAddress={organizerAddress}
                                />
                            ))}
                    </div>
                </div>
            </section>
            <section className=" flex justify-center items-center mb-8">
                <div className="bg-[url('https://images.unsplash.com/photo-1701099153549-a94513b57f60?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] w-[70vw] h-[80vh] bg-no-repeat bg-cover bg-center ">
                    <h2 className="text-white text-center mt-20 text-4xl font-normal">
                        Buy Tickets and Enjoy
                    </h2>
                    <p>Choose your package</p>
                    {/* card */}
                    <div
                        className={` w-[40vw] relative rounded-[50px] mx-auto my-[4rem] shadow-[0_0_8px_1px_black] `}
                    >
                        <div className=" h-full w-full p-[2rem] bg-[rgba(0,0,0,0.5)] rounded-[50px]">
                            <h1 className="text-center text-2xl border-b-4 inline-block pb-5 text-white">
                                {name}
                            </h1>
                            <div className="text-white flex justify-around bg-[rgba(0,0,0,0.5)] px-[2rem] py-[1rem] my-[1rem] ">
                                <div className="flex items-center gap-2">
                                    <MdGroups2 />
                                    <p>{eventDate}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MdGroups2 />
                                    <p>{eventTime}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MdGroups2 />
                                    <p>{location}</p>
                                </div>
                            </div>
                            <div className="text-white bg-[rgba(0,0,0,0.7)] mb-[1rem] px-[2rem] py-[0.5rem]">
                                <h2>Description : </h2>
                                <p className="opacity-90 text-sm font-light">
                                    {description}
                                </p>
                            </div>
                            <div className="text-white flex gap-[2rem] flex-col bg-[rgba(0,0,0,0.7)] p-[2rem] items-center ">
                                <p>Available Seats : {remainingTicket}</p>
                                <form
                                    action=""
                                    className="flex flex-col gap-[2rem] relative"
                                >
                                    <div className="flex gap-[1rem] items-center ">
                                        <label htmlFor="" id="quantity">
                                            Quantity :
                                        </label>
                                        <input
                                            type="number"
                                            name=""
                                            id=""
                                            className="outline-none py-[0.5rem] px-[1rem] text-black rounded-[50px] "
                                        />
                                    </div>
                                    <input
                                        type="submit"
                                        value="Purchase ticket"
                                        className="bg-gradient-to-r from-[#9729B1] to-[#6E37B6] px-[1rem] py-[0.5rem] rounded-[50px] text-white gap-2 cursor-pointer "
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <Footer /> */}
        </>
    );
}

export default Test;
