import type { NextPage } from "next";
import Link from "next/link";
import Button from "~/components/Button";
import homeContent from "~/content/home.json";

const Home: NextPage = () => {
    const Hero = () => {
        const { hero } = homeContent;
        return (
            <div className="bg-gradient-to-tr from-gray-900 to-gray-800 py-24">
                <div className="custom-container flex items-center justify-between px-4">
                    <div>
                        <h1 className="text-6xl font-bold uppercase text-white">
                            {hero.title}
                        </h1>
                        <p className="mt-4 max-w-lg text-lg text-gray-400">
                            {hero.description}
                        </p>
                        <div className="mt-8 flex items-center space-x-4">
                            <Link href="/#content" passHref>
                                <Button component="a">
                                    {hero.cta.knowMore}
                                </Button>
                            </Link>
                            <Link href="/contact" passHref>
                                <Button component="a" type="gray">
                                    {hero.cta.contact}
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div>IMAGE</div>
                </div>
            </div>
        );
    };
    return (
        <div>
            <Hero />
            <div id="content">
                {/* <Solutions /> */}
                {/* <Services /> */}
                {/* <Partners /> */}
            </div>
        </div>
    );
};

export default Home;
