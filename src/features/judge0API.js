import axios from "axios";
import { showSuccessToast, showErrorToast } from "../utils/customToast";

export const submitAndCompile = async (formData) => {
  const options = {
    method: "POST",
    url: `${process.env.REACT_APP_RAPID_API_URL}/submissions`,
    params: {
      base64_encoded: 'true',
      fields: '*'
    },
    headers: {
      "content-type": "application/json",
      "Content-Type": "application/json",
      'X-RapidAPI-Key': `${process.env.REACT_APP_RAPID_API_KEY}`,
      'X-RapidAPI-Host': `${process.env.REACT_APP_RAPID_API_HOST}`
    },
    data: formData
  };

  try {
    const res = await axios.request(options);
    if (res.status === 201) {
      return res.data.token;
    } else {
      console.error(res.status);
    }
  } catch (error) {
    console.log(error);
  }
};

export const getCompiledCode = async (token, setProcessing, setOutputDetails) => {
  console.log("first", token);
  const options = {
    method: "GET",
    url: `${process.env.REACT_APP_RAPID_API_URL}/submissions/${token}`,
    params: { base64_encoded: "true", fields: "*" },
    headers: {
      "X-RapidAPI-Key": `${process.env.REACT_APP_RAPID_API_KEY}`,
      "X-RapidAPI-Host": `${process.env.REACT_APP_RAPID_API_HOST}`,
    },
  };

  try {
    const res = await axios.request(options);
    console.log("compiled res", res.data);
    let statusId = res.data.status?.id;

    if (statusId === 1 || statusId === 2) {

      // still processing
      setTimeout(() => {
        getCompiledCode(token);
      }, 2000);
      return;
    } else {
      setProcessing(false);
      setOutputDetails(res.data);
      showSuccessToast("Compiled Successfully!");
      console.log("compiled", res.data);
    }
  } catch (err) {
    console.log(err);
    setProcessing(false);
    showErrorToast(err.code);
    showErrorToast(err.response.data.message);
  }
};