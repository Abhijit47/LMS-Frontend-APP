import React, { Fragment } from "react";
import HeroIcon from "../../assets/images/online-learning.png";
import GenericButton from "../../components/button/GenericButton";
import GenericFormFooter from "../../components/button/GenericFormFooter";

const ForgotPassword = () => {
  return (
    <Fragment>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src={HeroIcon}
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold capitalize leading-9 tracking-tight text-gray-900">
            Forgot password
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="form-input"
                />
              </div>
            </div>

            <GenericButton buttonName="forgot password" />
          </form>
          <GenericFormFooter
            linkText="Not forgot your password? "
            linkTo="/login"
            linkMessage="Login Again"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default ForgotPassword;
