"use client";
import { paddingStyles } from "@constants/tailwind_utils";
import { Discover,Present,HelloAnim,EditAnim,EditAnim1,Success,CreateAnim } from "@assets";
import CarouselSlider from "./CarousalSlider";
import LottieAnim from "@components/utils/LottieAnim";

const LandingPage = () => {
    const anims = [<LottieAnim asset={Discover} />,<LottieAnim asset={Discover} />,<LottieAnim asset={Discover} />];
    return (
        <div>
            <div className={`absolute flex flex-row w-full px-10 py-5 `}>
                <div className="flex flex-col w-1/2  justify-center items-center px-20 gap-10">
                    <div className="flex text-bold text-black text-2xl">
                    Welcome to Your Creative Portfolio Journey
                    </div>
                    <div>
                    UOur portfolio builder platform is designed to empower you to create a stunning online presence that truly reflects your creativity, skills, and accomplishments. Whether you're an artist, designer, developer, writer, or any kind of creative professional, we're here to help you tell your story in a captivating and memorable way.
                    </div>
                </div>
                <div className="relative flex w-1/2 justify-center items-center">
                    <CarouselSlider 
                        mediaItems={[Discover,Present,HelloAnim,EditAnim,EditAnim1,Success,CreateAnim]}
                    />
                </div>
                
            </div>
            <div>
                <img src="/images/landing_page/background_2.jpeg" 
                    className="fixed right-0 top-0 bottom-0 w-full h-full -z-10"
                />
            </div>
        </div>
        
        
    );
}

export default LandingPage;