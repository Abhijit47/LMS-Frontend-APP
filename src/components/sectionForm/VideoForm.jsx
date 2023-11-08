import React from "react";
import SectionFormWrapper from "./SectionFormWrapper";

const VideoForm = ({ video_title, video_url, updateFields }) => {
  return (
    <SectionFormWrapper title="Video Form">
      {/* Video title */}
      <div className="col-span-2">
        <label
          htmlFor="video_title"
          className="block text-sm font-semibold capitalize leading-6 text-gray-900"
        >
          video title
        </label>
        <div className="mt-2.5">
          <input
            type="text"
            name="video_title"
            id="video_title"
            className="form-input"
            required={true}
            autoComplete="off"
            placeholder={"Enter video title"}
            value={video_title}
            onChange={(e) => updateFields({ video_title: e.target.value })}
          />
        </div>
      </div>

      {/* Video URL */}
      <div className="col-span-2">
        <label
          htmlFor="video_url"
          className="block text-sm font-semibold capitalize leading-6 text-gray-900"
        >
          video url
        </label>
        <div className="mt-2.5">
          <div className="relative mb-4 flex w-full items-stretch">
            <div className="-mr-px flex">
              <span className="flex border-collapse select-none items-center rounded-l-md rounded-r-none bg-gray-200 px-3 text-sm leading-normal text-gray-500 hover:ring-2 hover:ring-indigo-600">
                https://www.youtube.com/embed/
              </span>
            </div>

            <input
              type={"text"}
              name={"video_url"}
              id={"video_url"}
              value={video_url}
              onChange={(e) => updateFields({ video_url: e.target.value })}
              required={true}
              autoComplete="off"
              placeholder={"Ex : gVqATbb826U"}
              className="form-input rounded-l-none"
              minLength={10}
              maxLength={11}
            />
          </div>
        </div>
      </div>
    </SectionFormWrapper>
  );
};

export default VideoForm;
