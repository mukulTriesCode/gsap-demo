import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

gsap.registerPlugin(useGSAP);
const Banner = () => {
  const container = useRef();
  useGSAP(
    () => {
      const timeline = gsap.timeline({
      });
      const boxAnimation = {
        x: 200,
        y: 200,
        scale: 0.5,
        rotation: 90,
        autoAlpha: 0,
        ease: "power2",
      };
      timeline
        .from(".box-1", boxAnimation)
        .from(".box-2", { ...boxAnimation, x: -200 })
        .from(".box-3", { ...boxAnimation, y: -200 })
        .from(".box-4", { ...boxAnimation, x: -200, y: -200 });
    },
    { scope: container }
  );

  return (
    <div
      className="bg-gray-400 h-screen flex justify-center items-center"
      ref={container}
    >
      <div className="grid grid-cols-2 w-fit gap-5">
        <div className="box box-1 h-[280px] w-[280px] bg-white rounded-3xl"></div>
        <div className="box box-2 h-[280px] w-[280px] bg-white rounded-3xl"></div>
        <div className="box box-3 h-[280px] w-[280px] bg-white rounded-3xl"></div>
        <div className="box box-4 h-[280px] w-[280px] bg-white rounded-3xl"></div>
      </div>
    </div>
  );
};

export default Banner;
