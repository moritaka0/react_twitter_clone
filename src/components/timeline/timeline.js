import React, { useState, useEffect } from "react";
import "./timeline.css";
import TweetBox from "./tweetBox";
import Post from "./post";
import db from "../../firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

function TimeLine() {
  //useStateを使ってFirebaseの値を取得する、postsの初期値には空の配列をセット
  const [posts, setPosts] = useState([]);

  //useEffectの第二引数を[]にすることで画面ロード時にだけpostデータを読み込むようにする
  useEffect(() => {
    //Firebaseから値を取得する,
    const postData = collection(db, "posts");
    //firebaseのqueryメソッドを使ってタイムスタンプ順にOrderBYする
    const q = query(postData, orderBy("timestamp", "desc"));
    /*リアルタイムでデータを取得 */
    onSnapshot(q, querySnapshot => {
      //setPosts関数でpostsの中にデータをいれる
      setPosts(querySnapshot.docs.map(doc => doc.data()));
    });
  }, []);

  return (
    <div className="timeline">
      {/*Header */}
      <div className="timeline_header">
        <h2>ホーム</h2>
      </div>

      {/*TweetBox */}
      <TweetBox />
      {/*Post */}
      {posts.map(post => (
        <Post
          displayName={post.displayName}
          userName={post.userName}
          verified={post.verified}
          text={post.text}
          avater={post.avater}
          image={post.image}
        />
      ))}
    </div>
  );
}

export default TimeLine;
