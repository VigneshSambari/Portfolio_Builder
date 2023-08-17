"use client";
import React, { Component } from "react";
import Lottie from "lottie-react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Swipe from "react-easy-swipe";

class CarouselSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
      paused: false,
    };
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.paused === false) {
        let newSlide =
          this.state.currentSlide === this.props.mediaItems.length - 1
            ? 0
            : this.state.currentSlide + 1;
        this.setState({ currentSlide: newSlide });
      }
    }, 5000);
  }

  nextSlide = () => {
    let newSlide =
      this.state.currentSlide === this.props.mediaItems.length - 1
        ? 0
        : this.state.currentSlide + 1;
    this.setState({ currentSlide: newSlide });
  };

  prevSlide = () => {
    let newSlide =
      this.state.currentSlide === 0
        ? this.props.mediaItems.length - 1
        : this.state.currentSlide - 1;
    this.setState({ currentSlide: newSlide });
  };

  setCurrentSlide = (index) => {
    this.setState({ currentSlide: index });
  };

  render() {
    return (
      <div className="mt-8">
        <div className="w-[500px] h-[500px] flex overflow-hidden relative">
          {/* <AiOutlineLeft
            onClick={this.prevSlide}
            className="absolute left-0 text-3xl inset-y-1/2 text-white cursor-pointer opacity-20"
          /> */}

          <Swipe onSwipeLeft={this.nextSlide} onSwipeRight={this.prevSlide}>
            {this.props.mediaItems.map((slide, index) => {
              return (
                <Lottie
                  animationData={slide}
                  key={index}
                  className={
                    index === this.state.currentSlide
                      ? "block w-full h-auto object-cover"
                      : "hidden"
                  }
                  onMouseEnter={() => {
                    this.setState({ paused: true });
                  }}
                  onMouseLeave={() => {
                    this.setState({ paused: false });
                  }}
                />
              );
            })}
          </Swipe>

          <div className="absolute w-full flex justify-center bottom-0">
            {this.props.mediaItems.map((element, index) => {
              return (
                <div
                  className={
                    index === this.state.currentSlide
                      ? "h-1 w-7 bg-blue-700 rounded-full mx-1 mb-2 cursor-pointer"
                      : "h-1 w-3 bg-gray-400 rounded-full mx-1 mb-2 cursor-pointer"
                  }
                  key={index}
                  onClick={() => {
                    this.setCurrentSlide(index);
                  }}
                ></div>
              );
            })}
          </div>

          {/* <AiOutlineRight
            onClick={this.nextSlide}
            className="absolute right-0 text-3xl inset-y-1/2 text-white cursor-pointer opacity-20"
          /> */}
        </div>
      </div>
    );
  }
}


// import { Carousel } from "@material-tailwind/react";
 
// export function CarouselSlider() {
//   return (
//     <Carousel
//       className="rounded-xl"
//       navigation={({ setActiveIndex, activeIndex, length }) => (
//         <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
//           {new Array(length).fill("").map((_, i) => (
//             <span
//               key={i}
//               className={`block h-1 cursor-pointer rounded-2xl  content-[''] ${
//                 activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
//               }`}
//               onClick={() => setActiveIndex(i)}
//             />
//           ))}
//         </div>
//       )}
//     >
//       <img
//         src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
//         alt="image 1"
//         className="h-full w-full object-cover"
//       />
//       <img
//         src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
//         alt="image 2"
//         className="h-full w-full object-cover"
//       />
//       <img
//         src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
//         alt="image 3"
//         className="h-full w-full object-cover"
//       />
//     </Carousel>
//   );
// // }
// import React from 'react';
// import { Carousel } from "@material-tailwind/react";

// const CarouselSlider = () => {
//   return (
//     <div
//   id="carouselExampleCrossfade"
//   class="relative"
//   data-te-carousel-init
//   data-te-ride="carousel">

//   <div
//     class="absolute z-50 inset-x-0 bottom-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
//     data-te-carousel-indicators>
//     <button
//       type="button"
//       data-te-target="#carouselExampleCrossfade"
//       data-te-slide-to="0"
//       data-te-carousel-active
//       class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
//       aria-current="true"
//       aria-label="Slide 1"></button>
//     <button
//       type="button"
//       data-te-target="#carouselExampleCrossfade"
//       data-te-slide-to="1"
//       class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
//       aria-label="Slide 2"></button>
//     <button
//       type="button"
//       data-te-target="#carouselExampleCrossfade"
//       data-te-slide-to="2"
//       class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
//       aria-label="Slide 3"></button>
//   </div>


//   <div
//     class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">

//     <div
//       class="relative float-left -mr-[100%] w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
//       data-te-carousel-fade
//       data-te-carousel-item
//       data-te-carousel-active>
//       <img
//         src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
//         class="block w-full"
//         alt="Wild Landscape" />
//     </div>
   
//     <div
//       class="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
//       data-te-carousel-fade
//       data-te-carousel-item>
//       <img
//         src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
//         class="block w-full"
//         alt="Camera" />
//     </div>

//     <div
//       class="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
//       data-te-carousel-fade
//       data-te-carousel-item>
//       <img
//         src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
//         class="block w-full"
//         alt="Exotic Fruits" />
//     </div>
//   </div>

  
//   <button
//     class="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
//     type="button"
//     data-te-target="#carouselExampleCrossfade"
//     data-te-slide="prev">
//     <span class="inline-block h-8 w-8">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke-width="1.5"
//         stroke="currentColor"
//         class="h-6 w-6">
//         <path
//           stroke-linecap="round"
//           stroke-linejoin="round"
//           d="M15.75 19.5L8.25 12l7.5-7.5" />
//       </svg>
//     </span>
//     <span
//       class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
//       >Previous</span
//     >
//   </button>
  
//   <button
//     class="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
//     type="button"
//     data-te-target="#carouselExampleCrossfade"
//     data-te-slide="next">
//     <span class="inline-block h-8 w-8">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke-width="1.5"
//         stroke="currentColor"
//         class="h-6 w-6">
//         <path
//           stroke-linecap="round"
//           stroke-linejoin="round"
//           d="M8.25 4.5l7.5 7.5-7.5 7.5" />
//       </svg>
//     </span>
//     <span
//       class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
//       >Next</span
//     >
//   </button>
// </div>
//   );
// }

export default CarouselSlider;


