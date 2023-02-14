import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from 'moment'

import DatePick from "../CommonComponents/datePicker";
import EmojiPicker from "../CommonComponents/EmojiPicker";
import ImagePicker from "../CommonComponents/ImagePicker";
import PollContainer from "../CommonComponents/PollContainer";
import GifSearch from "../CommonComponents/GifSearch";

import CreatePoll from "./CreatePoll";
import { getAllTimelinePosts, UpdateTimelinePosts } from "../../store/actions/HomeActions/homeActions";

function PostComposer() {
  const [postText, setPostText] = useState(null);
  const [postImage, setPostImage] = useState(null);
  const [choosenEmoji, setChoosenEmoji] = useState(null);
  const [selectedGif, setSelectedGif] = useState(null);
  const [pollQuestion, setPollQuestions] = useState(null);
  const [pollAnswers, setPollAnswers] = useState([]);
  const [calenderValue, setCalenderValue] = useState(new Date());

  const dispatch = useDispatch();
  let { allPosts } = useSelector(state => state.allPosts);
  const { userData } = useSelector(state => state.userData);
  
  const [postData, setPostData] = React.useState([]);
  let postTextRef = useRef();

  useEffect(() => {
    dispatch(getAllTimelinePosts())
  }, [dispatch])

  useEffect(() => {
    choosenEmoji && (postTextRef.current.innerText += choosenEmoji);
    setPostText(postTextRef.current.innerText);
  }, [choosenEmoji]);

  useEffect(() => {
    setPostData({
      postOwnerName:userData?.name,
      postBy:userData?._id,
      ownerProfilePic:userData?.picture,
      text: postText,
      image: postImage,
      gif: selectedGif,
      date: moment(calenderValue).format("MMM DD, YY"),
      emoji: choosenEmoji,
      poll: {
        question: pollQuestion,
        answers: pollAnswers,
      },
      likedBy: [], 
      audience:"public",
      sharedBy:[]
    });
  }, [postText, postImage, choosenEmoji, selectedGif, pollQuestion, pollAnswers,calenderValue,userData]);


  let handlePostBtn = () => {
    allPosts
      ? dispatch(
        UpdateTimelinePosts([...allPosts, postData],)
      )
      : dispatch(UpdateTimelinePosts([postData]));
    postTextRef.current.innerText = "";
    setPostImage(null);
    setSelectedGif(null);
    setPollQuestions(null);
    setPollAnswers(null);
    setPostText("");
    setCalenderValue(new Date())
  };

  return (
    <div className="card-post">
      <div className="d-flex">
        <div className="profile-avatar">
          <img width={"100%"} src={userData?.picture} alt="profileImg" />
        </div>
        <div
          ref={postTextRef}
          className="post-area"
          onInput={(e) => setPostText(e.target.innerText)}
          contentEditable
          suppressContentEditableWarning
        ></div>
      </div>
      {postImage ? (
        <div className="card-lg-img">
          <div className="img-wrap">
            <img src={postImage} alt="img" />
          </div>
        </div>
      ) : null}
      {selectedGif ? (
        <div className="card-lg-img">
          <div className="img-wrap">
            <img src={selectedGif[0]} alt="" />
          </div>
        </div>
      ) : null}
      {pollQuestion && pollAnswers ? <PollContainer creatingPost={true} setPollAnswers={setPollAnswers} pollQuestion={pollQuestion} pollAnswers={pollAnswers} /> : null}
      <div className="icon-btn-wrap">
        <ul className="icon-list">
          <ImagePicker setPostImage={setPostImage} />
          <GifSearch setSelectedGif={setSelectedGif} variant="bottom"/>
          <CreatePoll
            setPollQuestions={setPollQuestions}
            setPollAnswers={setPollAnswers}
            pollOptions={pollAnswers}
          />
          <EmojiPicker setChoosenEmoji={setChoosenEmoji} variant="bottom"/>
          <DatePick calenderValue={calenderValue} setCalenderValue={setCalenderValue}/>
        </ul>
        <button
          className="btn btn-theme btn-post"
          onClick={handlePostBtn}
          disabled={!postText && !postImage && !selectedGif}
        >
          post
        </button>
      </div>
    </div>
  );
}

export default PostComposer;
