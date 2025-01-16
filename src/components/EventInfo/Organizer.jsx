// eslint-disable-next-line react/prop-types
function Organizer({ organizerImg, organizerAddress }) {
    return (
        <div className="p-8 flex flex-col justify-center items-center gap-4">
            <h2>Organizer</h2>
            <div>
                <img
                    src={organizerImg}
                    alt=""
                    className="h-[400px] rounded-full"
                />
            </div>
            <div className="text-center">
                <h2 className="text-xl">Organizer Details</h2>
                <div>
                    <p className="text-sm opacity-60 font-semibold mt-2">
                        Address
                    </p>
                    <p className="text-sm opacity-60">{organizerAddress}</p>
                </div>
            </div>
        </div>
    );
}

export default Organizer;
