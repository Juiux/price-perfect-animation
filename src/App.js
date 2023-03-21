import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//import animate on scroll
import Aos from "aos";
import "aos/dist/aos.css";

//import components
const App = () => {
  Aos.init();
  return <h1>Hello World</h1>;
};

export default App;
