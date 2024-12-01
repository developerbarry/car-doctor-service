import { useEffect, useState } from "react";

const ServiceArea = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    console.log(services)

    return (
        <div className="container mx-auto px-4 md:px-12 lg:px-24 py-4">
            <div className="font-inter">
                <div className="text-center lg:px-48">
                    <span className="font-bold text-base text-[#FF3811] inline-block mb-2">Service</span>
                    <h3 className="text-3xl md:text-[44px] font-bold mb-2">Our Service Area</h3>
                    <p className="font-normal text-[#737373] capitalize text-sm md:text-base">The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default ServiceArea;