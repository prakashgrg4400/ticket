import { motion } from "framer-motion";
import {
    headerAnimation,
    slideleft,
    slideright,
    slideup,
} from "../animation/animate";
import Footer from "../components/Footer";
import { useNavigate, useParams, useSearchParams } from "react-router";
import handleEventsData from "../utils/handleEventsData";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { setInitialBilling } from "../redux/slices/userBilling";
import InputField from "../components/checkout/InputField";

const schema = yup
    .object({
        fullName: yup.string().required("Your full name is required."),
        address: yup.string().required("Your address is required"),
        country: yup.string().required("Country name is required"),
        state: yup.string().required("State name is required"),
        postalCode: yup.number().required("Required Field"),
        email: yup.string().email().required("Email is required"),
        number: yup.number().required("Required Field"),
        onlinePayment: yup.boolean(),
        discount: yup.string(),
        ticketName: yup.string().required("Enter the ticket name."),
        city: yup.string().required("Required field"),
    })
    .required();

function Checkout() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userBilling = useSelector((state) => state.userBilling);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: userBilling,
    });

    // console.log(errors);

    const handleForm = (data) => {
        console.log(data);
        dispatch(setInitialBilling(data));
        navigate("/confirmPayment");
    };

    const { id } = useParams();
    const [searchParams] = useSearchParams();

    const currentTicket = handleEventsData(searchParams.get("status"), id * 1);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <header className="bg-eventDetailbg2 bg-no-repeat bg-center h-[40vh] relative ">
                <div className="h-full w-full bg-purple-900 opacity-40"> </div>
                <motion.div
                    variants={headerAnimation(0.6, "85%")}
                    initial="initial"
                    animate="animate"
                    className="bg-white min-h-[150px] flex flex-col justify-center items-center w-[50%] absolute left-1/2 -translate-x-1/2 top-[70%]   "
                >
                    <h2 className="text-4xl text-center border-b-[3px] pb-4 mb-4 border-b-[#6B30BE] text-[#6B30BE]">
                        Ticket Checkout
                    </h2>
                </motion.div>
            </header>
            <section className="mt-[150px] mb-24 flex flex-col items-center justify-center ">
                <motion.p
                    variants={slideup(0.8)}
                    initial="initial"
                    animate="animate"
                    className="text-2xl font-semibold text-gray-500"
                >
                    Fill Your information
                </motion.p>
                <div className="w-[75%] mt-12">
                    <motion.p
                        variants={slideup(1.0)}
                        initial="initial"
                        animate="animate"
                        className="text-xl text-gray-600 mb-4"
                    >
                        Billing Address
                    </motion.p>
                    <form
                        action=""
                        className="grid grid-cols-1 md:grid-cols-3 w-full gap-2 "
                        onSubmit={handleSubmit(handleForm)}
                    >
                        <motion.div
                            variants={slideright(1.2)}
                            initial="initial"
                            animate="animate"
                            className="  md:col-span-2 p-4 flex flex-col gap-6 "
                        >
                            <InputField
                                label={"Full Name"}
                                name={"fullName"}
                                register={register}
                                errors={errors}
                                inputType={"text"}
                            />
                            <InputField
                                label={"Address"}
                                name={"address"}
                                register={register}
                                errors={errors}
                                inputType={"text"}
                            />

                            <div className="grid grid-cols-4 gap-6">
                                <div>
                                    <p className="text-sm font-semibold mb-2 text-gray-600">
                                        Country<sup>*</sup>
                                    </p>
                                    <select
                                        id=""
                                        {...register("country")}
                                        className="w-full  font-light text-sm p-2"
                                    >
                                        <option value="Malaysia">
                                            Malaysia
                                        </option>
                                        <option value="Nepal">Nepal</option>
                                    </select>
                                    {errors?.country?.message && (
                                        <p className="font-semibold text-sm mt-2 text-red-500">
                                            {errors.country.message}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <p className="text-sm font-semibold mb-2 text-gray-600">
                                        State<sup>*</sup>
                                    </p>
                                    <select
                                        {...register("state")}
                                        id=""
                                        className="w-full  font-light text-sm p-2"
                                    >
                                        <option value="All">All</option>
                                        <option value="Malaysia">
                                            Malaysia
                                        </option>
                                        <option value="Nepal">Nepal</option>
                                    </select>
                                    {errors?.state?.message && (
                                        <p className="font-semibold text-sm mt-2 text-red-500">
                                            {errors.state.message}
                                        </p>
                                    )}
                                </div>
                                <InputField
                                    register={register}
                                    errors={errors}
                                    label={"City"}
                                    name={"city"}
                                    inputType={"text"}
                                />
                                <InputField
                                    register={register}
                                    errors={errors}
                                    label={"PostalCode"}
                                    name={"postalCode"}
                                    inputType={"number"}
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <InputField
                                    register={register}
                                    errors={errors}
                                    label={"Email Address"}
                                    name={"email"}
                                    inputType={"email"}
                                />
                                <InputField
                                    register={register}
                                    errors={errors}
                                    label={"Phone Number"}
                                    name={"number"}
                                    inputType={"number"}
                                />
                            </div>
                            <InputField
                                register={register}
                                errors={errors}
                                label={"Full Name 1"}
                                name={"ticketName"}
                                inputType={"text"}
                            />
                        </motion.div>
                        {/* Ticket */}
                        <motion.div
                            variants={slideleft(1.2)}
                            initial="initial"
                            animate="animate"
                            className="bg-[#6B30BE] text-white px-4 py-6 flex flex-col gap-4"
                        >
                            <div>
                                <p className="text-xl text-white border-b-2 pb-3">
                                    Tickets
                                </p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-xs text-white font-semibold">
                                    {currentTicket.name} - Adult X 1
                                </p>
                                <p className="text-xs font-semibold text-white">
                                    Rs.{currentTicket.price}
                                </p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-xs font-semibold text-white">
                                    Total
                                </p>
                                <p className="text-xs font-semibold text-white">
                                    RM 26
                                </p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-xs font-semibold text-white">
                                    Service Charge
                                </p>
                                <p className="text-xs font-semibold text-white">
                                    RM 26
                                </p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-xs font-semibold text-white">
                                    Discount / Offer
                                </p>
                                <p className="text-xs font-semibold text-white">
                                    RM 26
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <input
                                    type="text"
                                    placeholder="Coupon/Discount Code"
                                    className=" font-light text-sm p-2"
                                    {...register("discount")}
                                />
                                <button className="bg-red-600  opacity-90 hover:bg-red-700 text-white py-1 px-4 rounded-md ">
                                    Apply
                                </button>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-xs font-extrabold text-white">
                                    Grand Total
                                </p>
                                <p className="text-xs font-extrabold text-white">
                                    RM 26
                                </p>
                            </div>
                            <p className="text-xl border-b-2 pb-3 text-white">
                                Payment Method
                            </p>
                            <div>
                                <input
                                    type="checkbox"
                                    name=""
                                    id=""
                                    {...register("onlinePayment")}
                                />
                                <span className="text-xs font-semibold text-white">
                                    Online Payment
                                </span>
                                <img
                                    src="https://www.weblinknepal.com/ckfinder/userfiles/images/Online-Payment-Gateway.jpg"
                                    alt=""
                                    className="w-full"
                                />
                            </div>
                        </motion.div>
                        <button
                            type="submit"
                            className="bg-red-600 opacity-90 md:place-self-end hover:bg-red-700 text-white py-1 px-4 rounded-md md:col-span-3 mt-6 "
                        >
                            Checkout
                        </button>
                    </form>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Checkout;
