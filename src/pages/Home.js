import React, { useEffect, useState } from "react";
import Posts from "../components/Posts";
import axios from "axios";

function Home() {
  const [appState, setAppState] = useState({
    loading: false,
    posts: null,
  });

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setAppState({ loading: true });
      setAppState({ loading: false, posts: res.data.slice(0, 5) });
    });
  }, [setAppState]);

  return <Posts isLoading={appState.loading} posts={appState.posts} />;
}
export default Home;
