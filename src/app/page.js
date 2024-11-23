import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import Link from "next/link";

export default function Home() {
  return (
    <main className="cc font-[family-name:var(--font-medium)]">
      {/* Navbar ------------------------------------------------------------------- */}
      <Navbar />

      {/* Hero Section ------------------------------------------------------------------- */}
      <section className="stagger-container pt-[40px] md:pt-[60px]">
        <div className="flex justify-between">
          <h1 className="h1 max-w-[990px] leading-[1.1] uppercase">
            An Independent <br />
            designer building <br />
            brands for <br />
            action-takers
          </h1>

          <div className="flex justify-between flex-col items-center">
            <img
              className="w-[22px] md:w-[40px]"
              src="/arrowDown.svg"
              alt="Arrow Down Icon"
            />
            <h2 className="h2 max-w-[400px]">
              I help founders launch <br /> & grow their ‘big idea’.
            </h2>
          </div>
        </div>
      </section>

      {/* Projects ------------------------------------------------------------------- */}
      <section className="stagger-container pt-[40px] md:pt-[60px]">
        <div className="grid grid-cols-2 gap-[20px] md:gap-1">
          {/* Left side images ============ */}
          <div>
            <Link href="#" className="overflow-hidden inline-block">
              <img
                src="/projects/one.jpg"
                alt="Project One"
                className="max-w-[360px] w-full"
              />
              <h3 className="h2 uppercase pt-[15px] md:pt-[30px]">
                AFAR, LONDON
              </h3>
            </Link>
            <Link
              href="#"
              className="overflow-hidden pt-[50px] md:pt-[150px] inline-block"
            >
              <img
                src="/projects/three.jpg"
                alt="Project One"
                className="max-w-[350px] w-full"
              />
              <h3 className="h2 uppercase pt-[15px] md:pt-[30px]">
                BAPS+WRAPS, DUBAI
              </h3>
            </Link>
            <Link
              href="#"
              className="overflow-hidden pt-[50px] md:pt-[150px] inline-block"
            >
              <img
                src="/projects/five.jpg"
                alt="Project One"
                className="max-w-[460px] w-full"
              />
              <h3 className="h2 uppercase pt-[15px] md:pt-[30px]">
                SEPI COFFEE, LONDON
              </h3>
            </Link>
          </div>

          {/* Right side images ============ */}
          <div className="flex flex-col items-end">
            <Link
              href="#"
              className="max-w-[430px] w-full pt-[0px] md:pt-[50px] inline-block"
            >
              <video
                loop
                autoPlay
                muted
                playsInline
                src="/projects/two.mp4"
                className="w-full h-auto"
              ></video>

              <h3 className="h2 uppercase pt-[15px] md:pt-[30px]">
                CELLO, DUBAI
              </h3>
            </Link>
            <Link href="#" className="overflow-hidden pt-[50px] inline-block">
              <img
                src="/projects/four.jpg"
                alt="Project One"
                className="max-w-[340px] w-full"
              />
              <h3 className="h2 uppercase pt-[15px] md:pt-[30px]">
                OUTSIDERS, DUBLIN
              </h3>
            </Link>
          </div>
        </div>
      </section>

      {/* Cards ------------------------------------------------------------------- */}
      <section className="stagger-container grid md:grid-cols-2 gap-[20px] py-[40px] md:py-[80px]">
        <a
          href="/files/sample.pdf"
          download
          className="text-center px-4 py-10 border-2 rounded-[30px] border-[#FF2D00] hover:bg-[#FFFBDA] duration-300"
        >
          <h2 className="h1 uppercase">
            BRAND <br />
            SERVICES
          </h2>
          <p className="p md:max-w-[320px] max-w-[250px] w-full mx-auto py-[20px]">
            Brand strategy/identity services to help first-time founders launch
            their business to the world.
          </p>
          <button className="p uppercase border-2 rounded-[30px] border-[#FF2D00] px-8 py-2">
            DOWNLOAD GUIDE
          </button>
        </a>
        <a
          href="#"
          className="text-center px-4 py-10 border-2 rounded-[30px] border-[#FF2D00] hover:bg-[#FFFBDA] duration-300"
        >
          <h2 className="h1 uppercase">
            FREELANCE
            <br />
            Support
          </h2>
          <p className="p md:max-w-[320px] max-w-[250px] w-full mx-auto py-[20px]">
            For businesses that need support with everyday design tasks on a
            weekly or monthly basis.
          </p>
          <button className="p uppercase border-2 rounded-[30px] border-[#FF2D00] px-8 py-2">
            ENQUIRY FORM
          </button>
        </a>
      </section>

      {/* INDEPENDENT ------------------------------------------------------------------- */}
      <section className="stagger-container text-center flex flex-col items-center max-w-[490px] mx-auto gap-[20px]">
        <h2 className="h1">
          INDEPENDENT <br />
          BUT NOT ALONE
        </h2>
        <img
          className="w-[22px] md:w-[40px]"
          src="/arrowDown.svg"
          alt="Arrow Down Icon"
        />
        <p className="p">
          I collaborate with other creatives if/when I need them. Curating a
          team that suits each project.
        </p>
      </section>

      {/* CTA ------------------------------------------------------------------- */}
      <section className="stagger-container py-[40px] md:py-[60px]">
        <a
          href="/"
          download
          className="stagger-container text-center px-4 py-4 md:py-6 border-2 rounded-full border-[#FF2D00] hover:bg-[#FFFBDA] duration-300 inline-block w-full"
        >
          <h2 className="h1 uppercase">BRAND PACKAGES</h2>
        </a>
      </section>

      {/* Copyright ------------------------------------------------------------------- */}
      <section className="stagger-container py-[40px] md:py-[60px] text-center">
        <p className="p uppercase">( ©2024 AARON MCCAULEY )</p>
      </section>

      {/* Footer ------------------------------------------------------------------- */}

      <Footer />
    </main>
  );
}
