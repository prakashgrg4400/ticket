// eslint-disable-next-line react/prop-types
function Ticket({ img }) {
    return (
        <div className="">
            <img
                src={img}
                alt=""
                className="h-[400px] w-[500px] object-cover object-center "
            />
        </div>
    );
}

export default Ticket;
