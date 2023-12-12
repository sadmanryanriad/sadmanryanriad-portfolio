import bannerImage2 from "../../../assets/technology-785742_1920.jpg";
import Container2xl from "../../mini-components/Container2xl";
import resume from "/Resume - Sadman Ryan Riad.pdf";
import { FaDownload } from "react-icons/fa";

const Banner = () => {
  return (
    <>
      <Container2xl>
        <div
          className="hero min-h-screen w-full"
          style={{
            backgroundImage: `url(${bannerImage2})`,
          }}
        >
          <div className="hero-overlay bg-opacity-40"></div>
          <div className="hero-content text-center text-base-300">
            <div className="w-full">
              <h1 className="mb-5 text-5xl font-bold">
                Hi, I am{" "}
                <span className="font-semibold text-orange-600">
                  Sadman Ryan Riad
                </span>
              </h1>
              <p className="mb-5 font-semibold md:text-xl">
                A passionate MERN stack developer, creating awesome web
                experiences.
              </p>
              <a href={resume} download="Resume - Sadman Ryan Riad.pdf">
                <button className="btn bg-orange-500 text-black btn-sm sm:btn-md border-none transform transition-transform hover:scale-105">
                  Resume <FaDownload />
                </button>
              </a>
            </div>
          </div>
        </div>
      </Container2xl>
    </>
  );
};

export default Banner;
