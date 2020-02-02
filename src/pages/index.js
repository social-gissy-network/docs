import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import classnames from "classnames";
import React from "react";
import styles from "./styles.module.css";

const Home = () => {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const imgUrl = useBaseUrl("img/SSBanner.png");

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={classnames("hero ", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/intro")}
            >
              Get Started
            </Link>
          </div>
          <img src={imgUrl} className={styles.featureImage} />
        </div>
      </header>
    </Layout>
  );
};

export default Home;
