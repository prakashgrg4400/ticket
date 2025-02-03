import Footer from "../components/Footer";
import InputField from "../components/HistoryDetails/InputField";
import Navbar from "../components/userDashboard/Navbar";

function HistoryDetails() {
    return (
        <>
            <Navbar />
            <div className="grid md:grid-cols-2  w-[70%] mx-auto border-2 bg-white mb-8">
                <div className="p-6 space-y-6">
                    <h2 className="text-xl font-semibold text-gray-500 border-b-[2px] inline-block border-gray-500">
                        Package And User Details
                    </h2>
                    <div className="space-y-4">
                        <div className="h-[90%] w-[90%]">
                            <img
                                src="https://cdn.pixabay.com/photo/2022/08/31/20/47/concert-7424190_1280.jpg"
                                alt=""
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="grid grid-cols-1 w-[90%] space-y-4">
                            <InputField
                                data={"Nikesh Sejuwal"}
                                label={"Ticket User Name"}
                                inputType={"text"}
                            />
                            <InputField
                                data={"Early Bird"}
                                label={"Package"}
                                inputType={"text"}
                            />
                            <InputField
                                data={"88"}
                                label={"Cost (RM)"}
                                inputType={"number"}
                            />
                        </div>
                    </div>
                </div>
                <div className="p-6 space-y-6">
                    <h2 className="text-xl font-semibold text-gray-500 border-b-[2px] inline-block border-gray-500">
                        Order Details
                    </h2>
                    <div className="grid grid-cols-2 gap-4">
                        <InputField
                            data={"Nikesh Sejuwal"}
                            label={"Name"}
                            inputType={"text"}
                        />
                        <InputField
                            data={"Nikesh Sejuwal"}
                            label={"Address"}
                            inputType={"text"}
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <InputField
                            data={"Nikesh@gmail.com"}
                            label={"Email"}
                            inputType={"email"}
                        />
                        <InputField
                            data={980612}
                            label={"Phone Number"}
                            inputType={"number"}
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <InputField
                            data={"Nepal"}
                            label={"Country"}
                            inputType={"text"}
                        />
                        <InputField
                            data={"Gandaki"}
                            label={"State"}
                            inputType={"text"}
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <InputField
                            data={"Pokhara"}
                            label={"City"}
                            inputType={"text"}
                        />
                        <InputField
                            data={"977"}
                            label={"Postal Code"}
                            inputType={"number"}
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <InputField
                            data={"1000"}
                            label={"Grand Total"}
                            inputType={"number"}
                        />
                        <InputField
                            data={"on"}
                            label={"Payment Status"}
                            inputType={"text"}
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default HistoryDetails;
