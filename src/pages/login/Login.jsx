import React, { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GenericButton from "../../components/button/GenericButton";
import GenericFormFooter from "../../components/button/GenericFormFooter";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../features/actions/userAction";
import { toast } from "react-toastify";

import NavLogo from "../../assets/images/nav-logo.svg";
import { formSocialButtons } from "../../constants";
import Loader from "../../components/loader/Loader";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isChecked, setIsChecked] = useState(false);

  const { isLoading, token, userDetails } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { email, password } = formData;

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
  const handleSubmit = (e) => {
    // Block form default form submitting
    e.preventDefault();

    // Dispatch a sign in action for user sign in
    dispatch(
      signIn({
        formData,
        cb: (result) => {
          switch (result.status) {
            case 400:
              toast.info(result.data.message, {
                position: "top-center",
                autoClose: 400,
                hideProgressBar: true,
              });
              setFormData({ email: "", password: "" });
              navigate("/login");
              break;
            case 404:
              toast.info(result.data.message, {
                position: "top-center",
                autoClose: 400,
                hideProgressBar: true,
              });
              setFormData({ email: "", password: "" });
              navigate("/login");
              break;
            case 200:
              toast.success(result.data.status, {
                position: "top-center",
                autoClose: 400,
                hideProgressBar: true,
              });
              setFormData({ email: "", password: "" });
              navigate("/");
              break;
            case 500:
              toast.error("INTERNAL SERVER ERROR", {
                position: "top-right",
                autoClose: 400,
                hideProgressBar: true,
              });
              setFormData({ email: "", password: "" });
              navigate("/");
              break;
            default:
              toast.warning("Something going wrong!", {
                position: "top-center",
                autoClose: 400,
                hideProgressBar: true,
              });
              setFormData({ email: "", password: "" });
              navigate("/");
              break;
          }
        },
      }),
    );
  };

  useEffect(() => {
    if (!userDetails || !token) {
      navigate("/login");
    } else {
      navigate("/");
    }
  }, [navigate, userDetails, token]);

  return (
    <Fragment>
      {isLoading && (
        <div className="flex min-h-screen items-center justify-center">
          <Loader />
        </div>
      )}

      {!isLoading && (
        <div className="flex min-h-full flex-col justify-center pb-20 pt-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <img className="mx-auto h-12 w-auto" src={NavLogo} alt="logo" />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
            <GenericFormFooter
              linkText="Not a member? "
              linkTo="/register"
              linkMessage="Sign up here"
            />
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="shadow bg-gray-100 px-4 py-8 sm:rounded-lg sm:px-10">
              <form onSubmit={handleSubmit} className="space-y-6" method="POST">
                <div>
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
                      required
                      value={userDetails?.email || email}
                      onChange={handleChange}
                      className="form-input"
                      title="Enter your valid email address"
                    />
                  </div>
                </div>

                <div>
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
                      className="form-input"
                      autoComplete="current-password"
                      minLength={8}
                      required
                      pattern="^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,}$"
                      title="At least 8 digit with alpha-numeric characters"
                      value={password}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
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

                  <div className="text-sm">
                    <Link
                      to="/forgot-password"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                </div>

                <div>
                  <GenericButton
                    buttonName="sign in"
                    isChecked={isChecked}
                    isLoading={isLoading}
                  />
                </div>
              </form>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t-2 border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-white px-2 text-gray-500">
                      Or continue with
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  {formSocialButtons.map((socialBtn, index) => (
                    <div key={index}>
                      <Link to="/login" className="form-social-btn">
                        <span className="sr-only">{socialBtn.linkName}</span>
                        {socialBtn.icon}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Login;
