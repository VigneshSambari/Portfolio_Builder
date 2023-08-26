import { EditAnim,  } from "@assets";

const headingText = <span className="flex justify-items-center text-center 
                        text-white font-bold text-3xl font-serif" >
                        Welcome to Your Creative Portfolio Journey</span>

const subHeadingText = <span className="flex justify-items-center text-2xl text-yellow-500   font-semibold 
                text-center font-caveat backdrop-blur-sm">
    Our portfolio builder platform is 
    designed to empower you to create a stunning online presence that truly reflects your 
        creativity, skills, and accomplishments 
    Whether you're an artist, designer, developer, writer, or any kind of creative professional, 
    we're here to help you tell your story in a captivating and memorable way.</span>

const animations = [  EditAnim, ];

const carousalCaptions = [
    // "Discover various designs",
    // "Curate Your Digital Presence",
    "Tailoring Every Detail to You",
//    "Create templates and showcase",
//     "Presenting Your Portfolio with Pride",
//     "Broadcasting Your Creative Journey",
]

export const landingPageLiterals = {
    heading: headingText,
    subHeading: subHeadingText,
    carousalAnimations : animations,
    carousalCaptions: carousalCaptions,
}


export const websiteTitle = "Portfolio Builder";

export const signUpTitle = `Sign up to ${websiteTitle}`;
export const signUpTermsAndPolicy = "Creating an account means you're okay with our Terms and Policies.";
export const signUpWelcomeText = "Craft Your Story, Share Your Journey – Get Started with Your Portfolio Today!";

export const signInTitle = `Sign in to ${websiteTitle}`;
export const signInWelcomeText = "Welcome Back! Let's Continue Building Your Portfolio.";