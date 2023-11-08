import React from "react";
import ContactFormInput from "./ContactFormInputs";

const ContactForm = ({ contactFormData, setContactFormData }) => {
  const { firstName, lastName, company, email, phone, message } =
    contactFormData;

  const firstRowInputs = [
    {
      inputID: "0",
      labelFor: "firstName",
      labelName: "first name",
      type: "text",
      name: "firstName",
      id: "firstName",
      value: firstName,
      autoComplete: "off",
      placeHolder: "Enter your first name",
    },
    {
      inputID: "1",
      labelFor: "lastName",
      labelName: "last name",
      type: "text",
      name: "lastName",
      id: "lastName",
      value: lastName,
      autoComplete: "off",
      placeHolder: "Enter your last name",
    },
  ];

  const otherRowInputs = [
    {
      inputID: "0",
      labelFor: "company",
      labelName: "company",
      type: "text",
      name: "company",
      id: "company",
      required: false,
      value: company,
      autoComplete: "off",
      placeHolder: "Enter your company name",
    },
    {
      inputID: "1",
      labelFor: "email",
      labelName: "email",
      type: "email",
      name: "email",
      id: "email",
      required: true,
      value: email,
      autoComplete: "off",
      placeHolder: "Enter your email address",
    },
    {
      inputID: "2",
      labelFor: "phone",
      labelName: "phone",
      type: "tel",
      name: "phone",
      id: "phone",
      required: true,
      value: phone,
      autoComplete: "off",
      placeHolder: "Enter your mobile number",
    },
    {
      inputID: "3",
      labelFor: "message",
      labelName: "message",
      name: "message",
      id: "message",
      required: true,
      value: message,
      autoComplete: "off",
      placeHolder: "Enter your message",
    },
  ];

  const contactFormInput = [firstRowInputs, otherRowInputs];

  return (
    <ContactFormInput
      contactFormInput={contactFormInput}
      contactFormData={contactFormData}
      setContactFormData={setContactFormData}
    />
  );
};

export default ContactForm;
