// eslint-disable-next-line react/prop-types
function InputField({ label, inputType, data }) {
    return (
        <div>
            <p className="text-sm font-semibold mb-2 text-gray-600">{label}</p>
            <input
                type={inputType}
                id=""
                className="w-full font-light text-sm p-2 rounded-xl border-2 outline-none"
                value={data}
                readOnly
                // placeholder="Great User"
            />
            {/* {errors[name]?.message && (
                <p className="font-semibold text-sm mt-2 text-red-500">
                    {errors[name].message}
                </p>
            )} */}
        </div>
    );
}

export default InputField;
