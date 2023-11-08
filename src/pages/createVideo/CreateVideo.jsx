import React, { useState } from "react";
import VideoForm from "../../components/sectionForm/VideoForm";
import SwitchButton from "../../components/button/SwitchButton";
import Button from "../../components/button/Button";

const CreateVideo = () => {
  //eslint-disable-next-line
  const [videoData, setVideoData] = useState({
    video_title: "",
    video_url: "",
  });
  const [agreed, setAgreed] = useState(false);

  //Form-input onChange handler
  const updateFields = (fields) => {
    setVideoData((prev) => {
      return { ...prev, ...fields };
    });
  };

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    let video_url = `https://www.youtube.com/embed/${videoData.video_url}`;
    const formData = {
      ...videoData,
      video_url,
    };
    console.log(formData);

    // need to pass course id

    // need to login admin and moderator

    // make an axios call to submit data
  };

  return (
    <section className="container mx-auto h-full py-24">
      <form onSubmit={handleSubmit}>
        <div className="mx-auto flex max-w-xl flex-col gap-y-4 rounded-md p-8 shadow-lg ring-1 ring-gray-400">
          <VideoForm {...videoData} updateFields={updateFields} />
          <SwitchButton agreed={agreed} setAgreed={setAgreed} />
          <Button buttonName={"Submit"} agreed={agreed} />
        </div>
      </form>
    </section>
  );
};

export default CreateVideo;
