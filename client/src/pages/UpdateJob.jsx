import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";

const UpdateJob = () => {
  const { id } = useParams();
  console.log(id);
  const {
    _id,
    jobTitle,
    companyName,
    minPrice,
    maxPrice,
    salaryType,
    jobLocation,
    postingDate,
    experienceLevel,
    companyLogo,
    employmentType,
    description,
    postedBy,
    skills,
  } = useLoaderData();

  const [selectedOptions, setSelectedOptions] = useState(null);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.skills = selectedOptions;
    console.log(data);
    // fetch(`http://localhost:5000/update-job/:id/${id}`, {
    // https://placedit-offcampus.onrender.com/
    // fetch(`https://placed-it-offcampus-backend.vercel.app/update-job/:id/${id}`, {
    fetch(`https://placedit-offcampus.onrender.com/update-job/:id/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.acknowledged === true) {
          alert("Job updated Successfully!!!");
        }
        reset();
      });
  };

  const options = [
    { value: "JavaScript", label: "JavaScript" },
    { value: "C++", label: "C++" },
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "ReactJs", label: "ReactJs" },
    { value: "NodeJs", label: "NodeJs" },
    { value: "ExpressJs", label: "ExpressJs" },
    { value: "MongoDB", label: "MongoDB" },
    { value: "Redux", label: "Redux" },
    { value: "Machine Learning", label: "Machine Learning" },
    { value: "Blockchain", label: "Blockchain" },
    { value: "Python", label: "Python" },
    { value: "Solodity", label: "Solodity" },
  ];

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 ">
      {/** form */}
      <div className="bg-[#FAFAFA] py-10 px-4 lg:px-16">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/** 1st row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label htmlFor="" className="block mb-2 text-lg ">
                Job Title
              </label>
              <input
                type="text"
                defaultValue={jobTitle}
                {...register("jobTitle")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label htmlFor="" className="block mb-2 text-lg ">
                Company Name
              </label>
              <input
                type="text"
                placeholder="Ex: Microsoft"
                defaultValue={companyName}
                {...register("companyName")}
                className="create-job-input"
              />
            </div>
          </div>

          {/** 2nd row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label htmlFor="" className="block mb-2 text-lg ">
                Minimum Salary
              </label>
              <input
                type="text"
                placeholder="20k"
                defaultValue={minPrice}
                {...register("minPrice")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label htmlFor="" className="block mb-2 text-lg ">
                Maximum Salary
              </label>
              <input
                type="text"
                placeholder="120k"
                defaultValue={maxPrice}
                {...register("maxPrice")}
                className="create-job-input"
              />
            </div>
          </div>

          {/** 3rd row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label htmlFor="" className="block mb-2 text-lg ">
                Salary Type
              </label>
              <select {...register("salaryType")} className="create-job-input">
                <option value={salaryType}>{salaryType} </option>
                <option value="Hourly">Hourly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>
            <div className="lg:w-1/2 w-full">
              <label htmlFor="" className="block mb-2 text-lg ">
                Job Location
              </label>
              <input
                type="text"
                placeholder="Ex: New York"
                defaultValue={jobLocation}
                {...register("jobLocation")}
                className="create-job-input"
              />
            </div>
          </div>

          {/** 4th row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label htmlFor="" className="block mb-2 text-lg ">
                Job Posting Date
              </label>
              <input
                type="date"
                placeholder="Ex:2023-12-09"
                defaultValue={postingDate}
                {...register("postingDate")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label htmlFor="" className="block mb-2 text-lg ">
                Experience Level
              </label>
              <select
                {...register("experienceLevel")}
                className="create-job-input"
              >
                <option value={experienceLevel}>{experienceLevel} </option>
                <option value="NoExperience">No Experience</option>
                <option value="Internship">Internship</option>
                <option value="Work remotely">Work remotely</option>
              </select>
            </div>
          </div>

          {/** 5th row */}
          <div>
            <label className="block mb-2 text-lg">Required skills set</label>
            <CreatableSelect
              defaultValue={skills}
              onChange={setSelectedOptions}
              options={options}
              isMulti
              className="create-job-input py-4"
            />
          </div>

          {/** 6th row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label htmlFor="" className="block mb-2 text-lg ">
                Company Logo
              </label>
              <input
                type="url"
                placeholder="Company logo url: https://weshare.com/img1"
                defaultValue={companyLogo}
                {...register("companyLogo")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label htmlFor="" className="block mb-2 text-lg ">
                Employment Type
              </label>
              <select
                {...register("employmentType")}
                className="create-job-input"
              >
                <option value={employmentType} className="text-slate-400">
                  {employmentType}
                </option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Temporary">Temporary</option>
              </select>
            </div>
          </div>

          {/** 7th row */}
          <div className="w-full">
            <label className="block mb-2 text-lg">Job Description</label>
            <textarea
              className="w-full pl-3 py-1.5 focus:outline-none  "
              rows={6}
              placeholder="Job Description"
              defaultValue={description}
              {...register("description")}
            />
          </div>

          {/** last row */}
          <div className="w-full">
            <label className="block mb-2 text-lg">Job Posted By</label>
            <input
              type="email"
              defaultValue="tnp@iiitm.ac.in"
              {...register("postedBy")}
              className="create-job-input"
            />
          </div>

          <input
            type="submit"
            className="block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateJob;
