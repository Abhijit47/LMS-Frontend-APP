import React, { Suspense, useEffect, useState } from "react";
import GearLoader from "../loader/GearLoader";
import { classnames } from "../../utils/general";
import { languageOptions } from "../../constants/languageOptions";
import { defineTheme } from "../../lib/defineTheme";
import OutputWindow from "./OutputWindow";
import CustomInput from "./CustomInput";
import OutputDetails from "./OutputDetails";
import ThemeDropdown from "./ThemeDropdown";
import LanguagesDropdown from "./LanguagesDropdown";
import useKeyPress from "../../hooks/useKeyPress";
import { getCompiledCode, submitAndCompile } from "../../features/judge0API";

const javascriptDefault = `// some comment`;

const LazyCodeEditor = React.lazy(() => import("./CodeEditorWindow"));

const CodeEditor = () => {
  const [code, setCode] = useState(javascriptDefault);
  const [customInput, setCustomInput] = useState("");
  const [outputDetails, setOutputDetails] = useState(null);
  const [processing, setProcessing] = useState(null);
  const [theme, setTheme] = useState("cobalt");
  const [language, setLanguage] = useState(languageOptions[0]);

  const enterPress = useKeyPress("Enter");
  const ctrlPress = useKeyPress("Control");

  // language handler
  const onSelectChange = (selectLanguage) => {
    // console.log("Select language...", selectLanguage);
    setLanguage(selectLanguage);
  };

  // if ctrl+enter press at same time
  useEffect(() => {
    if (enterPress && ctrlPress) {
      // console.log("enterPress", enterPress);
      // console.log("ctrlPress", ctrlPress);
      handleCompile();
    }
    // eslint-disable-next-line
  }, [enterPress, ctrlPress]);

  // code window change handler
  const onChange = (action, data) => {
    switch (action) {
      case "code":
        setCode(data);
        break;
      default:
        console.warn("case not handled!", action, data);
        break;
    }
  };

  // compiler handler
  const handleCompile = async () => {
    setProcessing(true);
    const formData = {
      language_id: language.id,
      // encode source code in base64
      source_code: btoa(code),
      stdin: btoa(customInput),
    };
    // console.log(formData);
    const token = await submitAndCompile(formData);

    setTimeout(async () => {
      await getCompiledCode(token, setProcessing, setOutputDetails);
    }, 2000);
  };

  // theme change handler
  function handleThemeChange(selectedTheme) {
    const theme = selectedTheme;
    // console.log("theme", theme);

    if (["light", "vs-dark"].includes(theme.value)) {
      setTheme(theme);
    } else {
      defineTheme(theme.value).then((_) => setTheme(theme));
    }
  }

  useEffect(() => {
    defineTheme("oceanic-next").then((_) =>
      setTheme({ value: "oceanic-next", label: "Oceanic Next" }),
    );
  }, []);

  return (
    <div>
      <div className="flex flex-row">
        <div className="px-4 py-2">
          <LanguagesDropdown onSelectChange={onSelectChange} />
        </div>
        <div className="px-4 py-2">
          <ThemeDropdown handleThemeChange={handleThemeChange} theme={theme} />
        </div>
      </div>
      <div className="flex px-4 py-4 xs:flex-col xl:flex-row xl:justify-between">
        {/* left-container */}
        <div className="flex h-full justify-center self-center xs:w-full xl:mt-4 xl:w-8/12">
          <Suspense fallback={<GearLoader />}>
            <LazyCodeEditor
              code={code}
              onChange={onChange}
              language={language?.value}
              theme={theme?.value}
            />
          </Suspense>
        </div>

        {/* right-container */}
        <div className="flex flex-wrap px-2 xs:flex-row xs:items-center xs:gap-x-4 xl:w-4/12 xl:flex-col xl:gap-x-0">
          {/* Output window */}
          <OutputWindow outputDetails={outputDetails} />

          <div className="flex xs:flex-row xs:gap-x-4 xl:w-11/12 xl:flex-col xl:gap-x-0">
            {/* Custom input */}
            <div className="flex flex-col items-end">
              <CustomInput
                customInput={customInput}
                setCustomInput={setCustomInput}
              />
              <button
                onClick={handleCompile}
                disabled={!code}
                className={classnames(
                  "transition hover:shadow z-10 mt-4 flex-shrink-0 rounded-md border-2 border-black bg-white px-4 py-2 shadow-[5px_5px_0px_0px_rgba(0,0,0)] duration-200",
                  !code ? "opacity-50" : "",
                )}
              >
                {processing ? "Processing..." : "Compile and Execute"}
              </button>
              {/* <button onClick={checkStatus}>get compiled code</button> */}
            </div>

            {/* Output result */}
            {outputDetails && <OutputDetails outputDetails={outputDetails} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
