/* eslint-disable react/prop-types */

import { FaExternalLinkAlt } from "react-icons/fa"
import { FaGithub } from "react-icons/fa";
const SingleCard = ({
    image,
    CardDescription,
    CardTitle,
    githubLink,
    liveLink
  }) => {
    return (
      <div data-aos="zoom-in-up" data-aos-once className="p-5">
        <div className="border overflow-hidden rounded-lg shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3">
          <img src={image} alt="" className="w-full" />
          <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
            <h3 className="mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]">
                {CardTitle}
            </h3>
            <p className="mb-7 text-base leading-relaxed text-body-color dark:text-dark-6">
              {CardDescription}
            </p>
            {/* button  */}
              <a href={githubLink ? githubLink : ""} target="blank">
              <button className="btn btn-active btn-neutral mr-3 hover:bg-gray-200 hover:text-gray-700 transform transition-transform hover:scale-105">GitHub<FaGithub className="text-xl"></FaGithub></button>
              </a>
              <a href={liveLink ? liveLink : ""} target="blank">
              <button className="btn bg-orange-400 border-none transform transition-transform hover:scale-105">Live<FaExternalLinkAlt className=""></FaExternalLinkAlt></button>
              </a>
          </div>
        </div>
      </div>
    );
  };

  export default SingleCard;