import React, { useEffect, useState } from "react";
import { ProfileUserIcon } from "../../assets/svgs/icons";
import ProfileWrapper from "./ProfileWrapper";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { isEmpty } from "lodash";
import { getMe } from "../../features/actions/userAction";
import { toast } from "react-toastify";
import Loader from "../../components/loader/Loader";

const Profile = () => {
  const [user, setUser] = useState({});
  const token = window.localStorage.getItem("token");
  // authors see their course course other than enrolled course

  const navigate = useNavigate();

  const { userDetails, isLoading } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isEmpty(userDetails)) {
      dispatch(
        getMe({
          token,
          cb: (result) => {
            switch (result.status) {
              case 400:
                toast.info(result.data.message, {
                  autoClose: 1250,
                  position: "top-center",
                });
                navigate("/", { replace: true });
                break;
              case 401:
                toast.info(result.statusText, {
                  autoClose: 1250,
                  position: "top-center",
                });
                navigate("/", { replace: true });
                break;
              case 404:
                toast.info("Not Found!", {
                  autoClose: 1250,
                  position: "top-center",
                });
                navigate("/", { replace: true });
                break;
              case 200:
                toast.success(result.data.status, {
                  autoClose: 1250,
                  position: "top-center",
                });
                break;
              case 500:
                toast.error("Internal server error!", {
                  autoClose: 1250,
                  position: "top-center",
                });
                navigate("/login", { replace: true });
                break;
              default:
                toast.error("Something went really wrong!", {
                  autoClose: 1250,
                  position: "top-center",
                });
                navigate("/", { replace: true });
                break;
            }
          },
        }),
      );
    } else {
      setUser(userDetails);
    }
  }, [dispatch, navigate, token, userDetails]);

  return (
    <>
      {isLoading && (
        <div className="flex min-h-screen items-center justify-center">
          <Loader />
        </div>
      )}
      {!isLoading && (
        <ProfileWrapper sectionName="">
          <div className="mb-16 p-4">
            <div className="mt-24 rounded-md bg-white p-8 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="order-last mt-20 grid grid-cols-3 text-center md:order-first md:mt-0">
                  <div>
                    <p className="text-xl font-bold text-gray-700">22</p>
                    <p className="text-gray-500">Friends</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-gray-700">10</p>
                    <p className="text-gray-500">Photos</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-gray-700">89</p>
                    <p className="text-gray-500">Comments</p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute inset-x-0 top-0 mx-auto -mt-24 flex h-48 w-48 items-center justify-center rounded-full bg-indigo-100 text-indigo-500 shadow-2xl">
                    <ProfileUserIcon />
                  </div>
                </div>
                <div className="mt-32 flex justify-between space-x-8 md:mt-0 md:justify-center">
                  <button className="profile-btn bg-blue-400 hover:bg-blue-500">
                    Connect
                  </button>
                  <button className="profile-btn bg-gray-700 hover:bg-gray-800">
                    Message
                  </button>
                </div>
              </div>
              <div className="mt-20 border-b-2 pb-12 text-center">
                <h1 className="text-4xl font-medium capitalize text-gray-700">
                  {user?.name}
                </h1>
                <p className="mt-3 font-light text-gray-600">{user?.email}</p>
                <p className="mt-8 text-gray-500">
                  {user?.role === "user" ? "Student" : "Admin"}
                </p>
              </div>
              <div className="mt-12 flex flex-col justify-center">
                <p className="text-center font-light text-gray-600 lg:px-16">
                  An artist of considerable range, Ryan — the name taken by
                  Melbourne-raised, Brooklyn-based Nick Murphy — writes,
                  performs and records all of his own music, giving it a warm,
                  intimate feel with a solid groove structure. An artist of
                  considerable range.
                </p>
                <button className="mt-4 px-4 py-2  font-medium text-indigo-500">
                  Show more
                </button>
              </div>
              {/* if admin then course visible */}
              <div className="border-b-2 border-t-2 border-blue-500">
                <h4 className="text-center font-sans text-3xl font-bold">
                  My courses
                </h4>
              </div>
            </div>
          </div>
        </ProfileWrapper>
      )}
    </>
  );
};

export default Profile;
