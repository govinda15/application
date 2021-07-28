import React, { useState } from "react";

import Login from "./Login";
import PicPage from "./PicPage";

const Landing = () => {
  const [isLogin, setIsLogin] = useState(false);
  // set this state true if login to show pic page

  if (isLogin) {
    return <PicPage />;
  } else {
    return <Login />;
  }
};

export default Landing;
