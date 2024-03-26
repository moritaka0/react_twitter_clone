import React from "react";
import { Avatar } from "@mui/material";
import {
  VerifiedUser,
  ChatBubbleOutline,
  Repeat,
  FavoriteBorder,
  PublicOffOutlined
} from "@mui/icons-material";
import "./post.css";

function post({ displayName, userName, verified, text, avater, image }) {
  return (
    <div className="post">
      <div className="post_avatar">
        <Avatar src={avater} />
      </div>
      <div className="post_body">
        <div className="post_header">
          <div class="post_header_text">
            <h3>
              {displayName}
              <span className="post_header_special">
                <VerifiedUser className="post_badge" />@{userName}
              </span>
            </h3>
          </div>
          <div className="post_header_description">
            <p>{text}</p>
          </div>
        </div>
        <img src={image} />
        <div className="post_footer">
          <ChatBubbleOutline font-size="small" />
          <Repeat font-size="small" />
          <FavoriteBorder font-size="small" />
          <PublicOffOutlined font-size="small" />
        </div>
      </div>
    </div>
  );
}

export default post;
