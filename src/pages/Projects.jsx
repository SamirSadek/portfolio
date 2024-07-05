import { Link } from "react-router-dom";

import { projects } from "../constants";
import { arrow } from "../assets/icons";
import CTA from "../components/CTA";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text text-center">
        My{" "}
        <span className="blue-gradient_text drop-shadow font-semibold">
          Projects
        </span>
      </h1>

      <p className="text-slate-500 mt-2 leading-relaxed text-center">
        I've embarked on numerous projects throughout the year, but these are
        the ones I hold closest to my heart.
      </p>

      <div className=" my-20 gap-16">
        {projects.map((project) => (
          <div className="w-full my-16" key={project.name}>
            <div className="block-container mx-auto w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front  rounded-xl flex justify-center items-center">
                <img
                  src='https://cdn-icons-png.flaticon.com/512/5956/5956592.png'
                  alt="threads"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col items-center">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <h5 className="text-md">{project.category}</h5>
              <p className="mt-2 text-slate-500">{project.description}</p>
              <div className="flex justify-evenly gap-10">
                <div className="mt-5 flex items-center gap-1 font-poppins">
                  <Link
                    to={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600"
                  >
                    Live Link
                  </Link>
                </div>
                <div className="mt-5 flex items-center gap-1 font-poppins">
                  <Link
                    to={project.link1}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600"
                  >
                    GitHub-Client
                  </Link>
                </div>
                <div className="mt-5 flex items-center gap-1 font-poppins">
                  <Link
                    to={project.link2}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600"
                  >
                    GitHub-Server
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="border-slate-200 my-20" />
      <h1 className="head-text text-center">
        My{" "}
        <span className="blue-gradient_text drop-shadow font-semibold">
          Research
        </span>
      </h1>
      <p className="text-slate-500 mt-2 leading-relaxed text-center">
        See my Undergraduate Research Work
      </p>

      <div className=" w-full mt-20">
        <div className="block-container w-12 h-12 mx-auto">
          <div className={`btn-back rounded-xl bg-orange-400`} />
          <div className="btn-front rounded-xl flex justify-center items-center">
            <img
              src="https://png.pngtree.com/png-vector/20230412/ourmid/pngtree-research-line-icon-vector-png-image_6703508.png"
              alt="research"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>

        <div className="mt-5 flex flex-col">
          <h4 className="text-2xl font-poppins font-semibold text-center"> “Early Depression Detection from Social Network Using Deep Learning Techniques”</h4>
          <p className="mt-2 text-slate-500">Depression is a psychological disorder that affects over three hundred million humans worldwide. A person who is depressed suffers from anxiety in day-today life, which affects that person in the relationship with their family and friends, leading to different diseases and in the worst-case death by suicide. With the growth of the social network, most of the people share their emotion, their feelings, their thoughts in social media. If their depression can be detected early by analyzing their post, then by taking necessary steps, a person can be saved from depression-related diseases or in the best case he can be saved from committing suicide. In this research work, a hybrid model has been proposed that can detect depression by analyzing user's textual posts. Deep learning algorithms were trained using the training data and then performance has been evaluated on the test data of the dataset of reddit which was published for the pilot piece of work, Early Detection of Depression in CLEF eRisk 2019. In particular, Bidirectional Long Short Term Memory (BiLSTM) with different word embedding techniques and metadata features were proposed which gave good results</p>
          <div className="mt-5 flex items-center gap-2 font-poppins justify-center">
            <Link
              to="https://www.researchgate.net/publication/342243792_Early_Depression_Detection_from_Social_Network_Using_Deep_Learning_Techniques"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-600"
            >
              Full Research
            </Link>
            <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
          </div>
        </div>
      </div>
      <hr className="border-slate-200 mt-20" />

      <CTA />
    </section>
  );
};

export default Projects;
