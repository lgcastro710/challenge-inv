

const InputSearch = ({ value, handleClick, setValue }) => {
    return (
        <div className="flex pb-5 lg:pb-0">
            <button onClick={handleClick} className="bg-[#08A1FF] rounded-l-lg py-3 px-3 text-white inline-flex justify-center items-center">
                <i className="material-icons">
                    search
                </i>
            </button>
            <input onChange={(event) => setValue(event.target.value)} className="lg:w-[350px] w-full p-3 rounded-r-lg shadow-md " value={value} type="text" name="" id="" placeholder="I’m looking for..." />
        </div>
    )
}
export default InputSearch
