import React, { useState, useEffect } from "react";

const Typewriter = ({
  text,
  delay,
  finishedTypeWriter,
}: {
  text: any;
  delay: any;
  finishedTypeWriter: () => void;
}) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (text != null && currentIndex < text?.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => {
        clearTimeout(timeout);
      };
    } else {
      finishedTypeWriter();
    }
  }, [currentIndex, delay, text]);

  return <span className="whitespace-pre-line">{currentText}</span>;
};

export default Typewriter;
