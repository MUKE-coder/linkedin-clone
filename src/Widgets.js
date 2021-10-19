import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Linkedin News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Jb is on Fire Codding Plus", "Top News ---900 readers")}
      {newsArticle("Corona is  changing very first", "Top News ---700 readers")}
      {newsArticle("Tarabans Took Over", "Top News ---890 readers")}
      {newsArticle("React Developers on demand", "Top News ---509 readers")}
      {newsArticle(
        "Coding with JB Web developer coming soon!!!",
        "Top News ---700 readers"
      )}
    </div>
  );
};

export default Widgets;
