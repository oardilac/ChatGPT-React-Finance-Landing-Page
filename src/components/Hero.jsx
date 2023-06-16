import "../index.css";
import { logo } from "../assets";

const Hero = () => {
    return (
        <section id="home" className="flex flex-col justify-start items-center h-screen">
            <div className="w-full text-center flex flex-col items-center">
                <img src={logo} className="w-48 h-auto mb-4 logo" alt="logo" />
                <h1 className="heading2 gradient-text text-fluid-base text-center font-bold">
                    <span>Empowering Your Investments</span>{" "}
                    <br/>
                    <span>With AI Intelligence.</span>
                </h1>
                <a href="https://oliverardila.substack.com/?showWelcome=true">
                    <button class="mt-8 bg-white text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline btn-access">
                        Get Early Access
                    </button>
                </a>
            </div>
        </section>
    );
};

export default Hero;