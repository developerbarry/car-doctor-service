
const ServicesCard = () => {
    return (
        <div className="w-[30%] border p-5 rounded-lg">
            <div className="w-full mb-8">
                <img src="https://i.ibb.co.com/PcWnVS5/5.jpg" className="rounded-lg" alt="" />
            </div>
            <div>
                <h2 className="text-2xl font-bold mb-3.5">Electrical System</h2>
                <div className="flex justify-between">
                    <span className="text-[#FF3811] font-semibold">Price : $20.00</span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" className="cursor-pointer" width="24px" fill="#FF3811"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" /></svg>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;