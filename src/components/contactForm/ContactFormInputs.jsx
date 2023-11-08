import React, { Fragment, useState } from "react";
import { handleMessageLimit } from "../../features/handlerFactory";

const ContactFormInput = ({
  contactFormInput,
  contactFormData,
  setContactFormData,
}) => {
  const [messageCharacterCount, setMessageCharacterCount] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactFormData({ ...contactFormData, [name]: value });
  };

  const [firstRowInputs, otherRowInputs] = contactFormInput;

  return (
    <>
      {firstRowInputs.map((firstRowInput, id) => {
        return (
          <Fragment key={id}>
            <div>
              <label
                htmlFor={firstRowInput.labelFor}
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                {firstRowInput.labelName}
              </label>
              <div className="mt-2.5">
                <input
                  type={firstRowInput.type}
                  name={firstRowInput.name}
                  id={firstRowInput.id}
                  autoComplete={firstRowInput.autoComplete}
                  className="form-input"
                  placeholder={firstRowInput.placeHolder}
                  value={firstRowInput.value}
                  onChange={handleChange}
                  required={true}
                />
              </div>
            </div>
          </Fragment>
        );
      })}

      {otherRowInputs.map((otherRowInput, idx) => {
        return (
          <Fragment key={idx}>
            {idx !== 3 ? (
              <div className="sm:col-span-2">
                <label
                  htmlFor={otherRowInput.labelFor}
                  className="block text-sm font-semibold capitalize leading-6 text-gray-900"
                >
                  {otherRowInput.labelName}
                </label>
                <div className="mt-2.5">
                  <input
                    type={otherRowInput.type}
                    name={otherRowInput.name}
                    id={otherRowInput.id}
                    autoComplete={otherRowInput.autoComplete}
                    className="form-input"
                    placeholder={otherRowInput.placeHolder}
                    value={otherRowInput.value}
                    onChange={handleChange}
                    required={otherRowInput.required}
                  />
                </div>
              </div>
            ) : (
              <div className="sm:col-span-2">
                <label
                  htmlFor={otherRowInput.labelFor}
                  className="block text-sm font-semibold capitalize leading-6 text-gray-900"
                >
                  {otherRowInput.labelName}
                </label>
                <div className="mt-2.5">
                  <textarea
                    type={otherRowInput.type}
                    name={otherRowInput.name}
                    id={otherRowInput.id}
                    autoComplete={otherRowInput.autoComplete}
                    rows={4}
                    className={"form-input"}
                    value={otherRowInput.value}
                    onChange={handleChange}
                    placeholder={otherRowInput.placeHolder}
                    onKeyUp={(ev) =>
                      handleMessageLimit(
                        ev,
                        setMessageCharacterCount,
                        ".message-warning",
                      )
                    }
                    required={otherRowInput.required}
                    maxLength={250}
                  />
                  <span className="message-warning float-left hidden text-xs text-red-700">
                    Limit upto 250 charcters only
                  </span>
                  {messageCharacterCount === 0 ? (
                    <span className="float-right text-xs font-semibold leading-6 text-gray-900 opacity-0">
                      {messageCharacterCount}
                    </span>
                  ) : (
                    <span className="float-right text-xs font-semibold leading-6 text-gray-900">
                      {messageCharacterCount}
                    </span>
                  )}
                </div>
              </div>
            )}
          </Fragment>
        );
      })}
    </>
  );
};

export default ContactFormInput;
