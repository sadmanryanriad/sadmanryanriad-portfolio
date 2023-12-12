import Banner from "../Home/sections/Banner";
import AboutMe from "../Home/sections/aboutMe/AboutMe";
import useScrollToTop from "../../Hooks/useScrollToTop";
import { BsArrowUpCircle } from "react-icons/bs";
import Footer from "../shared/Footer";
import MySkills from "../Home/sections/skills/MySkills";
import ContactSection from "../Home/sections/contacts/ContactSection";
import EducationTimeline from "../Home/sections/education/EducationTimeline";

const Home = () => {
  const { isScrollVisible, scrollToTop } = useScrollToTop(200);

  return (
    <>
      <Banner></Banner>
      <AboutMe></AboutMe>
      <MySkills></MySkills>
      <EducationTimeline></EducationTimeline>
      <ContactSection></ContactSection>
      <Footer></Footer>

      {/* Render the scroll-to-top button when showScrollButton is true */}
      {isScrollVisible && (
        <button
          className="fixed bottom-10 right-10 border bg-black dark:text-black text-white dark:bg-white text-3xl md:text-4xl rounded-full cursor-pointer"
          onClick={scrollToTop}
        >
          <BsArrowUpCircle></BsArrowUpCircle>
        </button>
      )}
    </>
  );
};

export default Home;
