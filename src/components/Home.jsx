import React, { useState } from "react";
import Avatar from "../images/avatar.png";

const NAV_LINK_CLASSES = "hover:text-zinc-300";
const DONATE_BUTTON_CLASSES =
  "bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition-colors";
const READ_MORE_BUTTON_CLASSES =
  "bg-purple-700 hover:bg-purple-800 text-white mt-8 px-6 py-3 rounded";

const Home = () => {
  const [activeTab, setActiveTab] = useState("Certifications");
  const tabs = ["Certifications", "Publications", "Research", "Projects"];

  const scrollUp = () => {
    // Get the current scroll position
    const currentScrollY = window.scrollY;

    // Calculate the new scroll position by subtracting 70vh from the current scroll position
    const newScrollY = currentScrollY + 0.8 * window.innerHeight;

    // Scroll to the new position
    window.scrollTo({
      top: newScrollY,
      behavior: "smooth",
    });
  };

  const projects = [
    {
      project:
        "Multiple Logistic Regression Model For Predicting Heart Disease Using Machine Learning",
      link: "https://colab.research.google.com/drive/1IoPOoKgyFBaGPs2j2YKpTjCMDISMng8m?usp=sharing",
    },
    {
      project: "Faster Taxi Tip Prediction using Snap ML",
      link: "https://colab.research.google.com/drive/16mCs8dC8Jy9GfLL-Mw7A9qXrnV88zgmH?usp=sharing",
    },
    {
      project:
        "Lung Cancer Model Comparison using R (Logit and Probit Comparison)",
      link: "https://github.com/oderinde300/Lung-cancer",
    },
    {
      project: "Analysis on the Prevalence of Asthma and Allergic Rhinitis",
      link: "https://github.com/oderinde300/Asthma-prevalence",
    },
    {
      project:
        "2017 Global Index Indicator Table Using Tidyverse and Quarto in R",
      link: "https://github.com/oderinde300/Quarto-Projects/blob/main/Tidyverse%20Project.pdf",
    },
  ];
  const certificates = [
    {
      school: "University of Michigan, Coursera",
      course: "Data Science for Health Research Specialization",
      date: "May, 2024",
      certificate:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/QWL696YTPJ3Q",
    },
    {
      school: "University of Michigan, Coursera",
      course: "Analysing and Visualizing Data in R",
      date: "May, 2024",
      certificate:
        "https://www.coursera.org/account/accomplishments/certificate/ZWQQ6KXYCZRP",
    },
    {
      school: "University of Michigan, Coursera",
      course: "Linear Regression Modelling for Health Research",
      date: "May, 2024",
      certificate:
        "https://www.coursera.org/account/accomplishments/certificate/MBEPAQZKB8JK",
    },
    {
      school: "University of Michigan, Coursera",
      course: "Logistic Regression and Prediction for Health Data",
      date: "May, 2024",
      certificate:
        "https://www.coursera.org/account/accomplishments/certificate/6N6XXRFTUZ9G",
    },
    {
      school: "Imperial College London, Coursera",
      course: "Survival Analysis in R for Public Health",
      date: "May, 2024",
      certificate:
        "https://www.coursera.org/account/accomplishments/certificate/X4QXSV33NCZC",
    },
    {
      school: "Imperial College London, Coursera",
      course: "Epidemiology for Public Health Specialization",
      date: "May, 2024",
      certificate:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/U65HHE9HHFA6",
    },
    {
      school: "Imperial College London, Coursera",
      course: "Study Designs in Epidemiology",
      date: "May, 2024",
      certificate:
        "https://www.coursera.org/account/accomplishments/certificate/R6N8N6LYWU2S",
    },
    {
      school: "Imperial College London, Coursera",
      course: "Measuring Disease Epidemiology",
      date: "May, 2024",
      certificate:
        "https://www.coursera.org/account/accomplishments/verify/KY3ZRQRANLES",
    },
    {
      school: "Imperial College London, Coursera",
      course: "Validity of Bias in Epidemiology",
      date: "May, 2024",
      certificate:
        "https://www.coursera.org/account/accomplishments/certificate/6FMN3EXHLCD2",
    },
    {
      school: "IBM, Coursera",
      course: "Machine Learning with Python",
      date: "June, 2024",
      certificate:
        "https://www.coursera.org/account/accomplishments/certificate/48M44M8UFK74",
    },
    {
      school: "Project work, Coursera",
      course: "Essential Causal Inference Techniques for Data Science",
      date: "June, 2024",
      certificate:
        "https://www.coursera.org/account/accomplishments/certificate/DGS33YE3RBZC",
    },
  ];

  return (
    <div className="relative bg-cover bg-center text-white bg-white">
      <div className="bg-green-900 bg-opacity-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-white"></div>
          <div className="space-x-4">
            <a
              href="#"
              className={`${NAV_LINK_CLASSES} ${
                activeTab === "Certifications" && "text-zinc-300"
              }`}
              onClick={() => {
                scrollUp();
                setActiveTab("Certifications");
              }}
            >
              Certification
            </a>
            <a
              href="#"
              className={`${NAV_LINK_CLASSES} ${
                activeTab === "Research" && "text-zinc-300"
              }`}
              onClick={() => {
                scrollUp();
                setActiveTab("Research");
              }}
            >
              Research
            </a>
            <a
              href="#"
              className={`${NAV_LINK_CLASSES} ${
                activeTab === "Publications" && "text-zinc-300"
              }`}
              onClick={() => {
                scrollUp();
                setActiveTab("Publications");
              }}
            >
              Papers
            </a>
            <a
              href="https://drive.google.com/file/d/1wtm6LaWSdNKel3SsvsVjliCsH_f0gyZZ/view?usp=sharing"
              className={NAV_LINK_CLASSES}
            >
              Resume
            </a>
            <a
              href="#"
              className={`${NAV_LINK_CLASSES} ${
                activeTab === "Projects" && "text-zinc-300"
              }`}
              onClick={() => {
                scrollUp();
                setActiveTab("Projects");
              }}
            >
              Projects
            </a>
            <a
              href="https://www.linkedin.com/in/oderinde-emmanuel-b43913184/"
              className={NAV_LINK_CLASSES}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            {/* <a href="#" className={DONATE_BUTTON_CLASSES}>
              Blog
            </a> */}
          </div>
        </nav>
        <div className="container mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="">
            <h1
              className="text-2xl md:text-4xl font-bold leading-tight max-w-xl"
              onClick={scrollUp}
            >
              Oderinde Emmanuel
            </h1>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight max-w-xl">
              Welcome, I am a graduate of statistics from the Federal University
              of Technology Akure, Nigeria.
            </h1>
            <div className="mt-10">
              <a
                href="#"
                className={`${READ_MORE_BUTTON_CLASSES}`}
                onClick={() => {
                  scrollUp();
                  setActiveTab("Research");
                }}
              >
                Research
              </a>
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-end">
            <img
              // src="/images/avatar.png"
              src={Avatar}
              alt="my picture"
              className="max-h-[400px]"
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-20 items-center text-gray-800">
        <div className="mb-6 flex items-center justify-center">
          <div className="flex items-center gap-0 md:gap-2 rounded-lg border border-muftar-border p-1.5">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(tab)}
                className={`${
                  tab === activeTab
                    ? "text-blue-500 shadow-custom-shadow-sm"
                    : ""
                } hover:text-blue-500 cursor-pointer rounded-md px-3.5 py-2.5 text-base font-semibold hover:shadow-custom-shadow-sm`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        {activeTab === "Publications" && (
          <div>
            <p className="text-2xl font-bold">Publications</p>
            <div className="py-4">
              <p className="font-semibold text-xl mb-2">
                Peer-reviewed Journal Articles
              </p>
              <div className="flex flex-col space-y-4">
                {/* <p>
                  <span className="font-semibold">Z. Chen</span> (2022) "Robust
                  tests for combining p-values under arbitrary dependency
                  structures".{" "}
                  <span className="font-semibold underline italic">
                    Scientific Reports
                  </span>
                  , 12, Article number: 3158.
                </p> */}
                <p>
                  Oderinde, E. O., Adeoti, O. A. (2024), Statistical Analysis of
                  the Prevalence and Predictors of Asthma and Allergic Rhinitis
                  in Nigeria. Advanced Journal of Science, Technology and
                  Engineering 4(4), 10-22.{" "}
                  <a
                    href="https://abjournals.org/ajste/papers/volume-4/issue-4/statistical-analysis-on-the-prevalence-and-predictors-of-asthma-and-allergic-rhinitis-in-nigeria/"
                    className="underline text-blue-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://doi.org/10.52589/ajstega5axydb
                  </a>
                </p>
                <p>
                  Kasali, W.A., Ogunjoun, B.O., Olakehinde, A.O., Oderinde, E.O.
                  and Salam, A.O. (2024) Estimating the Likelihood of Cancer
                  Occurrence Based on Patient Data and Lifestyle Factors: A
                  Comparison between Logit and Probit Regression. Open Access
                  Library Journal, 11: e11905.{" "}
                  <a
                    href="https://doi.org/10.4236/oalib.1111905"
                    className="underline text-blue-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://doi.org/10.4236/oalib.1111905
                  </a>
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "Research" && (
          <div>
            <p className="text-2xl font-bold">Research</p>
            <div className="py-4">
              <p className="font-semibold text-xl mb-2">Research Interests</p>
              <div className="flex flex-col space-y-4">
                <p>Statistical Analysis and Data Science</p>
                <p>Biostatistics</p>
                <p>Statistical Genetics</p>
                <p>Disease Simulation</p>
                <p>Machine Learning</p>
                <p>Survival Analysis</p>
                <p>Causal Inference</p>
                <p>Disease and Genetic Epidemiology</p>
              </div>
            </div>
          </div>
        )}
        {activeTab === "Certifications" && (
          <>
            <p className="text-2xl font-bold">Certifications</p>
            <div className="">
              <div className="py-4 flex flex-col space-y-4 w-full md:w-1/2">
                {certificates.map((certificate, index) => (
                  <div className="flex gap-6 items-start justify-between">
                    <div className="flex flex-col gap-1" key={index}>
                      <div className="flex gap-1 items-center">
                        <span>{index + 1}.</span>
                        <span className="text-base font-bold">
                          {certificate?.school}
                        </span>
                      </div>
                      <span className="text-base italics">
                        {certificate?.course}
                      </span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-base font-bold">{certificate?.date}</p>
                      <a
                        href={certificate?.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="text-base cursor-pointer text-blue-500">
                          Certificate
                        </span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
        {activeTab === "Projects" && (
          <>
            <p className="text-2xl font-bold">Projects</p>
            <div className="">
              <div className="py-4 flex flex-col space-y-4 w-full md:w-1/2">
                {projects.map((project, index) => (
                  <div className="flex gap-6 items-start justify-between">
                    <div className="flex flex-col gap-1" key={index}>
                      <div className="flex gap-1 items-center">
                        {/* <span>{index + 1}.</span> */}
                        <span className="text-base font-bold">
                          {project?.project}
                        </span>
                      </div>
                      {/* <span className="text-base italics">
                        {project?.project}
                      </span> */}
                    </div>
                    <div className="flex flex-col gap-1">
                      {/* <p className="text-base font-bold">{project?.link}</p> */}
                      <a
                        href={project?.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="text-base cursor-pointer text-blue-500">
                          View
                        </span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
