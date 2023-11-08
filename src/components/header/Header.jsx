import React, { Fragment, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { isEmpty } from "lodash";
import { isExpired } from "react-jwt";
import { toast } from "react-toastify";
import { Transition, Popover } from "@headlessui/react";
import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  PresentationChartBarIcon,
  ArrowPathIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";
import SearchBar from "../search/SearchBar";
import NavLogo from "../../assets/images/nav-logo.svg";
import { useSelector } from "react-redux";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const explores = [
  {
    name: "Courses",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "auth/courses",
    icon: ChartBarIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "auth/engagement",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers' data will be safe and secure.",
    href: "auth/security",
    icon: ShieldCheckIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools that you're already using.",
    href: "auth/integrations",
    icon: Squares2X2Icon,
  },
  {
    name: "Automations",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "auth/automations",
    icon: ArrowPathIcon,
  },
  {
    name: "Reports",
    description:
      "Get detailed reports that will help you make more informed decisions ",
    href: "auth/reports",
    icon: PresentationChartBarIcon,
  },
];
const resources = [
  {
    name: "Profile",
    description: "Get your profile details.",
    href: "auth/profile",
  },
  {
    name: "Add Video",
    description: "Add video to section",
    href: "admin/add-video",
  },
  {
    name: "Add Quiz",
    description: "Add quizes to section",
    href: "admin/add-quiz",
  },
  {
    name: "Contact",
    description: "Feel free to cantact us if you face any issues.",
    href: "/contact-us",
  },
];

const Header = () => {
  const [expired, setExpired] = useState(true);
  const token = localStorage.getItem("token");

  const userToken = useSelector((state) => state.users.token);

  const handleLogout = () => {
    // logout logic
    localStorage.removeItem("token");
    // window.location.reload();
    toast.info("Logout successfully", {
      position: "top-center",
      autoClose: 1250,
      hideProgressBar: true,
    });
    window.setTimeout(() => {
      window.location.assign("/");
    }, 1200);

    // window.location.href("/");
  };

  useEffect(() => {
    if (!isEmpty(token)) {
      setExpired(isExpired(token));
    }
  }, [token]);

  return (
    <header className="border sticky top-0 z-[1000] border-b-[1px] border-gray-500 bg-white shadow-sm">
      <Popover as="nav" className="relative">
        {/* Navbar start */}
        <div className="flex items-center justify-between px-4 py-4 sm:px-6 md:justify-between">
          {/* Navbar logo start*/}
          <div className="flex justify-start">
            <NavLink to="/">
              <span className="sr-only">Workflow</span>
              <img
                className="h-8 w-auto sm:h-10"
                src={NavLogo}
                alt="nav-logo"
              />
            </NavLink>
          </div>
          {/* Navbar logo end*/}

          {/* Navbar dropdown menu and link start */}
          <Popover.Group as="div" className="hidden space-x-5 lg:flex">
            {/* Navbar solution dropdown start */}
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-900" : "text-gray-700",
                      "group inline-flex items-center rounded-md text-base font-medium hover:text-gray-900 focus:outline-none",
                    )}
                  >
                    <span>Explore</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-gray-900" : "text-gray-700",
                        "ml-1 mr-1 h-5 w-5 group-hover:text-gray-900",
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="lg:left-1/2 absolute z-[500] -ml-4 mt-3 w-screen max-w-md transform lg:ml-0 lg:max-w-2xl lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-indigo-600 ring-opacity-25">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                          {explores.map((explore, index) => (
                            <NavLink
                              key={index}
                              to={expired ? "/login" : explore.href}
                              className="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-200"
                            >
                              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                                <explore.icon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              </div>
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">
                                  {explore.name}
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  {explore.description}
                                </p>
                              </div>
                            </NavLink>
                          ))}
                        </div>
                        <div className="bg-gray-50 p-5 sm:p-8">
                          <NavLink
                            to={expired ? "/login" : "auth/code-playground"}
                            className="-m-3 flow-root rounded-md p-3 hover:bg-gray-200"
                          >
                            <div className="flex items-center">
                              <div className="text-base font-medium text-gray-900">
                                Try Code Editor
                              </div>
                              <span className="py-0.5 ml-3 inline-flex items-center rounded-full bg-indigo-200 px-3 text-xs font-medium leading-5 text-indigo-800">
                                Beta
                              </span>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">
                              Empower your skills with 40+ different languages.
                            </p>
                          </NavLink>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            {/* Navbar solution dropdown end */}

            {/* Navbar links start */}
            <Fragment>
              <NavLink
                to="/about"
                className="text-base font-medium text-gray-700 hover:text-gray-900"
              >
                About
              </NavLink>
              <NavLink
                to={expired ? "/login" : "admin/create-course"}
                className="text-base font-medium text-gray-700 hover:text-gray-900"
              >
                Create Course
              </NavLink>
            </Fragment>
            {/* Navbar links end */}

            {/* Navbar more menu start */}
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-900" : "text-gray-700",
                      "group inline-flex items-center rounded-md text-base font-medium hover:text-gray-900 focus:outline-none",
                    )}
                  >
                    <span>More</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-gray-900" : "text-gray-700",
                        "ml-2 mr-2 h-5 w-5 group-hover:text-gray-800",
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="left-1/2 absolute z-10 mt-3 w-screen max-w-xs -translate-x-1/2 transform px-2 sm:px-0">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-indigo-600 ring-opacity-25">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {resources.map((resource, index) => (
                            <NavLink
                              key={index}
                              to={expired ? "/login" : resource.href}
                              className="-m-3 block rounded-md p-3 hover:bg-gray-200"
                            >
                              <p className="text-base font-medium text-gray-900">
                                {resource.name}
                              </p>
                              <p className="mt-1 text-sm text-gray-500">
                                {resource.description}
                              </p>
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            {/* Navbar more menu end */}
          </Popover.Group>
          {/* Navbar dropdown menu and link end */}

          <div className="flex md:gap-x-4">
            <SearchBar />
            {/* Navbar signup/login section */}
            <div className="hidden items-center justify-end lg:flex">
              {!isEmpty(userToken) || (!isEmpty(token) && !expired) ? (
                <button
                  type="button"
                  onClick={handleLogout}
                  className="logout-btn"
                >
                  Log out
                </button>
              ) : (
                <div className="flex gap-x-6">
                  <NavLink
                    to="/login"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-transparent px-3 py-1 text-base font-medium text-gray-700 shadow-sm hover:bg-indigo-100"
                  >
                    Sign in
                  </NavLink>
                  <NavLink
                    to="/register"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-indigo-600 px-3 py-1 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                  >
                    Sign up
                  </NavLink>
                </div>
              )}
            </div>
            {/* Navbar signup/login section end*/}
          </div>

          {/* Hamburger button Visible on md to lower device */}
          <div className="-my-2 -mr-2 lg:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              {/*  */}
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          {/* Hamburger button end */}
        </div>
        {/* Navbar end */}

        {/* Drawer box transition */}
        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {/* Drawer box */}
          <Popover.Panel
            focus
            className="fixed inset-x-0 top-0 h-screen origin-top-right transform overflow-y-scroll p-2 transition-all lg:hidden"
            id="style-2"
          >
            {/* Drawer box start */}
            <div className="divide-y-2 divide-gray-400 rounded-lg bg-white shadow-lg ring-1 ring-indigo-600 ring-opacity-25">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  {/* Drawer box logo */}
                  <div>
                    <img className="h-8 w-auto" src={NavLogo} alt="nav-logo" />
                  </div>
                  {/* Drawer box button */}
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                {/* Drawer box menu */}
                <div className="mt-6">
                  <nav className="grid grid-cols-1 gap-8">
                    {explores.map((explore, index) => (
                      <NavLink
                        key={index}
                        to={expired ? "/login" : explore.href}
                        className="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-200"
                      >
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-indigo-500 text-white">
                          <explore.icon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="ml-4 text-base font-medium text-gray-900">
                          {explore.name}
                        </div>
                      </NavLink>
                    ))}
                  </nav>
                </div>
              </div>
              {/* Drawer box end */}

              {/* Drawer box Visible start md */}
              <div className="px-5 py-6">
                {/* Drawer box link */}
                <div className="grid grid-cols-2 gap-4">
                  <NavLink
                    to="/about"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    About us
                  </NavLink>

                  <NavLink
                    to="admin/create-course"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Create Course
                  </NavLink>

                  <NavLink
                    to="/contact-us"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Contact
                  </NavLink>
                  {resources.map((resource, index) => (
                    <NavLink
                      key={index}
                      to={expired ? "/login" : resource.href}
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      {resource.name}
                    </NavLink>
                  ))}
                </div>
                {/* Drawer box login/signup button */}
                <div className="mt-6">
                  {!isEmpty(userToken) || (!isEmpty(token) && !expired) ? (
                    <button
                      type="button"
                      onClick={handleLogout}
                      className="logout-btn"
                    >
                      Log out
                    </button>
                  ) : (
                    <div>
                      <NavLink
                        to="/register"
                        className="border flex w-full items-center justify-center rounded-md border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                      >
                        Sign up
                      </NavLink>
                      <p className="mt-6 text-center text-base font-medium text-gray-500">
                        Existing student?{" "}
                        <NavLink
                          to="/login"
                          className="text-indigo-600 hover:text-indigo-500"
                        >
                          Sign in
                        </NavLink>
                      </p>
                    </div>
                  )}
                </div>
              </div>
              {/* Drawer box end */}
            </div>
          </Popover.Panel>
        </Transition>
        {/* Drawer box transition end*/}
      </Popover>
    </header>
  );
};

export default Header;
