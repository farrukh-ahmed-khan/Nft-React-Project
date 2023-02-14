import React from 'react'
import { useSelector } from 'react-redux'

function NftComponent() {

    const userSignin = useSelector(state=>state.userSignin);

    const {userInfo} = userSignin;

    return (
        <div><div className="card-post mb-sm">
            <div className="row">
                <div className="col-12">
                    <div className="right-side-card">
                        <div className="profile-wrapper">
                            <div className="profile-avatar"></div>
                            <div className="profile-text">
                                <h4>{userInfo.name || "NO name"}</h4>
                                <p>{userInfo.name || "NO name"}</p>
                            </div>
                        </div>
                        <button className="btn btn-theme btn-post">bid</button>
                    </div>
                </div>
            </div>
        </div></div>
    )
}

export default NftComponent