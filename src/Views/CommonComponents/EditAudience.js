import { Modal, Button , Dropdown } from "react-bootstrap";
import {useDispatch} from "react-redux"
import { UpdateTimelinePosts } from "../../store/actions/HomeActions/homeActions";

export default function EditAudience({ setShow, show, data,allPosts }) {
  const handleClose = () => setShow(false);

  let dispatch = useDispatch();

  let updateAudience = (aud_type) => {
    let updated_posts = allPosts?.map(post=>{
      if (post.postId === data.postId) {
        post.audience = aud_type
      }
      return post;
    })
    dispatch(
      UpdateTimelinePosts([...updated_posts],)
    )
  }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Change Audience</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
              {data?.audience.toUpperCase()}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={()=>updateAudience("PUBLIC")}>PUBLIC</Dropdown.Item>
              <Dropdown.Item onClick={()=>updateAudience("PRIVATE")}>PRIVATE</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Modal.Body>
      </Modal>
    </>
  );
}
