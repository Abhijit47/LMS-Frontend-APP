import React, { useState } from "react";
import SectionFormWrapper from "./SectionFormWrapper";
import { handleMessageLimit } from "../../features/handlerFactory";

const SectionForm = ({
  section_name,
  section_description,
  courseId,
  updateFields,
}) => {
  const [messageCharacterCount, setMessageCharacterCount] = useState(0);
  return (
    <SectionFormWrapper title="Section Form">
      {/* Course ID */}
      <div className="col-span-2">
        <label
          htmlFor="id"
          className="block select-none text-sm font-semibold capitalize leading-6 text-gray-900"
        >
          section id
        </label>
        <div className="mt-2.5">
          <input
            type="text"
            name="id"
            id="id"
            value={courseId || ""}
            required={true}
            disabled
            autoComplete="off"
            placeholder={courseId ? courseId : "Section ID"}
            className="form-input selection:bg-transparent"
          />
        </div>
      </div>

      {/* Section name */}
      <div className="col-span-2">
        <label
          htmlFor="section_name"
          className="block text-sm font-semibold capitalize leading-6 text-gray-900"
        >
          section name
        </label>
        <div className="mt-2.5">
          <input
            type="text"
            name="section_name"
            id="section_name"
            className="form-input"
            placeholder="Enter section name"
            autoComplete="off"
            required
            value={section_name}
            onChange={(e) => updateFields({ section_name: e.target.value })}
          />
        </div>
      </div>

      {/* Section description */}
      <div className="col-span-2">
        <label
          htmlFor="section_description"
          className="block text-sm font-semibold capitalize leading-6 text-gray-900"
        >
          section description
        </label>
        <div className="mt-2.5">
          <textarea
            name="section_description"
            id="section_description"
            rows="5"
            className="form-input resize-none"
            placeholder="Enter section description"
            autoComplete="off"
            maxLength={250}
            required
            value={section_description}
            onChange={(e) =>
              updateFields({ section_description: e.target.value })
            }
            onKeyUp={(ev) =>
              handleMessageLimit(
                ev,
                setMessageCharacterCount,
                ".message-warning-section",
              )
            }
          ></textarea>
          <span className="message-warning-section float-left hidden text-xs text-red-700">
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
    </SectionFormWrapper>
  );
};

export default SectionForm;
