import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faThumbsDown } from "@fortawesome/free-regular-svg-icons/faThumbsDown";

function RatingsBar() {
  return (
    <div className="rating bg-transparent">
      <div className="like grow bg-transparent">
        <FontAwesomeIcon
          className="rating-icon bg-transparent"
          icon={faThumbsUp}
        />
      </div>
      <div className="dislike grow  bg-transparent">
        <FontAwesomeIcon className="rating-icon" icon={faThumbsDown} />
      </div>
    </div>
  );
}

export default RatingsBar;
