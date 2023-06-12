import styles from "../style";
import { logo } from "../assets";

const Hero = () => {
    return (
        <section id="home" className="flex flex-col justify-start items-center h-screen">
            <div className="w-full text-center flex flex-col items-center"> {/* This div takes the full width and centers its content */}
                <img src={logo} className="w-48 h-auto mb-4" alt="logo" />
                <h1 class="gradient-text text-shadow-glow text-fluid-base text-center font-bold">
                    <span>Empowering Your Investments</span>{" "}
                    <br/>
                    <span>With AI Intelligence.</span>
                </h1>
                <a href="https://oliverardila.substack.com/?showWelcome=true">
                    <button class="mt-8 bg-white text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Get Early Access
                    </button>
                </a>
            </div>
        </section>
    );
};

export default Hero;