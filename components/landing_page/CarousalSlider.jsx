"use client";
import React, { Component } from "react";
import Lottie from "lottie-react";

class CarouselSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
      paused: false,
    };
  }

  

  componentDidMount() {
    var timer=setInterval(() => {
      if (this.state.paused === false) {
        let newSlide =
          this.state.currentSlide === this.props.mediaItems.length - 1
            ? 0
            : this.state.currentSlide + 1;
        this.setState({ currentSlide: newSlide });
      }
    }, 5000);
  }

  componentWillUnmount(){
    cancelTimeOut(timer);
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

          <div>
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
          </div>

          <div className="absolute w-full flex justify-center bottom-7">
            {this.props.captions.map((element, index) => {
              return (
                <div
                className={
                  index === this.state.currentSlide
                    ? "block text-yellow-500 font-semibold font-andika font-md"
                    : "hidden"
                }
                  key={index}
                >{element}</div>
              );
            })}
          </div>

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

export default CarouselSlider;

