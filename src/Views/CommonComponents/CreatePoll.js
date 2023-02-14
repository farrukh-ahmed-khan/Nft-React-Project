import React, { useRef } from "react";
import { useState } from "react";
import { Overlay, Popover } from "react-bootstrap";

import graphIcon from "../../Assets/images/Icons-PNG/graph-icon.PNG";

function CreatePoll({setPollQuestions,setPollAnswers,pollOptions}) {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const [question, setQuestion] = useState(null);
  const [option, setOption] = useState(null);
  const pollRef = useRef(null);

  const openPollMaker = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  let addOption = () => {
    setPollAnswers([...pollOptions,{ option, votes: 0 }]);
  };

  let deletePollItem = (index) => {
    let newPollOptions = pollOptions.filter((item, i) => {
      return i !== index;
    });
    setPollAnswers(newPollOptions);
  };

    let createPoll = () => {
        setPollQuestions(question);
        setPollAnswers(pollOptions);
        setShow(!show);
    }

  return (
    <>
      <li ref={pollRef} style={{ cursor: "pointer" }}>
        <span onClick={openPollMaker}>
          <img src={graphIcon} alt="graphIcon" />
        </span>
      </li>
      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={pollRef}
        containerPadding={20}
      >
        <Popover id="popover-contained">
          <Popover.Body>
            <div>
              <label className="form-label" htmlFor="poll-question">
                Poll Question
              </label>
              <input
                type="text"
                id="poll-question"
                className="form-control"
                onChange={(e) => setQuestion(e.target.value)}
              />

              <label className="form-label mt-2" htmlFor="poll-option">
                Add Poll Option
              </label>
              <input
                onChange={(e) => setOption(e.target.value)}
                type="text"
                id="poll-option"
                className="form-control"
              />
              <ul className="list-group list-group-flush">
                {pollOptions &&
                  pollOptions.map((value, index) => {
                    return (
                      <li key={index} className="list-group-item">
                        {value.option}
                        <span
                          onClick={() => deletePollItem(index)}
                          className="p-2"
                          id={index}
                        >
                          <svg
                            className="deletePoll"
                            width={10}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512"
                          >
                            <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
                          </svg>
                        </span>
                      </li>
                    );
                  })}
              </ul>
              <button
                className="btn btn-theme-light my-1 w-100"
                onClick={addOption}
                disabled={!question || !option}
              >
                Add Option
              </button>
            </div>
            <button onClick={createPoll} className="btn btn-theme-light my-1 w-100" disabled={!pollOptions}>
              Create Poll
            </button>
          </Popover.Body>
        </Popover>
      </Overlay>
    </>
  );
}

export default CreatePoll;
