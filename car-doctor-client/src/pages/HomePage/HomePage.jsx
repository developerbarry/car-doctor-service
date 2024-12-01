import AboutUs from "./layouts/AboutUS/AboutUs";
import CarouselSlider from "./layouts/CarouselSlider/CarouselSlider";
import Contact from "./layouts/Contact/Contact";
import ServiceArea from "./layouts/ServiceArea/ServiceArea";

const HomePage = () => {
    return (
        <>
            <section>
                <CarouselSlider />
            </section>
            <section className="pt-10 pb-36 md:py-10 md:pb-20 md:pt-10 lg:py-20">
                <AboutUs />
            </section>
            <section>
                <ServiceArea />
            </section>
            <section className="py-14">
                <Contact />
            </section>
        </>
    );
};

export default HomePage;
