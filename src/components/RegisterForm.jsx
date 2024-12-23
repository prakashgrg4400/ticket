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
                            required
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
                            required
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
                            required
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
                            required
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
                            required
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
                            required
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
                            className="p-[0.3rem] h-[150px] font-light outline-none border-[1px] border-black focus:border-[#BC8ED0] focus:shadow-[0_0_5px_0px_#7933B5] "
                        ></textarea>
                    </div>
                    <div className="flex flex-col gap-[1rem] mb-[1rem]">
                        <label htmlFor="" className="font-bold opacity-60">
                            Address
                        </label>
                        <input
                            required
                            type="text"
                            name=""
                            id=""
                            className="p-[0.3rem] font-light outline-none border-[1px] border-black focus:border-[#BC8ED0] focus:shadow-[0_0_5px_0px_#7933B5] "
                        />
                    </div>
                    <input
                        required
                        type="submit"
                        value="Register"
                        className="text-white cursor-pointer inline rounded-[50px] bg-gradient-to-r from-[#932AB1] to-[#6D37B6] m-auto px-[2rem] py-[0.5rem] mx-auto "
                    />
                </div>
            </form>
        </div>
    );
}

export default RegisterForm;
