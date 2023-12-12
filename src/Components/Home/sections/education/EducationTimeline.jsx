import Container2xl from "../../../mini-components/Container2xl";
import Header from "../../../mini-components/Header";

const EducationTimeline = () => {
    return (
        <div id="education" className="py-5 md:py-10">

<Container2xl>
    <Header>Education</Header>
<div className="flex mt-10 items-center justify-center px-6 md:px-60 ">
  <div className="space-y-6 border-l-2 border-dashed">
    {/* line */}
    <div  data-aos="zoom-in-up" data-aos-once className="relative w-full">
    <span className="loading loading-spinner text-orange-400 absolute -left-3"></span>
      <div className="ml-6">
        <h4 className="font-bold">B.SC. in Computer Science and Engineering (2021 - current)</h4>
        <p className="mt-2 max-w-screen-sm">Varendra University, Rajshahi <span className="font-semibold">(expected passing year june 2025)</span></p>
        <div className="badge bg-orange-400 text-white gap-2">
  studying
</div>
      </div>
    </div>
    {/* line */}
    <div data-aos="zoom-in-up" data-aos-once data-aos-duration="800" className="relative w-full">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-green-400">
        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
      </svg>
      <div className="ml-6">
        <h4 className="font-bold">HSC (2017 - 2020) </h4>
        <p className="mt-2 max-w-screen-sm">Masjid Mission Academy School and College - Rajshahi</p>
        <div className="badge badge-success text-white gap-2">
  passed
</div>
      </div>
    </div>
    {/* line */}
    <div data-aos="zoom-in-up" data-aos-once data-aos-duration="1200" className="relative w-full">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-green-400">
        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
      </svg>
      <div className="ml-6">
        <h4 className="font-bold">SSC (2015 - 2017)</h4>
        <p className="mt-2 max-w-screen-sm">SMM Police Lines School and college, Rajshahi</p>
        <div className="badge badge-success text-white gap-2">
  passed
</div>
      </div>
    </div>


  </div>
</div>
</Container2xl>


        </div>
    );
};

export default EducationTimeline;