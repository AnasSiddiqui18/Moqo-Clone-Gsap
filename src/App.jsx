import { gsap } from "gsap";
import { useEffect, useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const compRef = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          pin: true,
          trigger: ".page1",
          scrub: 1,
          end: "+=4000px",
        },
      });

      tl.to(".main-title", {
        translateX: "-140%",
        duration: 1.5,
        ease: "none",
        fontWeight: 100,
      })
        .to(".box", { translateY: 0, ease: "none" }, 1)
        .to(".nested-box", { clipPath: `inset(0%)`, ease: "none" });
    }, compRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={compRef}>
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
        <h1 className="main-title">We build brands</h1>
        <div className="box">
          <video
            muted
            autoPlay
            className="nested-box"
            src="/video/show_case.mp4"
          ></video>
        </div>
      </div>
      <div className="page2">{/* Content for page 2 */}</div>
      <div className="page3">{/* Content for page 3 */}</div>
    </div>
  );
};

export default App;
