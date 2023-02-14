import React, { useRef, useState } from 'react';
import Picker, { SKIN_TONE_MEDIUM_DARK } from 'emoji-picker-react';
import { Overlay, Popover } from 'react-bootstrap';
import emojiIcon from "../../Assets/images/Icons-PNG/emoji-icon.PNG";

const EmojiPicker = ({setChoosenEmoji,variant}) => {
    // const [chosenEmoji, setChosenEmoji] = useState([]);
    const onEmojiClick = (event, emojiObject) => {
        setChoosenEmoji(emojiObject.emoji);
    }

    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const emojRef = useRef(null);
    const openCalender = (event) => {
        setShow(!show);
        setTarget(event.target);
    };
    
    return (
        <>
            <li ref={emojRef} style={{ cursor: 'pointer' }}>
                <span onClick={openCalender}>
                    <img src={emojiIcon} alt="emojiIcon" />
                </span>
                <Overlay
                    show={show}
                    target={target}
                    placement={variant}
                    container={emojRef}
                    containerPadding={20}
                >
                    <Popover id="popover-contained">
                        <Popover.Body>
                            <div>
                                <Picker
                                    onEmojiClick={onEmojiClick}
                                    disableAutoFocus={true}
                                    skinTone={SKIN_TONE_MEDIUM_DARK}
                                    groupNames={{ smileys_people: 'PEOPLE' }}
                                    native
                                    style={{ innerWidth: 'auto' }}
                                    pickerStyle={{ width: '100%' }}
                                />
                            </div>
                        </Popover.Body>
                    </Popover>
                </Overlay>
            </li>
        </>
    );
};

export default EmojiPicker;
