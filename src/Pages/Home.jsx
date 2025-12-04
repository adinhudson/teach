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
    { src: "/brands/sussex.png", name: "Sussex Innovation" },
    { src: "/brands/world_vision_lanka.jpg", name: "World Vision Lanka" },
  ];
  // Duplicated enough times (4x) to ensure continuous scrolling
  const repeatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
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
      <section className="py-16 px-6 md:px-12 relative z-10 w-full box-border bg-white font-montserrat">
        <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-black mb-12 text-center">Who We Are</h1>
        
        {/* First Row: Video and Introduction */}
        <div className="flex flex-col lg:flex-row justify-center items-start gap-8 max-w-[1200px] mx-auto mb-12">
          {/* Video */}
          <div className="flex justify-center items-start w-full lg:w-[50%]">
            <div className="relative w-full max-w-[600px]">
              <video
                className="w-full rounded-xl shadow-xl"
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
          </div>

          {/* Introduction Text */}
          <div className="w-full lg:w-[50%]">
            <div className="p-4 md:p-6">
              <p className="font-normal text-black text-base md:text-lg leading-relaxed md:leading-[1.8] mb-6">
                TEAch is an initiative dedicated to bridging educational gaps by connecting volunteer tutors with students in Sri Lanka's plantation communities who cannot afford private tutoring. Our mission is to ensure that every child has access to quality learning support.
              </p>
              <p className="font-normal text-black text-base md:text-lg leading-relaxed md:leading-[1.8]">
                We currently work with students preparing for their GCE O/L examinations, focusing on core subjects to strengthen their academic foundation.
              </p>
            </div>
          </div>
        </div>
        
        {/* Second Row: What We Do and Our Volunteers */}
        <div className="flex flex-col lg:flex-row justify-center items-start gap-8 max-w-[1200px] mx-auto">
          {/* What We Do */}
          <div className="w-full lg:w-[50%] p-4 md:p-6">
            <h3 className="font-bold text-2xl md:text-3xl text-black mb-6">What We Do</h3>
            
            <div className="mb-6">
              <h4 className="font-semibold text-lg md:text-xl text-black mb-2">1. Free Live Afternoon Classes</h4>
              <p className="font-normal text-black text-base md:text-lg leading-relaxed md:leading-[1.8]">
                We provide live online tutoring sessions in Mathematics, English, and Science, ensuring students receive consistent support after school.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg md:text-xl text-black mb-2">2. One-to-One Academic Support</h4>
              <p className="font-normal text-black text-base md:text-lg leading-relaxed md:leading-[1.8]">
                Through our mobile app, students who need additional help are matched with screened volunteer tutors for personalised one-to-one guidance.
              </p>
            </div>
          </div>
          
          {/* Our Volunteers */}
          <div className="w-full lg:w-[50%] p-4 md:p-6">
            <h3 className="font-bold text-2xl md:text-3xl text-black mb-6">Our Volunteers</h3>
            <p className="font-normal text-black text-base md:text-lg leading-relaxed md:leading-[1.8]">
              All TEAch volunteers are qualified at degree level or above in the subjects they teach. Each volunteer also completes a formal interview and comprehensive background checks before joining our platform. This process ensures that every student receives safe, reliable, and high-quality educational support.
            </p>
          </div>
        </div>
      </section>

      {/* See Us In Action Section */}
      <section className="bg-[#f5f3f3] py-12 md:py-16 px-5 relative z-10 w-full box-border font-nunito">
        <h1 className="mb-8 text-black px-4 md:px-8 text-3xl md:text-4xl lg:text-5xl font-semibold md:font-bold">See Us In Action</h1>
        
        {/* Picture Gallery */}
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          <div className="bg-white rounded-xl shadow-md overflow-hidden aspect-[4/3]">
            <img 
              src="/Class1.jpeg" 
              alt="TEAch Volunteers in Action" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-white rounded-xl shadow-md overflow-hidden aspect-[4/3]">
            <img 
              src="/Class2.jpeg" 
              alt="TEAch Volunteers in Action" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-white rounded-xl shadow-md overflow-hidden aspect-[4/3]">
            <img 
              src="/Class3.jpeg" 
              alt="TEAch Volunteers in Action" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-white rounded-xl shadow-md overflow-hidden aspect-[4/3]">
            <img 
              src="/Class4.jpeg" 
              alt="TEAch Volunteers in Action" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-white rounded-xl shadow-md overflow-hidden aspect-[4/3]">
            <img 
              src="/Class5.jpeg" 
              alt="TEAch Volunteers in Action" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-white rounded-xl shadow-md overflow-hidden aspect-[4/3]">
            <img 
              src="/Class6.jpeg" 
              alt="TEAch Volunteers in Action" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mobile App Download Section */}
      <section className="bg-white py-16 md:py-20 px-5 relative z-10 w-full box-border">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Side - Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-black mb-6">
                Get the TEAch App
              </h2>
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                Download the TEAch mobile app for seamless learning experiences. Available for both iOS and Android devices.
              </p>
              
              {/* App Store Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                {/* App Store Button */}
                <a 
                  href="https://apps.apple.com/us/app/teach-lk/id6743069957"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-black text-white rounded-xl px-6 py-3 hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <svg className="w-8 h-8 mr-3" viewBox="0 0 384 512" fill="currentColor">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-xl font-semibold">App Store</div>
                  </div>
                </a>
                
                {/* Google Play Button */}
                <a 
                  href="https://play.google.com/store/apps/details?id=com.teachapp.teachapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-black text-white rounded-xl px-6 py-3 hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <svg className="w-8 h-8 mr-3" viewBox="0 0 512 512" fill="currentColor">
                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">GET IT ON</div>
                    <div className="text-xl font-semibold">Google Play</div>
                  </div>
                </a>
              </div>
            </div>
            
            {/* Right Side - Phone Mockup/Image */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative">
                {/* Phone Screenshot */}
                <div className="w-[280px] md:w-[320px] rounded-[3rem] shadow-2xl transform hover:scale-105 transition-transform duration-300 overflow-hidden">
                  <img 
                    src="/TeachAppFirstScreen.jpeg" 
                    alt="TEAch Mobile App" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#ffa366] rounded-full opacity-50 blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#eb7630] rounded-full opacity-50 blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-12 px-5 relative z-10">
        <h2 className="m-8 text-black px-4 md:px-8 lg:px-12 text-3xl md:text-4xl lg:text-5xl font-semibold md:font-bold ">How It Works</h2>
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
        <h2 className="mb-8 text-[#eb7630] px-4 md:px-[15px] text-2xl md:text-3xl text-center">🌟 TEAch Has Been Recognized By</h2>
        {/* Equivalent of .logo-scroller: overflow-hidden w-full max-w-full */}
        <div className="overflow-hidden w-full max-w-full">
          {/* Equivalent of .logo-track: animate-[scroll_30s_linear_infinite], flex flex-nowrap, [width:200%] (for max-content + seamless loop) */}
          <div className="flex flex-nowrap animate-[scroll_30s_linear_infinite] box-border [width:200%] hover:pause items-center">
            {repeatedLogos.map((logo, i) => (
              <div key={i} className="flex-none mx-5 text-center w-[calc(100%/12)] flex flex-col items-center justify-center">
                <div className="h-[60px] md:h-24 flex items-center justify-center mb-2">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="object-contain max-h-full max-w-full"
                  />
                </div>
                <p className="mt-2 text-xs md:text-sm text-[#333] font-medium">{logo.name}</p>
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