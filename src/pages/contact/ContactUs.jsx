import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ComponentsHeader from "../../components/componentHeader/ComponentsHeader";
import SwitchButton from "../../components/button/SwitchButton";
import Button from "../../components/button/Button";
import ContactForm from "../../components/contactForm/ContactForm";
import { CONTACT_FORM_INITIAL_VALUE } from "../../constants";
import { createQuery } from "../../features/actions/queryAction";

const ContactUs = () => {
  const [agreed, setAgreed] = useState(false);
  const [contactFormData, setContactFormData] = useState(
    CONTACT_FORM_INITIAL_VALUE,
  );

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    // dispatch action to create a contact request
    dispatch(
      createQuery({
        contactFormData,
        cb: (result) => {
          switch (result.status) {
            case 400:
              setContactFormData(CONTACT_FORM_INITIAL_VALUE);
              toast.info(result.data.message, {
                autoClose: 1250,
                position: "bottom-center",
                className: "text-xs",
              });
              navigate("/", { replace: true });
              break;
            case 404:
              setContactFormData(CONTACT_FORM_INITIAL_VALUE);
              toast.info("Not found!", {
                autoClose: 1250,
                position: "bottom-center",
                className: "text-xs",
              });
              navigate("/", { replace: true });
              break;
            case 201:
              setContactFormData(CONTACT_FORM_INITIAL_VALUE);
              toast.success(result.data.data.message, {
                autoClose: 1250,
                position: "bottom-center",
                className: "text-xs",
              });
              navigate("/", { replace: true });
              break;
            case 500:
              setContactFormData(CONTACT_FORM_INITIAL_VALUE);
              toast.error(result.data.message, {
                autoClose: 1250,
                position: "bottom-center",
                className: "text-xs",
              });
              navigate("/", { replace: true });
              break;
            default:
              setContactFormData(CONTACT_FORM_INITIAL_VALUE);
              toast.error("Something went really wrong!", {
                autoClose: 1250,
                position: "bottom-center",
                className: "text-xs",
              });
              navigate("/", { replace: true });
              break;
          }
        },
      }),
    );
  };

  return (
    <div className="bg-gradient-to-tr from-indigo-200 via-purple-200 to-pink-200 px-6 py-2 sm:py-32 lg:px-8">
      <ComponentsHeader
        headerName="Contact Us"
        description="Aute magna irure deserunt veniam aliqua magna enim voluptate."
      />
      <form
        action="#"
        method="POST"
        onSubmit={handleSubmit}
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <ContactForm
            contactFormData={contactFormData}
            setContactFormData={setContactFormData}
          />

          {/* Switch Button */}
          <SwitchButton agreed={agreed} setAgreed={setAgreed} />
        </div>
        {/* Submit Button */}

        <Button buttonName="Let's talk" agreed={agreed} />
      </form>
    </div>
  );
};

export default ContactUs;
