import Lottie from "lottie-react";

const LottieAnim = ({asset}) => {
    return (
        <Lottie animationData={asset} className="object-contain"/>
    );
}

export default LottieAnim;