/* eslint-disable react/prop-types */
function InputField({ register, errors, label, name, inputType }) {
    // console.log(name, "===>", inputType);
    return (
        <div>
            <p className="text-sm font-semibold mb-2 text-gray-600">
                {label} <sup>*</sup>
            </p>
            <input
                type={inputType}
                id=""
                {...register(name)}
                className="w-full font-light text-sm p-2"
                // placeholder="Great User"
            />
            {errors[name]?.message && (
                <p className="font-semibold text-sm mt-2 text-red-500">
                    {errors[name].message}
                </p>
            )}
        </div>
    );
}

export default InputField;
