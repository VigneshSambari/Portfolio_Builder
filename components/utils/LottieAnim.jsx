import Lottie from "lottie-react";

const LottieAnim = ({asset}) => {
    return (
        <Lottie animationData={asset} className="w-full object-contain"/>
    );
}

export default LottieAnim;