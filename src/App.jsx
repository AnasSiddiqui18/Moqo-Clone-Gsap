import { gsap } from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useEffect(() => {
    const textAnimation = gsap.to(".page1 h1", {
      transform: "translateX(-100%)",
      fontWeight: 100,
      scrollTrigger: {
        trigger: ".page1",
        scroller: "body",
        scrub: 3,
        top: "top 0",
        end: "top -200%",
        pin: true,
      },
    });

    const boxAnimation = gsap.fromTo(
      ".box img",
      {
        opacity: 0,
        y: "0",
        rotate: "0",
      },
      {
        y: "-800",
        rotate: "-360deg",
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".box", // Add a box-trigger element
          scroller: "body",
          scrub: 3,
          markers: true,
          start: "top 30%", // Adjust this value to control when the box appears
          end: "top 50%", // Adjust this value to control when the box stops appearing
        },
      }
    );

    return () => {
      textAnimation.kill();
      boxAnimation.kill();
    };
  }, []);

  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <h1>MOQO™</h1>
          </div>
          <ul>
            <li>Work</li>
            <li>Contact</li>
            <li>Menu</li>
          </ul>
        </nav>
      </header>
      <div className="page1">
        <h1>We build brands</h1>
        <div className="box">
          <img src="./public/img/banana.png" alt="" />
        </div>
      </div>
      <div className="page2"></div>
      <div className="page3"></div>
    </>
  );
};

export default App;
