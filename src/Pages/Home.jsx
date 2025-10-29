import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function Home() {
  const [muted, setMuted] = useState(true);
  const toggleMute = () => setMuted(!muted);

  // Set up the state and effect for determining mobile view and handling video size/logo size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Defined custom animation for the logo scroller using a Tailwind JIT arbitrary value.
  // This requires the 'scroll' keyframes to be defined in your global CSS or tailwind.config.js:
  // @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
  // The animation duration is set to 30s as per the new requirement.

  const steps = [
    { number: 1, title: 'Sign Up', description: 'Students and volunteers create accounts with TEAch using their email or social login. It only takes a few minutes.', icon: '👤' },
    { number: 2, title: 'Connect', description: 'Students are matched with volunteer tutors based on subject, grade, and availability.', icon: '🔗' },
    { number: 3, title: 'Learn', description: 'Tutors provide live online classes and support students with homework, revision, and guidance with just 2 hours a week.', icon: '📚' },
    { number: 4, title: 'Grow', description: 'Students gain confidence, improve grades, and open doors to new educational opportunities.', icon: '🚀' },
  ];

  const logos = [
    { src: "/brands/santander.png", name: "Santander" },
    { src: "/brands/sussex.png", name: "University of Sussex" },
    { src: "/brands/world_vision_lanka.jpg", name: "World Vision Lanka" },
  ];
  // Duplicated enough times (4x) to ensure continuous scrolling
  const repeatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    // Replaced .container with Tailwind classes

    <div className="text-center pt-[60px] w-full max-w-full overflow-x-hidden relative font-montserrat">
      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center bg-[#f5f3f3] relative w-full z-10 py-10 md:py-12">
        <section className="flex flex-col md:flex-row items-center justify-around w-full mx-auto px-4 gap-8">
          {/* Left child */}
          <div className="flex flex-col items-center md:items-center text-center md:text-left flex-[0_0_45%]">
            <h2 className="font-bold text-[#111] text-4xl md:text-4xl lg:text-5xl md:w-[75%] leading-tight">
              Empowering Communities Through Education
            </h2>
            <p className="mt-3 text-base md:text-lg md:w-[75%]">
              Because every child deserves the chance to learn and dream
            </p>
          </div>

          {/* Right child */}
          <div className="flex justify-center items-center flex-[0_0_45%] p-2">
            <img
              src="/hero_image.png"
              alt="TEAch Volunteers"
              className="object-contain rounded-xl w-full md:w-[70%] h-auto"
            />
          </div>
        </section>
        <div className="mt-[30px]">
          <Link
            to="/volunteer"
            className="inline-block font-poiret font-semibold rounded-lg border-2 border-[#f67c33] text-[#ff6600] bg-transparent hover:bg-[#f67c33] hover:text-white transition-all duration-300 ease-in-out text-lg md:text-xl px-7 md:px-[30px] py-[10px] md:py-3 cursor-pointer">
            Become a Volunteer
          </Link>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-[50px] px-5 max-w-[1000px] mx-auto relative z-10 w-full box-border">
        <h2 className="text-[2.3rem] font-extrabold text-[#eb7630] mb-5 px-[10px]">✨ Who We Are</h2>
        <div className="bg-[#ffe6d1] rounded-xl p-[25px] mx-2.5 md:mx-[10px] box-border">
          <p className="font-semibold text-[#222] text-base md:text-lg leading-relaxed md:leading-[1.9]">
            Many tea estate families in Sri Lanka still face poverty, with children often leaving school too early. <br />
            <span className="text-[#eb7630] font-extrabold">TEAch Volunteers</span> was founded to change that. We connect dedicated volunteers with children who cannot afford private tutoring, offering them the
            <span className="text-[#eb7630] font-extrabold"> support</span>,
            <span className="text-[#eb7630] font-extrabold"> confidence</span>, and
            <span className="text-[#eb7630] font-extrabold"> hope</span> to succeed. <br />
            Our mission: every child deserves the chance to
            <span className="text-[#eb7630] font-extrabold"> learn</span>,
            <span className="text-[#eb7630] font-extrabold"> grow</span>, and
            <span className="text-[#eb7630] font-extrabold"> dream of a brighter future</span>.
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-7 md:py-[30px] px-2.5 relative z-10 w-full box-border">
        <h2 className="mb-5 text-[#eb7630] px-4 md:px-[15px] text-2xl md:text-3xl">See Us In Action 🎥</h2>
        <div className="relative inline-block w-[90%] max-w-[700px] z-10 box-border">
          <video
            className="w-full rounded-xl shadow-xl max-w-full"
            autoPlay
            loop
            muted={muted}
            src={"/videos/new_teach.mp4"}
          />
          <button
            className="absolute bottom-2.5 right-2.5 bg-[#eb7630] border-none px-4 py-2 text-white font-bold rounded-lg cursor-pointer transition-colors duration-300 hover:bg-[#ff8a4c]"
            onClick={toggleMute}
          >
            {muted ? 'Unmute 🔊' : 'Mute 🔇'}
          </button>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-[50px] px-5 relative z-10">
        <h2 className="mb-5 text-[#eb7630] px-4 md:px-[15px] text-2xl md:text-3xl">How It Works</h2>
        <div className="flex flex-col md:flex-row gap-5 flex-wrap justify-center items-stretch max-w-[1200px] mx-auto">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col items-center rounded-xl bg-gradient-to-br from-[#ffa366] to-[#eb7630] text-white shadow-md flex-1 p-5 md:p-6 mb-4 md:mb-0 min-w-[200px] max-w-[280px]"
            >
              <div className="text-4xl mb-2.5">{step.icon}</div>
              <div className="flex-1 flex flex-col items-center">
                <div className="font-extrabold text-lg">Step {step.number}</div>
                <h3 className="font-bold my-1 text-lg">{step.title}</h3>
                <p className="text-white text-base mt-auto">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recognition Section - Now uses 30s scroll animation and .logo-scroller/.logo-track logic */}
      <section className="py-[50px] px-5 bg-[#fff7f2] relative z-10 w-full box-border">
        <h2 className="mb-5 text-[#eb7630] px-4 md:px-[15px] text-2xl md:text-3xl">🌟 TEAch Has Been Recognized By</h2>
        {/* Equivalent of .logo-scroller: overflow-hidden w-full max-w-full */}
        <div className="overflow-hidden w-full max-w-full">
          {/* Equivalent of .logo-track: animate-[scroll_30s_linear_infinite], flex flex-nowrap, [width:200%] (for max-content + seamless loop) */}
          <div className="flex flex-nowrap animate-[scroll_30s_linear_infinite] box-border [width:200%] hover:pause">
            {repeatedLogos.map((logo, i) => (
              <div key={i} className="flex-none mx-5 text-center w-[calc(100%/12)]">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="object-contain h-[50px] md:h-20 max-w-full"
                />
                <p className="mt-1.5 text-sm text-[#333]">{logo.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Volunteer Section */}
      <section className="py-[60px] px-5 bg-gradient-to-br from-[#ffdab3] via-[#ffa366] to-[#eb7630] text-white relative z-10 w-full box-border">
        <h2 className="font-extrabold mb-5 px-2.5 text-3xl md:text-4xl">✨ Join Us Now – Change Young Lives Forever ✨</h2>
        <p className="mb-6 font-semibold px-2.5 text-lg md:text-xl">
          Give just <span className="font-extrabold">2 hours a week</span> and help empower the next generation to dream, learn, and achieve.
        </p>
        <Link
          to="/volunteer"
          className="inline-block font-extrabold rounded-lg text-white bg-[#ff6600] hover:bg-[#e65a00] transition-colors duration-300 text-lg md:text-xl px-7 md:px-[30px] py-[10px] md:py-3"
        >
          Become a Volunteer
        </Link>
      </section>
    </div>
  );
}

export default Home;