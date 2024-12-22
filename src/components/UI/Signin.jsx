import { FaFacebookF } from "react-icons/fa6";
import { FaGooglePlusG } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
function Signin() {
    return (
        <div className="w-[50%] p-[4rem] flex flex-col">
            <h2 className="text-center text-4xl font-bold bg-gradient-to-r from-[#932AB1] to-[#6D37B6] bg-clip-text text-transparent">
                Sign in
            </h2>
            <div className="flex gap-[1rem] justify-center m-[1.5rem] ">
                <FaFacebookF className="text-xl border-2 border-black box-content rounded-full p-[0.5rem]" />
                <FaGooglePlusG className="text-xl border-2 border-black box-content rounded-full p-[0.5rem]" />
                <FaLinkedinIn className="text-xl border-2 border-black box-content rounded-full p-[0.5rem]" />
            </div>
            <p className="text-center opacity-50">or use your account</p>
            <form action="" className="flex flex-col gap-[1rem] mt-[1rem]">
                <input
                    type="email"
                    name=""
                    id=""
                    placeholder="Email"
                    className="bg-[#F5F3F7] outline-none p-[0.5rem]"
                />
                <input
                    type="password"
                    name=""
                    id=""
                    placeholder="Password"
                    className="bg-[#F5F3F7] outline-none p-[0.5rem]"
                />
                <p className="text-center opacity-50">Forgot your password ?</p>
                <input
                    type="submit"
                    value="SIGN IN"
                    className="text-white cursor-pointer inline rounded-[50px] bg-gradient-to-r from-[#932AB1] to-[#6D37B6] m-auto px-[2rem] py-[0.5rem]"
                />
            </form>
        </div>
    );
}

export default Signin;
