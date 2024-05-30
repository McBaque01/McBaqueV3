import { About } from "../components/portfolio/about/About";
import { Hero } from "../components/portfolio/hero/Hero";
import { Skill } from "../components/portfolio/skills/Skill";
import { ContactUI } from "../components/portfolio/contact/ContactUI";
import { Helmet } from "react-helmet";
export const Portfolio = () => {


  const structuredData = {
    "@context": "http://schema.org",
    "@type": "Person",
    "name": ["Mark John Baque", "Mc Baque"],
    "url": "https://mcbaquev3.vercel.app",
    "sameAs": [
      "www.linkedin.com/in/mcbaque",
      "https://github.com/McBaque01"
    ],
    "skills": ["React, Node.js, MongoDB, Web Development, MySQL, PHP, Java, .NET, ExpressJS, Typescript, Vite, TailwindCSS, Render, Framer, Vercel, Postman, Git, Github, NPM"]
  };

  return (

   
    <div className="h-fit w-full overflow-hidden">

      <Helmet>
        <title>Mc Baque - Portfolio</title>
        <meta name="description" content="Explore Mc Baque portfolio showcasing his expertise in React, Node.js, and MongoDB." />
        <meta name="keywords" content="Mc Baque,Mark John Baque,Mc Baque Portfolio,Mark John Baque Portfolio, McBaqueV3" />
        <meta name="author" content="Mark John Baque, Mc Baque" />
        <link rel="canonical" href="https://mcbaquev3.vercel.app" />
      </Helmet>
      
      {/* Script tag for structured data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>



      <Hero />
      <About />
      <Skill />
      <ContactUI />
    </div>
  );
};
