import { useNavigate } from "react-router";
import { PiSmileySad } from "react-icons/pi";

function FailurePayment() {
    const navigate = useNavigate();

    const handleBackToHome = () => {
        navigate("/", { replace: true });
    };
    return (
        <div className="h-screen bg-[#FAFAFA] flex flex-col justify-center items-center gap-10 ">
            <div className="rounded-full bg-[#FF1D3C] inline-block p-4">
                <PiSmileySad className="text-8xl text-white" />
            </div>
            <div className="text-center space-y-8">
                <div className="space-y-3 max-w-96">
                    <h2 className=" text-3xl font-semibold ">Payment Failed</h2>
                    <p className="text-gray-400 text-sm">
                        An error occurred while processing your transaction.
                        Please try again or use a different payment method.
                    </p>
                </div>

                <button
                    onClick={handleBackToHome}
                    className="bg-[#FF1D3C]  px-[3rem] py-[0.5rem] rounded-[50px] text-white hover:bg-[#942635]"
                >
                    Try Again
                </button>
            </div>
        </div>
    );
}

export default FailurePayment;
