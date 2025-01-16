// eslint-disable-next-line react/prop-types
function SeatView({ seatView }) {
    return (
        <div className="">
            <h2 className="text-xl text-center">Seat View</h2>
            <img
                src={seatView}
                alt=""
                className="h-[400px] w-[500px] object-cover object-center "
            />
        </div>
    );
}

export default SeatView;
