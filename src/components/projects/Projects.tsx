import React from "react";

export const Projects = () => {
  return (
    <section className="mb-36">
      <h2 className="text-3xl sm:text-5xl text-center font-merriweather">
        My Projects
      </h2>
      <div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          className="lg:col-span-2"
          name="Priori"
          description="Priori is a productivity app that helps with organizing projects. The app allows users
to create projects, tasks and use a pomodoro timer"
          imgSrc="/priori.png"
        >
          <div>priori</div>
        </ProjectCard>
        <ProjectCard
          name="Château de Champblanc"
          description="French Château hotel page"
        >
          <div>chateau</div>
        </ProjectCard>
        <ProjectCard name="This portfolio page">
          <div>this</div>
        </ProjectCard>
        <ProjectCard
          className="lg:col-span-2"
          name="Evolution Gaming TS Bootcamp course project"
          description="A 3D roulette game made with TypeScript, React, Babylon.JS and MobX"
        >
          <div>evo</div>
        </ProjectCard>
      </div>
    </section>
  );
};

export const ProjectCard = ({
  children,
  className = "",
  description,
  name,
  imgSrc,
}: {
  children: React.ReactNode;
  className?: string;
  name?: string;
  description?: string;
  imgSrc?: string;
}) => (
  <div
    tabIndex={0}
    className={`rounded-lg p-4 bg-amber-200/60 focus:scale-[1.02] hover:scale-[1.02] transition-transform 300ms hover:cursor-pointer ${className}`}
  >
    <div className="h-48 md:h-96 bg-white rounded-t-md overflow-hidden">
      <div
        className="w-full h-full bg-[size:_140%] sm:bg-cover "
        style={{ backgroundImage: `url(${imgSrc})` }}
      ></div>
    </div>
    <div className="mt-2 ">
      <p className="font-semibold">{name}</p>
      <p className="line-clamp-1 text-sm text-neutral-700">{description}</p>
    </div>
  </div>
);
