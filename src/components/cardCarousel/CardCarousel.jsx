import React, { useEffect, useState } from "react";
import { isEmpty } from "lodash";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Card from "../card/Card";
import { useDispatch, useSelector } from "react-redux";
import { getCourses } from "../../features/actions/courseAction";
import "./cardCrousel.css";
import { ClockLoader } from "react-spinners";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CardCarousel = () => {
  //use custom hook to get height and width of the window
  const { height, width } = useWindowDimensions();
  //state variable to manage number of visible slide->3 or 4
  const [visibleSlides, setVisibleSlides] = useState(3);

  //slide dimension
  const [dimensions, setDimensions] = useState({
    h: 700,
    w: 500,
  });

  //state variable to store the course data from /all endpoint
  const [coursesData, setCoursesData] = useState([]);

  const navigate = useNavigate();
  const { courses, isLoading } = useSelector((state) => state.courses);
  const dispatch = useDispatch();

  //useEffect hook to mount component->change width and height slide along with visiblity of slide
  useEffect(() => {
    if (width > 1300) {
      setVisibleSlides(4);
      setDimensions({
        h: 700,
        w: 400,
      });
    } else if (width < 1280 && width > 1025) {
      setVisibleSlides(3);
      setDimensions({
        h: 650,
        w: 400,
      });
    } else if (width < 1024 && width > 769) {
      setVisibleSlides(2);
      setDimensions({
        h: 580,
        w: 400,
      });
    } else if (width < 768 && width > 641) {
      setVisibleSlides(1);
      setDimensions({
        h: 130,
        w: 150,
      });
    } else if (width < 640 && width > 520) {
      setVisibleSlides(1);
      setDimensions({
        h: 170,
        w: 150,
      });
    } else {
      setVisibleSlides(1);
      setDimensions({
        h: 120,
        w: 100,
      });
    }
  }, [height, width]);

  //Fetching the Data from /course
  useEffect(() => {
    const category = "course";
    if (isEmpty(courses)) {
      dispatch(
        getCourses({
          category,
          cb: (result) => {
            switch (result.status) {
              case 400:
                toast(result.data.message, { autoClose: 1250 });
                navigate("/", { replace: true });
                break;
              case 404:
                toast(result.statusText, { autoClose: 1250 });
                navigate("/", { replace: true });
                break;
              case 200:
                setCoursesData(result.data.data.courses);
                break;
              case 500:
                toast("Internal server error.", { autoClose: 1250 });
                navigate("/", { replace: true });
                break;
              default:
                toast("Something goes really wrong!!", { autoClose: 1250 });
                navigate("/", { replace: true });
                break;
            }
          },
        }),
      );
    } else {
      setCoursesData(courses);
    }
  }, [courses, dispatch, navigate]); //rendering for once

  return (
    <div className="container mx-auto">
      {isLoading && (
        <div className="flex h-64 items-center justify-center">
          <ClockLoader color="#4d8ccd" loading={isLoading} />
        </div>
      )}
      {!isLoading && (
        <CarouselProvider
          naturalSlideWidth={dimensions.w}
          naturalSlideHeight={dimensions.h}
          visibleSlides={visibleSlides}
          infinite
          // isPlaying={true}
          interval={3000}
          step={1}
          totalSlides={5}
          tag="div"
          touchEnabled={true}
          lockOnWindowScroll={true}
          hasMasterSpinner={isLoading}
          dragEnabled={true}
          dragStep={1}
        >
          <Slider>
            {coursesData?.map((course, idx) => (
              <Slide innerTag="div" index={idx} key={idx}>
                <Card data={course} />
              </Slide>
            ))}
          </Slider>
          {!isEmpty(coursesData) && (
            <div className="mt-2 flex justify-center gap-4">
              <ButtonBack className="rounded-md border-0 bg-gray-100 px-8 py-2 text-lg text-gray-900 hover:bg-gray-400 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="24px"
                  height="24px"
                >
                  <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
                </svg>
              </ButtonBack>
              <ButtonNext className="rounded-md border-0 bg-gray-100 px-8 py-2 text-lg text-gray-900 hover:bg-gray-400 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="24px"
                  height="24px"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </ButtonNext>
            </div>
          )}
        </CarouselProvider>
      )}
    </div>
  );
};

export default CardCarousel;
