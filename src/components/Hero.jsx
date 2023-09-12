import { hero } from "../assets/images";
import InputSearch from "./InputSearch";

const Hero = ({ setShowModal, value, setValue }) => {


    return (
        <div className="bg-[#E4F2FF] mx-[30px] lg:mx-[50px] rounded-[15px]">
            <div className="lg:flex md:block max-w-[1380px] m-auto pt-24 lg:pt-20 lg:px-10 pb-10">
                <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start m-auto">
                    <h6 className="text-[#347DC1] ">Articles, videos and more</h6>
                    <h1 className="text-3xl lg:text-5xl md:text-3xl md:text-center font-medium my-4 pb-6">Find the most relevant <br /> content in the IT world</h1>
                    <InputSearch
                        value={value}
                        setValue={setValue}
                        handleClick={() => setShowModal(true)}
                    />
                    <span className="pt-6">We care your data our <a href="">privacy policy</a></span>
                </div>
                <div className="lg:w-1/2">
                    <video autoPlay muted playsInline loop className="w-full">
                        <source src={hero} />
                    </video>
                </div>
            </div>

        </div>
    );
}

export default Hero;