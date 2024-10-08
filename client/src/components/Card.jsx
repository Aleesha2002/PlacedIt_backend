import React from "react";
import { Link } from "react-router-dom";
import { FiClock, FiDollarSign, FiMapPin, FiCalendar } from "react-icons/fi";
import { MdCurrencyRupee } from "react-icons/md";

const Card = ({ data }) => {
  const {
    _id,
    companyName,
    jobTitle,
    companyLogo,
    minPrice,
    maxPrice,
    salaryType,
    jobLocation,
    postingDate,
    experienceLevel,
    employmentType,
    description,
    jobUrl,
  } = data;

  return (
    <section className="card">
      *
      <Link
        to="#"
        onClick={(e) => {
          e.preventDefault();
          window.open(jobUrl, "_blank", "noopener,noreferrer");
        }}
        className="flex gap-4 flex-col sm:flex-row items-start"
      >
        {/* <Link
        to={`${jobUrl}`}
        className="flex gap-4 flex-col sm:flex-row items-start "
      > */}
        <img src={companyLogo} alt="" className="w-20 h-20 rounded-sm" />
        <div className="">
          <h4 className="text-primary mb-1">{companyName} </h4>
          <h3 className="text-lg font-semibold mb-2">{jobTitle}</h3>

          <div className="text-primary/70 text-base flex flex-wrap gap-2 mb-2 ">
            <span className="flex items-center gap-2">
              <FiMapPin />
              {jobLocation}{" "}
            </span>
            <span className="flex items-center gap-2">
              <FiClock />
              {employmentType}{" "}
            </span>
            <span className="flex items-center gap-2">
              <MdCurrencyRupee />
              {minPrice} - {maxPrice}{" "}
            </span>
            <span className="flex items-center gap-2">
              <FiCalendar />
              {postingDate}{" "}
            </span>
          </div>

          <p className="text-base text-primary/70">{description}</p>
        </div>
      </Link>
    </section>
  );
};

export default Card;
