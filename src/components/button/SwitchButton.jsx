import React from "react";
import { Switch } from "@headlessui/react";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const SwitchButton = ({ agreed, setAgreed }) => {
  return (
    <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2" id="switch">
      <div className="flex h-6 items-center">
        <Switch
          checked={agreed}
          onChange={setAgreed}
          className={classNames(
            agreed ? "bg-indigo-600" : "bg-gray-200",
            "ring-gray-900/5 flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
          )}
        >
          <span className="sr-only">Agree to policies</span>
          <span
            aria-hidden="true"
            className={classNames(
              agreed ? "translate-x-4" : "translate-x-0",
              "ring-gray-900/5 transition h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 duration-200 ease-in-out",
            )}
          />
        </Switch>
      </div>
      <Switch.Label className="text-sm leading-6 text-gray-600">
        By selecting this, you agree to our{" "}
        <Link href="#!" className="font-semibold text-indigo-600">
          privacy&nbsp;policy
        </Link>
        .
      </Switch.Label>
    </Switch.Group>
  );
};

export default SwitchButton;
