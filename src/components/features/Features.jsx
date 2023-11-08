import React from "react";
import { Link } from "react-router-dom";
import { featureCards } from "../../constants";
import { RightArrow } from "../../assets/svgs/icons";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const Features = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      mode: "free-snap",
      drag: true,
      defaultAnimation: {
        duration: 1000,
      },
      rubberband: true,
      breakpoints: {
        "(min-width: 480px)": {
          slides: {
            perView: 1,
            spacing: 10,
          },
        },
        "(min-width: 640px)": {
          slides: {
            perView: 1,
            spacing: 15,
          },
        },
        "(min-width: 768px)": {
          slides: {
            perView: 1,
            spacing: 15,
          },
        },
        "(min-width: 1024px)": {
          slides: {
            perView: 2,
            spacing: 15,
          },
        },
        "(min-width: 1280px)": {
          slides: {
            perView: 3,
            spacing: 15,
          },
        },
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ],
  );

  return (
    <section className="text-gray-600">
      <div className="container mx-auto px-5">
        <div className="mb-20 flex w-full flex-col text-center">
          <h2 className="mb-1 text-xs font-medium tracking-widest text-blue-500">
            BENEFITS
          </h2>
          <h3 className="text-2xl font-medium text-gray-900 sm:text-3xl">
            Exclusive Benefits From Our Courses
          </h3>
        </div>

        <div ref={sliderRef} className="keen-slider">
          {featureCards.map((featurecard, index) => (
            <div
              className="keen-slider__slide h-full translate-y-10 transform-gpu transition-all"
              key={index}
            >
              <div className="w-full rounded-lg shadow-lg sm:w-auto">
                <div className="flex flex-col rounded-lg bg-gray-100 p-8">
                  <div className="mb-3 flex items-center">
                    <div className="mr-3 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-white">
                      {featurecard.featureIcon}
                    </div>
                    <h2 className="title-font text-lg font-medium text-gray-900">
                      {featurecard.featureHeading}
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <p className="text-base leading-relaxed">
                      {featurecard.featureDescription}
                    </p>
                    <Link
                      className="mt-3 inline-flex items-center text-blue-500"
                      to="/"
                    >
                      Learn More
                      <RightArrow />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
