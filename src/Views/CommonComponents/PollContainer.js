import React from "react";
import Poll from 'react-polls';

function PollContainer({creatingPost,setPollAnswers = ()=>console.log("data recieved"),pollAnswers, pollQuestion}) {

    let handleVote = voteAnswer => {
      const newPollAnswers = pollAnswers.map(answer => {
        if (answer.option === voteAnswer) answer.votes++
        return answer
      })
      setPollAnswers([...newPollAnswers])
    }

  return (
    <div className={creatingPost ? "creatingPoll":""}>
      <Poll
        question={pollQuestion}
        answers={pollAnswers}
        onVote={handleVote}
      />
    </div>
  );
}

export default PollContainer;
