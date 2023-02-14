import React, { useEffect, useRef, useState } from "react";
import { Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";
import EditAudience from "./EditAudience";

import chatIcon from "../../Assets/images/Icons-PNG/chat-icon.PNG";
import refreshIcon from "../../Assets/images/Icons-PNG/refresh-icon.PNG";
import heartIcon from "../../Assets/images/Icons-PNG/heart-icon.PNG";
import uploadIcon from "../../Assets/images/Icons-PNG/upload-icon.PNG";
import PollContainer from "./PollContainer";
import { UpdateTimelinePosts } from "../../store/actions/HomeActions/homeActions";
import { useDispatch, useSelector } from "react-redux";

function Post({ data }) {
  const [openStatus, setOpenStatus] = useState(false);
  const [editPost,setEditPost] = useState(false)
  const [liked, setLiked] = useState(null);
  const [showAudienceModal, setShowAudienceModal] = useState(false);
  // const {userInfo} = useSelector(state=> state.userSignin);
  // const { userData } = useSelector(state => state.userData);
 
  let { allPostLoading, allPostError, allPosts } = useSelector(
    (state) => state.allPosts
  );

  let { userData } = useSelector(
    (state) => state.userData
  );
  // console.log(userData)
  // console.log("userInfo._id",userInfo._id)
  // console.log("data._id",data.postBy)
  // const checkCuruser= userInfo._id === data.postBy
  // console.log(checkCuruser)

  let dispatch = useDispatch();

  useEffect(() => {
    setLiked(data.likedBy.includes(userData._id));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  let filterBarRef = useRef(null);
  let postContentRef = useRef(null);
    console.log(allPosts)
  let deletePost = () => {
    setOpenStatus(false);
    let updated_posts = allPosts.filter((post) => post.postId !== data.postId);
    dispatch(
      UpdateTimelinePosts([...updated_posts],)
    )
  };

  const handleAudienceModal = () => setShowAudienceModal(true);

  let handleEditPost = () => {
    setOpenStatus(false);
    if(postContentRef.current){
      postContentRef.current.contentEditable = true;
      postContentRef.current.focus(); 
      setEditPost(true)
    }
  }

  let updatePost = () => {
    setOpenStatus(false);
    if(postContentRef.current){
      postContentRef.current.contentEditable = false;
      setEditPost(false)
    }

    let updated_posts = allPosts?.map((post) => {
      if (post.postId === data.postId) {
        post.text = postContentRef.current.innerText;
      }
      return post;
    });
    dispatch(
      UpdateTimelinePosts([...updated_posts],)
    )
  }

  let sharePost = () => {
    setOpenStatus(false);
    let updated_posts = allPosts?.map((post) => {
      if (post.postId === data.postId) {
        post.sharedBy.push(userData._id);
      }
      return post;
    });
    dispatch(
      UpdateTimelinePosts([...updated_posts],)
    )
  };

  let likePost = () => {
    setOpenStatus(false);
    let updated_posts = allPosts?.map((post) => {
      if (post.postId === data.postId) {
        if(post.likedBy.includes(userData._id)){
          post.likedBy = post.likedBy.filter((user)=> user !== userData._id)
          setLiked(false)
        }
        else{
          post.likedBy.push(userData._id)
          setLiked(true)
        }
      }
      return post;
    });
    dispatch(
      UpdateTimelinePosts([...updated_posts],)
    )
  }

  let downloadMedia = () => {
      if(data.image){        
       window.open(data.image)
      }
      if(data.gif){
        window.open(data.gif)
      }
  }
  
  return (
    <div className="card-post custom-card">
          <div
            aria-controls="status-collapse"
            aria-expanded={openStatus}
            onClick={() => setOpenStatus(!openStatus)}
            className="post-options-button"
          >
            <span>
              <img
                src={require("../../Assets/images/Icons-PNG/post-actions-arrow.png")}
                alt="filter-open"
              />
            </span>
          </div>
      <div className="action_container actions" ref={filterBarRef}>
        <div className="sub-menu border-left">
        <Collapse in={openStatus}>
          <div id="status-collapse" className="sub-menu-body p-3 dropdown">
            <div onClick={handleEditPost}>Edit Post</div>
            <div>Make NFT</div>
            <div onClick={handleAudienceModal}>Edit Audience</div>
            <div>Save Post</div>
            <div onClick={deletePost}>Delete Post</div>
          </div>
        </Collapse>
        </div>
      </div>
      <div className="profile-wrapper post">
        <div className="profile-avatar-wrap">
          <div className="profile-avatar">
            <Link to={`/profile/${data.postBy}`}>
              <img width={"100%"} src={data?.ownerProfilePic} alt="profileImg" />
            </Link>
          </div>
        </div>
        <div className="profile-text">
          <div className="profile-text-wrap inline">
            <Link to={`/profile/${data.postBy}`}>
              <h4>{data?.postOwnerName}</h4>
            </Link>
            <p>
              {data.username}
              <span>{data.date}</span>
            </p>
          </div>

          <div className="post-text">
            <p ref={postContentRef}>{data?.text}</p>
          </div>
        </div>
      </div>
      {editPost ? (<button style={{float:"right"}} onClick={updatePost} className="btn btn-sm btn-primary">Save</button>):null}
      {data?.image ? (
        <div className="card-lg-img">
          <div className="img-wrap">
            <img src={data.image} alt="" />
          </div>
        </div>
      ) : null}
      {data?.gif ? (
        <div className="card-lg-img">
          <div className="img-wrap">
            <img src={data.gif} alt="" />
          </div>
        </div>
      ) : null}
      {data?.poll?.question ? (
        <PollContainer
          creatingPost={false}
          pollAnswers={data?.poll?.answers}
          pollQuestion={data?.poll?.question}
        />
      ) : null}
      <div className="icon-post-wrap">
        <ul className="icon-list">
          <li>
              <img className="cursor-pointer" src={chatIcon} alt="chatIcon" />
          </li>
          <li onClick={sharePost}>
              <img className="cursor-pointer" src={refreshIcon} alt="refreshIcon" />
              <span className="m-l-10">{data?.sharedBy?.length}</span> 
          </li>
          <li onClick={likePost} className={`like-btn-${liked ? 'active':'blank'}`}>
              <img className="cursor-pointer" src={heartIcon} alt="heartIcon" />
              <span className="m-l-10">{data?.likedBy?.length}</span> 
          </li>
          <li onClick={downloadMedia}>
              <img className="cursor-pointer" src={uploadIcon} alt="uploadIcon" />
          </li>
        </ul>
      </div>
      <EditAudience allPosts={allPosts} data={data} setShow={setShowAudienceModal} show={showAudienceModal} />
    </div>
  );
}

export default Post;
