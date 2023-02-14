import Splash from "../Views/Auth/Splash";
import Login from "../Views/Auth/Login";
import SignUp from "../Views/Auth/SignUp";
import Forgot from "../Views/Auth/Forgot";
import Dashboard from "../Views/Home/Dashboard/Dashboard";
import Messages from "../Views/Messages/Messages";
import Notification from "../Views/Notification/Notification";
import NftMarket from "../Views/NFT Market/NftMarket";
import UserFriends from "../Views/Profile/UserProfile/UserFriends";
import UserAbout from "../Views/Profile/UserProfile/UserAbout";
import UserVideos from "../Views/Profile/UserProfile/UserVideos";
import Search from "../Views/Search/Search";
import SearchPost from "../Views/Search/SearchPost";
import OwnNft from "../Views/Profile/UserProfile/UserNfts";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Explore from "../Views/Explore/Explore";
import UserPosts from "../Views/Profile/UserProfile/Posts";
import NavUserProfile from '../Views/Profile/NavUserProfile/Posts'
import UserNavAbout from '../Views/Profile/NavUserProfile/NavUserAbout'
import NavUserFriends from '../Views/Profile/NavUserProfile/NavUserFriends'
import NavUserNfts from '../Views/Profile/NavUserProfile/NavUserNfts'
import NavUserVideos from '../Views/Profile/NavUserProfile/NavUserVideos'
import ProtectedRoutes from "./auth";

export default function Navigation() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/explore/:page_id" element={<Explore />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/nftmarket" element={<NftMarket />} />
          <Route path="/profile" element={<UserPosts />}/>
          <Route path="/profile/friends" element={<UserFriends />} />
          <Route path="/profile/about" element={<UserAbout />} />
          <Route path="/profile/videos" element={<UserVideos />} />
          <Route path="/profile/ownnft" element={<OwnNft />} />
          
          <Route path="/profile/:id" element={<NavUserProfile />} />
          <Route path="/profile/:id/about" element={<UserNavAbout/>} />
          <Route path="/profile/:id/friends" element={<NavUserFriends />} />
          <Route path="/profile/:id/videos" element={<NavUserVideos />} />
          <Route path="/profile/:id/ownnft" element={<NavUserNfts />} />

          <Route path="/search" element={<Search />} />
          <Route path="/searchpost" element={<SearchPost />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Route>
      </Routes>
    </Router>
  );
}
