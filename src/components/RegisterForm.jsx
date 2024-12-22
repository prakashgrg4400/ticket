function RegisterForm() {
    return (
        <div>
            <form action="" className="flex ">
                <div className=" w-[50%] p-[2rem]  gap-[1.5rem]">
                    <h2 className="border-b-2 border-[#7933B5] mb-[1rem] pb-[0.5rem] inline-block ">
                        Basic Information
                    </h2>
                    <div className="flex flex-col gap-[1rem] mb-[1rem]">
                        <label htmlFor="" className="font-bold opacity-60">
                            Full Name
                        </label>
                        <input
                            className="p-[0.3rem] font-light outline-none border-[1px] border-black focus:border-[#BC8ED0] focus:shadow-[0_0_5px_0px_#7933B5] "
                            type="text"
                            name=""
                            id=""
                        />
                    </div>
                    <div className="flex flex-col gap-[1rem] mb-[1rem]">
                        <label htmlFor="" className="font-bold opacity-60">
                            Email Address
                        </label>
                        <input
                            className="p-[0.3rem] font-light outline-none border-[1px] border-black focus:border-[#BC8ED0] focus:shadow-[0_0_5px_0px_#7933B5] "
                            type="email"
                            name=""
                            id=""
                        />
                    </div>
                    <div className="flex flex-col gap-[1rem] mb-[1rem]">
                        <label htmlFor="" className="font-bold opacity-60">
                            Password
                        </label>
                        <input
                            className="p-[0.3rem] font-light outline-none border-[1px] border-black focus:border-[#BC8ED0] focus:shadow-[0_0_5px_0px_#7933B5] "
                            type="password"
                            name=""
                            id=""
                        />
                    </div>
                    <div className="flex flex-col gap-[1rem] mb-[1rem]">
                        <label htmlFor="" className="font-bold opacity-60">
                            Confirm Password
                        </label>
                        <input
                            className="p-[0.3rem] font-light outline-none border-[1px] border-black focus:border-[#BC8ED0] focus:shadow-[0_0_5px_0px_#7933B5] "
                            type="password"
                            name=""
                            id=""
                        />
                    </div>
                    <div className="flex flex-col gap-[1rem] mb-[1rem]">
                        <label htmlFor="" className="font-bold opacity-60">
                            Phone Number
                        </label>
                        <input
                            className="p-[0.3rem] font-light outline-none border-[1px] border-black focus:border-[#BC8ED0] focus:shadow-[0_0_5px_0px_#7933B5] "
                            type="number"
                            name=""
                            id=""
                        />
                    </div>
                </div>
                <div className=" w-[50%] p-[2rem] gap-[1.5rem]">
                    <h2 className="border-b-2 border-[#7933B5] mb-[1rem] pb-[0.5rem] inline-block">
                        Detail Information
                    </h2>
                    <div className="flex flex-col gap-[1rem] mb-[1rem]">
                        <label htmlFor="" className="font-bold opacity-60">
                            Photo
                        </label>
                        <input
                            type="file"
                            name=""
                            id=""
                            className="p-[0.3rem] font-light outline-none border-[1px] border-black focus:border-[#BC8ED0] focus:shadow-[0_0_5px_0px_#7933B5] "
                        />
                    </div>
                    <div className="flex flex-col gap-[1rem] mb-[1rem]">
                        <label htmlFor="" className="font-bold opacity-60">
                            About (You and your company)
                        </label>
                        <textarea
                            name=""
                            id=""
                            className="p-[0.3rem] font-light outline-none border-[1px] border-black focus:border-[#BC8ED0] focus:shadow-[0_0_5px_0px_#7933B5] "
                        ></textarea>
                    </div>
                    <div className="flex flex-col gap-[1rem] mb-[1rem]">
                        <label htmlFor="" className="font-bold opacity-60">
                            Address
                        </label>
                        <input
                            type="text"
                            name=""
                            id=""
                            className="p-[0.3rem] font-light outline-none border-[1px] border-black focus:border-[#BC8ED0] focus:shadow-[0_0_5px_0px_#7933B5] "
                        />
                    </div>
                    <input
                        type="submit"
                        value="Register"
                        className="bg-gradient-to-r from-[#9729B1] to-[#6E37B6] px-[3rem] py-[1rem] text-white rounded-xl "
                    />
                </div>
            </form>
        </div>
    );
}

export default RegisterForm;
