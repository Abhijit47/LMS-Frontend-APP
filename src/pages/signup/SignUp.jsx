import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import isEqual from "lodash/isEqual";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import GenericFormFooter from "../../components/button/GenericFormFooter";
import Logo from "../../assets/images/nav-logo.svg";
import GenericButton from "../../components/button/GenericButton";
import { formSocialButtons } from "../../constants";
import { signUp } from "../../features/actions/userAction";
import Loader from "../../components/loader/Loader";

const InitialFormData = {
  name: "",
  email: "",
  password: "",
  confPassword: "",
};

const SignUp = () => {
  const [formData, setFormData] = useState(InitialFormData);
  const [isChecked, setIsChecked] = useState(false);

  const navigate = useNavigate();

  // eslint-disable-next-line
  const { isLoading, isError } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const { name, email, password, confPassword } = formData;

  // Define a Function for handle form-checkbox
  const handleCheckbox = (e) => {
    if (e.target.value === "on") {
      e.target.value = "off";
      setIsChecked(true);
    } else {
      e.target.value = "on";
      setIsChecked(false);
    }
  };

  // Define a function for handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Define a function for handle form submit
  const handleSubmit = async (e) => {
    // Block form default form submitting
    e.preventDefault();

    // check both passwords are equal or not
    if (!isEqual(password, confPassword)) {
      return toast.warn("Passwords aren't matched!", {
        autoClose: 1250,
        position: "top-right",
      });
    }

    // create form-data
    const formData = {
      name,
      email,
      password,
    };

    // Dispatch a sign in action for user sign in
    dispatch(
      signUp({
        formData,
        cb: (result) => {
          console.log(result);
          switch (result.status) {
            case 400:
              toast.info(result.data.message, {
                position: "top-center",
                autoClose: 1250,
                hideProgressBar: true,
              });
              setFormData(InitialFormData);
              navigate("/register");
              break;
            case 404:
              toast.info(result.data.message, {
                position: "top-center",
                autoClose: 1250,
                hideProgressBar: true,
              });
              setFormData(InitialFormData);
              navigate("/register");
              break;
            case 409:
              toast.info(result.data.message, {
                position: "top-center",
                autoClose: 1250,
                hideProgressBar: true,
              });
              setFormData(InitialFormData);
              navigate("/login");
              break;
            case 201:
              toast.info(result.data.status, {
                position: "top-center",
                autoClose: 1250,
                hideProgressBar: true,
              });
              setFormData(InitialFormData);
              navigate("/login");
              break;
            case 500:
              toast.error("Internal server error", {
                position: "top-center",
                autoClose: 1250,
                hideProgressBar: true,
              });
              setFormData(InitialFormData);
              navigate("/");
              break;
            default:
              toast.error("Something goes really wrong!", {
                position: "top-center",
                autoClose: 1250,
                hideProgressBar: true,
              });
              setFormData(InitialFormData);
              navigate("/");
              break;
          }
        },
      }),
    );
  };

  return (
    <Fragment>
      {isLoading && (
        <div className="flex min-h-screen items-center justify-center">
          <Loader />
        </div>
      )}
      {!isLoading && (
        <div className="grid min-h-full grid-cols-2">
          <div className="order-last col-span-2 px-4 py-12 sm:px-6 lg:col-span-1 lg:px-20 xl:px-24">
            <div className="lg:w-96 mx-auto w-full max-w-sm">
              <div>
                <img className="mx-auto h-12 w-auto" src={Logo} alt="logo" />
                <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                  Sign up to your account
                </h2>
                <GenericFormFooter
                  linkText="Already member? "
                  linkTo="/login"
                  linkMessage="Login here"
                />
              </div>

              <div className="mt-8">
                <div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">
                      Sign in with
                    </p>

                    <div className="mt-1 grid grid-cols-3 gap-3">
                      {formSocialButtons.map((socialBtn, index) => (
                        <div key={index}>
                          <Link to="/login" className="form-social-btn">
                            <span className="sr-only">
                              {socialBtn.linkName}
                            </span>
                            {socialBtn.icon}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative mt-6">
                    <div
                      className="absolute inset-0 flex items-center"
                      aria-hidden="true"
                    >
                      <div className="border-t w-full border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="bg-white px-2 text-gray-500">
                        Or continue with
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <form
                    onSubmit={handleSubmit}
                    method="POST"
                    className="space-y-6"
                  >
                    {/* fullname */}
                    <div className="">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Full name
                      </label>
                      <div className="mt-1">
                        <input
                          id="name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          className="form-input"
                          placeholder="Enter your full name"
                          required
                          minLength={3}
                          value={name}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    {/* email */}
                    <div className="">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          className="form-input"
                          required
                          title="Please enter a valid Email."
                          value={email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    {/* password */}
                    <div className="">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Password
                      </label>
                      <div className="mt-1">
                        <input
                          id="password"
                          name="password"
                          type="password"
                          autoComplete="current-password"
                          className="form-input"
                          minLength={8}
                          required
                          pattern="^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,}$"
                          title="At least 8 digit with alpha-numeric characters"
                          value={password}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    {/* cofirm password */}
                    <div className="">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Confirm Password
                      </label>
                      <div className="mt-1">
                        <input
                          id="confPassword"
                          name="confPassword"
                          type="password"
                          autoComplete="off"
                          className="form-input"
                          minLength={8}
                          required
                          value={confPassword}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-start">
                      <div className="flex items-center">
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                          checked={isChecked}
                          onChange={handleCheckbox}
                          className="h-4 w-4 rounded-sm border-gray-400 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor="remember-me"
                          className="ml-2 block text-sm text-gray-900"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>

                    <div className="">
                      <GenericButton
                        buttonName="sign up"
                        isChecked={isChecked}
                        isLoading={isLoading}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:col-span-1 lg:block">
            <img
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default SignUp;
