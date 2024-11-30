import AboutUs from "./layouts/AboutUS/AboutUs";
import CarouselSlider from "./layouts/CarouselSlider/CarouselSlider";
import Contact from "./layouts/Contact/Contact";

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
                <Contact />
            </section>
        </>
    );
};

export default HomePage;
