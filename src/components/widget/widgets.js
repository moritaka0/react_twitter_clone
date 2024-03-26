import React from "react";
import { Search } from "@mui/icons-material";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed
} from "react-twitter-embed";
import "./widgets.css";

function widgets() {
  return (
    <div className="widgets">
      <div className="widgets_input">
        <Search className="widgets_searchIcon" />
        <input placeholder="キーワード検索" type="text"></input>
      </div>
      <div className="widgets_container">
        <h2>いまどうしてる</h2>
        {/*Twitter情報取得用のライブラリ追加 */}
        <TwitterTweetEmbed tweetId={"1538659212355850241"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="matsu_bouzu"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://twitter.com/Ohtani_MLB"}
          options={{ text: "#Twitter Post Practice", via: "matsu_bouzu" }}
        />
      </div>
    </div>
  );
}

export default widgets;
