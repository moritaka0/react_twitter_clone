import React, { useState } from "react";
import { Avatar, Button } from "@mui/material";
import "./tweetBox.css";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import db from "../../firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImg, setTweetImg] = useState("");

  //tweetを送る関数
  /*firebaseのデータベースにデータを追加する */
  const sendTweet = e => {
    //画面のリロードをしない
    e.preventDefault();
    addDoc(collection(db, "posts"), {
      displayName: "Reactチュートリアル",
      userName: "Moritaka",
      verified: true,
      text: tweetMessage,
      avater: "https://source.unsplash.com/random",
      image: tweetImg,
      timestamp: serverTimestamp()
    });
    setTweetMessage("");
    setTweetImg("");
  };

  //inputタグのonChangeプロパティでinputタグのイベント(e)に入った値を取得
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <Avatar />
          <input
            value={tweetMessage}
            placeholder="いまどうしてる"
            type="text"
            onChange={e => setTweetMessage(e.target.value)}
          ></input>
        </div>
        <input
          value={tweetImg}
          className="tweetBox_imageInput"
          placeholder="画像URLを入力してください"
          type="text"
          onChange={e => setTweetImg(e.target.value)}
        ></input>
        <Button
          className="tweetBox_tweetButton"
          type="submit"
          onClick={sendTweet}
        >
          ツイートする
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
