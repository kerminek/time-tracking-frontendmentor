import "./App.css";
import profilePic from "./images/image-jeremy.png";
import dummyData from "./data.json";
import { ReactComponent as WorkIcon } from "./images/icon-work.svg";
import { ReactComponent as PlayIcon } from "./images/icon-play.svg";
import { ReactComponent as StudyIcon } from "./images/icon-study.svg";
import { ReactComponent as ExerciseIcon } from "./images/icon-exercise.svg";
import { ReactComponent as SocialIcon } from "./images/icon-social.svg";
import { ReactComponent as SelfCareIcon } from "./images/icon-self-care.svg";
import React, { useState } from "react";

function App() {
  const [timeInterval, setTimeInterval] = useState("daily");

  const handleClickInterval = (e) => {
    setTimeInterval(e);
  };

  const translate = () => {
    switch (timeInterval) {
      case "daily":
        return "Day";
      case "weekly":
        return "Week";
      case "monthly":
        return "Month";
    }
  };

  const icons = {
    WorkIcon: WorkIcon,
    PlayIcon: PlayIcon,
    StudyIcon: StudyIcon,
    ExerciseIcon: ExerciseIcon,
    SocialIcon: SocialIcon,
    SelfCareIcon: SelfCareIcon,
  };

  const generateSvgIcon = (name) => {
    const SvgIcon = icons[name + "Icon"];

    return <SvgIcon props={name} className={"svgIcon"} />;
  };

  return (
    <div className="App">
      <div className="appContainer">
        <div className="bigBox">
          <div className="bigLightContainer">
            <div className="imgContainer">
              <img src={profilePic} alt="" />
            </div>
            <div className="textContainer">
              <p>Report for</p>
              <h1>Jeremy Robson</h1>
            </div>
          </div>
          <div className="bigDarkContainer">
            <div className="interval">
              <p onClick={() => handleClickInterval("daily")} style={{ color: timeInterval === "daily" && "white" }}>
                Daily
              </p>
              <p onClick={() => handleClickInterval("weekly")} style={{ color: timeInterval === "weekly" && "white" }}>
                Weekly
              </p>
              <p
                onClick={() => handleClickInterval("monthly")}
                style={{ color: timeInterval === "monthly" && "white" }}
              >
                Monthly
              </p>
            </div>
          </div>
        </div>
        {dummyData.map((category) => (
          <div className="smallBox" key={category.title}>
            <div className={"smallLightContainer" + " " + "theme" + category.title.replace(/\s+/g, "")}>
              {generateSvgIcon(category.title.replace(/\s+/g, ""))}
            </div>
            <div className="smallDarkContainer">
              <p className="cardTitle">{category.title}</p>
              <div className="dotsIcon">
                <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                    fill="#BBC0FF"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
              <div className="cardTimeContainer">
                <p className="cardCurrentTime">{[category.timeframes[timeInterval].current]}hrs</p>
                <p className="cardPreviousTime">
                  Last {translate()} - {category.timeframes[timeInterval].previous}hrs
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
