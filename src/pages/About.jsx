import { aust } from "../assets/images";

import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  
  import { experiences, skills, education, trainings } from "../constants";
  
  import "react-vertical-timeline-component/style.min.css";
import CTA from "../components/CTA";
  
  const About = () => {
    return (
      <section className='max-container'>
        <div className="flex justify-between justify-center">
        <h1 className='head-text'>
          Hello, I'm <br />
          <span className='blue-gradient_text font-semibold drop-shadow'>
            
            Samir Sadek
          </span>
          👋
        </h1>
        <img className="w-32 h-32 rounded-full border-blue-300 border-4" src="https://i.ibb.co/g79Y7Wy/samir.jpg" alt="samir.png" />
        </div>
  
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
          Computer Science graduate with expertise in ReactJS, ExpressJS & MongoDB, eager to evolve as a proficient MERN stack developer 
          </p>
        </div>
  
        <div className='py-10 flex flex-col'>
          <h3 className='subhead-text'>My Skills</h3>
  
          <div className='mt-16 flex flex-wrap gap-12'>
            {skills.map((skill) => (
              <div className='block-container w-20 h-20' key={skill.name}>
                <div className='btn-back rounded-xl' />
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className='w-1/2 h-1/2 object-contain'
                  />
                  
                </div>
                
              </div>
              
            ))}
          </div>
        </div>

        <div className='py-16'>
        <h3 className='subhead-text'>Trainings.</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
            <p>
            My professional journey has been punctuated by a  immersive training experiences, contributing to a robust skill set and a nuanced understanding of various domains. Here's an overview:
            </p>
          </div>
        <VerticalTimeline className='mt-12'>
                {
                  trainings.map(item => <VerticalTimelineElement
                    date={item.date}
                    iconStyle={{ background: item.iconBg }}
                    icon={
                      <div className='flex justify-center items-center w-full h-full'>
                        <img
                          src={item.icon}
                          alt='aust'
                          className='w-[60%] h-[60%] object-contain'
                        />
                      </div>
                    }
                    contentStyle={{
                      borderBottom: "8px",
                      borderStyle: "solid",
                      borderBottomColor: item.iconBg,
                      boxShadow: "none",
                    }}
                  >
                    <div>
                      <h3 className='text-black text-xl font-poppins font-semibold'>
                        {item.institute}
                      </h3>
                      <p
                        className='text-black-500 font-medium text-base'
                        style={{ margin: 0 }}
                      >
                        {item.Degree}
                      </p>
                      <p className='text-black-500/50 font-normal pl-1 text-sm'>
                      {item.des}

                      </p>
                    </div>
    
                    
                  </VerticalTimelineElement>)
                }
              
            </VerticalTimeline>
        </div>
  
        <div className='py-16'>
          <h3 className='subhead-text'>Work Experience.</h3>
          <div className='mt-5 flex flex-col gap-3 text-slate-500'>
            <p>
              I've worked with all sorts of companies, leveling up my skills and
              teaming up with smart people. Here's the rundown:
            </p>
          </div>
  
          <div className='mt-12 flex'>
            <VerticalTimeline>
              {experiences.map((experience, index) => (
                <VerticalTimelineElement
                  key={experience.company_name}
                  date={experience.date}
                  iconStyle={{ background: experience.iconBg }}
                  icon={
                    <div className='flex justify-center items-center w-full h-full'>
                      <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className='w-[60%] h-[60%] object-contain'
                      />
                    </div>
                  }
                  contentStyle={{
                    borderBottom: "8px",
                    borderStyle: "solid",
                    borderBottomColor: experience.iconBg,
                    boxShadow: "none",
                  }}
                >
                  <div>
                    <h3 className='text-black text-xl font-poppins font-semibold'>
                      {experience.title}
                    </h3>
                    <p
                      className='text-black-500 font-medium text-base'
                      style={{ margin: 0 }}
                    >
                      {experience.company_name}
                    </p>
                  </div>
  
                  <ul className='my-5 list-disc ml-5 space-y-2'>
                    {experience.points.map((point, index) => (
                      <li
                        key={`experience-point-${index}`}
                        className='text-black-500/50 font-normal pl-1 text-sm'
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
          
        </div>
        <div className='py-16'>
        <h3 className='subhead-text'>Academic Credentials.</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
            <p>
            My academic voyage has woven through an array of esteemed institutions, each fostering an immersive experience in diverse fields of study.Here's a snapshot:
            </p>
          </div>
        <VerticalTimeline className='mt-12'>
                {
                  education.map(item => <VerticalTimelineElement
                    date={item.date}
                    iconStyle={{ background: item.iconBg }}
                    icon={
                      <div className='flex justify-center items-center w-full h-full'>
                        <img
                          src={item.icon}
                          alt='aust'
                          className='w-[60%] h-[60%] object-contain'
                        />
                      </div>
                    }
                    contentStyle={{
                      borderBottom: "8px",
                      borderStyle: "solid",
                      borderBottomColor: item.iconBg,
                      boxShadow: "none",
                    }}
                  >
                    <div>
                      <h3 className='text-black text-xl font-poppins font-semibold'>
                        {item.institute}
                      </h3>
                      <p
                        className='text-black-500 font-medium text-base'
                        style={{ margin: 0 }}
                      >
                        {item.Degree}
                      </p>
                      <p className='text-black-500/50 font-normal pl-1 text-sm'>
                      {item.des}

                      </p>
                    </div>
    
                    
                  </VerticalTimelineElement>)
                }
              
            </VerticalTimeline>
        </div>
  
        <hr className='border-slate-200' />
  
       <CTA/>
      </section>
    );
  };
  
  export default About;