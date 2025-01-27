import { MdCreditScore } from "react-icons/md";
import { useNavigate } from "react-router";

function SuccessPayment() {
    const navigate = useNavigate();

    const handleBackToHome = () => {
        navigate("/", { replace: true });
    };
    return (
        <div className="h-screen bg-[#FAFAFA] flex flex-col justify-center items-center gap-10 ">
            <div className="rounded-full bg-[#43D19E] inline-block p-4">
                <MdCreditScore className="text-8xl text-white" />
            </div>
            <div className="text-center space-y-8">
                <div className="space-y-1">
                    <h2 className="text-[#43D19E] text-3xl font-semibold ">
                        Thank You
                    </h2>
                    <p className="text-gray-500">Paymnent done Successfully</p>
                </div>
                <p className="text-gray-400">
                    Your ticket will be mailed to your gmail
                </p>
                <button
                    onClick={handleBackToHome}
                    className="bg-[#43D19E]  px-[3rem] py-[0.5rem] rounded-[50px] text-white hover:bg-[#26a275]"
                >
                    Back to Home
                </button>
            </div>
        </div>
    );
}

export default SuccessPayment;
