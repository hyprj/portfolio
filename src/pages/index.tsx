import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Header } from "../components/header/Header";
import { Content } from "../components/content/Content";
import { AboutMe } from "../components/aboutMe/AboutMe";
import { Projects } from "../components/projects/Projects";
import { Contact } from "../components/contact/Contact";

const IndexPage: React.FC<PageProps> = () => (
  <div className="bg-primary min-h-screen">
    <Header />
    <Content>
      <AboutMe />
      <Projects />
      <Contact />
    </Content>
  </div>
);

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
