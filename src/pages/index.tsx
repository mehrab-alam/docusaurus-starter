import type { ReactNode } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./index.module.css";
import Hero from "../components/LandingPage/Hero";
import Companies from "../components/LandingPage/Companies";
import SvgIcons from "../components/SvgIcons";
import Features from "../components/LandingPage/Features";
import { FlickeringGrid } from "../components/ui/flickering-grid";

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  const logoArray = {
    firstGroup: [SvgIcons.google, SvgIcons.microsoft, SvgIcons.amazone, SvgIcons.netflix, SvgIcons.instagram],
    secondGroup: [SvgIcons.spotify, SvgIcons.dropbox, SvgIcons.slack, SvgIcons.zoom, SvgIcons.shopify],
  };
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      wrapperClassName="w-[80vw]  m-[0px_auto] "
      description="Description relative will go into a meta tag in <head />"
    >
      <FlickeringGrid
        className="absolute inset-0 z-0 w-[80vw]  h-screen mask-[radial-gradient(80vw_circle_at_center,white,transparent)]"
        squareSize={4}
        gridGap={6}
        color="var(--bg-primary)"
        maxOpacity={0.5}
        flickerChance={0.1}
      />
      <Hero
        extraContent={<img src="https://placehold.co/600x300" alt="" />}
        buttonInfo={{
          text: "Get Started",
          link: "/",
        }}
        tagLine={{
          tag: "New",
          description: "Introducing AI Agent SDK",
        }}
        description={
          "Create powerful AI agent workflows with just a few lines of code, enabling complex task automation and decision-making processes."
        }
        title={"AI Agent SDK"}
        extraDescription="Available for all major programming languages"
      />
      <Companies items={logoArray} />
      <Features
        featureList={[
          {
            title: "Simple Agent Workflows",
            icon: SvgIcons.workFlow,
            description: "Easily create and manage AI agent workflows with intuitive APIs.",
            link: "/",
          },
          {
            title: "Multi-Agent Systems",
            icon: SvgIcons.user,
            description: "Build complex systems with multiple AI agents working together.",
            link: "/",
          },
          {
            title: "Tool Integration",
            icon: SvgIcons.plug,
            description: "Seamlessly integrate external tools and APIs into your agent workflows.",
            link: "/",
          },
          {
            title: "Cross-Language Support",
            icon: SvgIcons.globe,
            description: "Available in all major programming languages for maximum flexibility.",
            link: "/",
          },
          {
            title: "Customizable Agents",
            icon: SvgIcons.code,
            description: "Design and customize agents to fit your specific use case and requirements.",
            link: "/",
          },
          {
            title: "Efficient Execution",
            icon: SvgIcons.zap,
            description: "Optimize agent performance with built-in efficiency and scalability features.",
            link: "/",
          },
        ]}
      />
    </Layout>
  );
}
