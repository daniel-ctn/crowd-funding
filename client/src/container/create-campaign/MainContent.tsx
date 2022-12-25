import { FC } from "react";

import './MainContent.css';

const MainContent: FC = () => {
  return (
    <div className="create-campaign__wrapper">
      <form className="create-campaign__form">
        <h2 className="create-campaign__form--title">
          Create Campaign
        </h2>
        <div className="create-campaign__form--input">
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" />
        </div>
        <div className="create-campaign__form--input">
          <label htmlFor="title">Campaign Title:</label>
          <input type="text" id="title" />
        </div>
        <div className="create-campaign__form--input">
          <label htmlFor="story">Story:</label>
          <textarea id="story" rows={4} />
        </div>
      </form>
    </div>
  );
};

export default MainContent;
