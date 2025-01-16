// eslint-disable-next-line react/prop-types
function Details({ description, name, eventDate }) {
    return (
        <div className="flex flex-col gap-6">
            <div>
                <h2 className="opacity-70">Event Highlight</h2>
                <p className="text-sm opacity-60">
                    {name} {"   -->   "} {eventDate}
                </p>
            </div>
            <div>
                <h2 className="opacity-70">Event Description</h2>
                <p className="text-sm opacity-60">{description}</p>
            </div>
        </div>
    );
}

export default Details;
