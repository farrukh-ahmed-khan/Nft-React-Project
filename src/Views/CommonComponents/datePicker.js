import React, { useRef, useState } from 'react';
import DatePicker from 'react-date-picker';
import calenderIcon from "../../Assets/images/Icons-PNG/calender-icon.PNG";
import { Overlay, Popover } from 'react-bootstrap'

export default function DatePick({calenderValue,setCalenderValue}) {
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const calRef = useRef(null);
    const openCalender = (event) => {
        setShow(!show);
        setTarget(event.target);
    };
    
    return (
        <>
            <li ref={calRef} style={{cursor:'pointer'}}>
                <span onClick={openCalender}>
                    <img src={calenderIcon} alt="calenderIcon" />
                </span>
                <Overlay
                    show={show}
                    target={target}
                    placement="bottom"
                    container={calRef}
                    containerPadding={20}
                >
                    <Popover id="popover-contained">
                        <Popover.Body>
                            <DatePicker onChange={setCalenderValue} value={calenderValue} />
                        </Popover.Body>
                    </Popover>
                </Overlay>
            </li>
        </>
    );
}