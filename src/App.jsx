import { gsap } from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useEffect(() => {
    const animation = gsap.to(".page1 h1", {
      transform: "translateX(-100%)",
      fontWeight: 100,

      scrollTrigger: {
        trigger: ".page1",
        scroller: "body",
        scrub: 3,
        pin: true,
      },
    });

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <>
      <div className="page1">
        <h1>We build brands</h1>
      </div>
      <div className="page2"></div>
      <div className="page3"></div>
    </>
  );
};

export default App;
