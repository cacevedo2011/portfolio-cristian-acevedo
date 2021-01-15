import { AiFillGithub } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import Project from "../../components/Projects";

function Portfolio() {
  const [projects] = useState([
    {
      name: "",
      alt: "Kill The Keg",
      image: killTheKeg,
      description:
        "Helping bar owners to quickly deplete kegs from leftover product, while helping avid beer drinkers find less expensive ways to drink with friends.",
      tools: "Sequelize/Express/Node/Handlebars",
      github: "https://github.com/JoshCarter8400/kill-the-keg",
      demo: "https://obscure-eyrie-90813.herokuapp.com/",
      icon1: <AiOutlineEye />,
      icon2: <AiFillGithub />,
    },
    {
      name: "Social Network API",
      alt: "Social Network API",
      image: socialNetwork,
      description:
        "This is a project where I built the APIs on the backend for a social network web application. It allows users to share their thoughts, are able to react to friend's thoughts, and create a friends list.",
      tools: "MongoDB/Mongoose/Express/Node",
      github: "https://github.com/JoshCarter8400/social-network-api",
      demo:
        "https://drive.google.com/file/d/1H2R_atiZEcf-uUr-vq3F6lPYtz0X6ZeV/view",
      icon1: <AiOutlineEye />,
      icon2: <AiFillGithub />,
    },
    {
      name: "Public Blog site",
      alt: "Public Blog site",
      image: blogSite,
      description:
        "This is a full stack application that allows user to post their thoughts and opinions through their personal blog post on a CMS style website. This project follows the Model View Controller paradigm.",
      tools: "Sequelize/Express/Node/Express-Session",
      github: "https://github.com/JoshCarter8400/tech-blog",
      demo: "https://rocky-cove-83154.herokuapp.com/",
      icon1: <AiOutlineEye />,
      icon2: <AiFillGithub />,
    },
    {
      name: "Weather Dashboard",
      alt: "Weather Dashboard",
      image: weatherDashboard,
      description:
        "In this application we used Third Party APIs to get the weather and current conditions for the location that the user searches for. We used JavaScript to make the application interactive by allowing ciities that are searched for to be saved into a card list that can be clicked on again to see that cities conditions at anytime.",
      tools: "HTML5/CSS3/JavaScript/Bootstrap/Moment.js/AJAX",
      github: "https://github.com/JoshCarter8400/Weather-Dashboard",
      demo: "https://joshcarter8400.github.io/Weather-Dashboard/",
      icon1: <AiOutlineEye />,
      icon2: <AiFillGithub />,
    },
    {
      name: "Quarantine Movie Nights",
      alt: "Quarantine Movie Nights",
      image: movieNight,
      description:
        "To assist a user in locating a streaming movie based on the genre and actor of choice. The app will also save a Watch List for any movies selected within the app.",
      tools: "HTML5/CSS3/JavaScript/Bootstrap/Moment.js/AJAX",
      github: "https://github.com/JoshCarter8400/quarantine-movie-nights",
      demo: "https://joshcarter8400.github.io/quarantine-movie-nights/",
      icon1: <AiOutlineEye />,
      icon2: <AiFillGithub />,
    },
    {
      name: "Employee Tracker",
      alt: "Employee Tracker",
      image: employeeTracker,
      description:
        "This is a command line application that allows the owner of a business to view and manage the employees and departments of the business as they see fit to organize and improve the business.",
      tools: "HTML5/CSS3/Bulma/AJAX/Javascript",
      github: "https://github.com/JoshCarter8400/employee-tracker",
      demo:
        "https://drive.google.com/file/d/1UGaoigaSNjBwoRfkr0olVUatX_lssFCB/view",
      icon1: <AiOutlineEye />,
      icon2: <AiFillGithub />,
    }
  ]);
  return (
    <main id="main">
      <section id="portfolio" className="portfolio section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Portfolio</h2>
            <p></p>
          </div>

          <div
            className="row portfolio-container"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {projects ? (
              projects.map((project) => {
                return <Project {...project} />;
              })
            ) : (
              <></>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Portfolio;