import "./sidebar.css";
import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import SidebarOption from "./sidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ListIcon from "@mui/icons-material/List";
import PersonIcon from "@mui/icons-material/Person";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import { Button } from "@mui/material";

function Sidebar() {
  return (
    <div className="sidebar">
      {/* ツイッターアイコン*/}
      <TwitterIcon className="sidebar_twitterIcon" />
      {/* sidebar option*/}
      <SidebarOption text="ホーム" Icon={HomeIcon} />
      <SidebarOption text="話題を検索" Icon={SearchIcon} />
      <SidebarOption text="通知" Icon={NotificationsIcon} />
      <SidebarOption text="メッセージ" Icon={MailIcon} />
      <SidebarOption text="ブックマーク" Icon={BookmarkIcon} />
      <SidebarOption text="リスト" Icon={ListIcon} />
      <SidebarOption text="プロフィール" Icon={PersonIcon} />
      <SidebarOption text="もっと見る" Icon={ReadMoreIcon} />
      {/* ツイートボタン*/}
      <Button variant="outlined" className="sidebar_tweet" fullWidth>
        ツイートする
      </Button>
    </div>
  );
}
export default Sidebar;
