import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";
import SkeletonLoader from "../../../../components/SkeletonLoader/SkeletonLoader";

const ServiceArea = () => {
    const [services, setServices] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const skeletonItems = new Array(6).fill(null);

    useEffect(() => {
        setIsLoading(true)
        fetch('./services.json')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setIsLoading(false)
            })
    }, [])

    console.log(services)

    return (
        <div className="container mx-auto px-4 md:px-12 lg:px-24 py-4">
            <div className="font-inter">
                <div className="text-center lg:px-48 mb-14">
                    <span className="font-bold text-base text-[#FF3811] inline-block mb-2">Service</span>
                    <h3 className="text-3xl md:text-[44px] font-bold mb-2">Our Service Area</h3>
                    <p className="font-normal text-[#737373] capitalize text-sm md:text-base">The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        isLoading ? (
                            skeletonItems.map((unUsed, index) => <SkeletonLoader key={index} />)

                        ) :
                            (
                                services.map((service) => <ServicesCard key={service._id} service={service} />)

                            )
                    }
                </div>
            </div>
        </div>
    );
};

export default ServiceArea;