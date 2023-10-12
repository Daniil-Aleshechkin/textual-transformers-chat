import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faThumbsDown } from "@fortawesome/free-regular-svg-icons/faThumbsDown";

function RatingsBar(){
    return (
    <div className="rating bg-transparent">
      <div className="like grow">
        <FontAwesomeIcon className="rating-icon" icon={faThumbsUp}/>
      </div>
      <div className="dislike grow">
        <FontAwesomeIcon className="rating-icon" icon={faThumbsDown} />
      </div>
  </div>
  );
}


export default RatingsBar;