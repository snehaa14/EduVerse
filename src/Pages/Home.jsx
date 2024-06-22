import React from 'react';
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import HighLightText from '../Components/Core/HomePage/HighLightText';
import CTAButton from '../Components/Core/HomePage/Button';
import Banner from '../assets/Images/banner.mp4'; 
import CodeBlocks from '../Components/Core/HomePage/CodeBlocks';
import Footer from '../Components/Core/HomePage/Footer';


const Home = () => {
  return (
    <>
    <div className="relative mx-auto flex flex-col w-11/12 items-center text-white justify-between">
      <Link to="/signup">
        <div className="group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 w-fit">
          <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900">
            <p>Become an Instructor</p>
            <FaArrowRight />
          </div>
        </div>
      </Link>

      <div className="text-center text-xl font-semibold mt-7">
        Empower Your Future with
        <HighLightText text="Coding Skills" />
      </div>

      <div className="mt-4 w-[90%] text-center text-lg font-bold text-richblack-300">
        With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.
      </div>

      <div className="flex flex-row gap-7 mt-8">
        <CTAButton active={true} linkto="/signup">Learn More</CTAButton>
        <CTAButton active={false} linkto="/login">Book a Demo</CTAButton>
      </div>

      <div className="shadow-blue-200 mt-10 mx-3 my-13">
        <video className="w-full" muted loop autoPlay>
          <source src={Banner} type="video/mp4" />
        </video>
      </div>


      {/* code section 1 */}
      <div>
          <CodeBlocks
          position={"lg:flex-row"}
          heading={
            <div className='text-4xl font-semibold'>
              Unlock Your
              <HighLightText text={"coding potential"}></HighLightText>
              with our online courses
            </div>
          }
          subheading={"Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."}
          ctabtn1={
            {
              btnText:"try it yourself",
              linkto:"/signup",
              active:true,
            }
          }
          ctabtn2={
            {
              btnText:"Learn More",
              linkto:"/login",
              active:false,
            }
          }

          codeblock={`<!DOCTYPE html>
                    <html lang="en">
                      <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <meta http-equiv="X-UA-Compatible" content="ie=edge">
                        <title>HTML 5 Boilerplate</title>
                        <link rel="stylesheet" href="style.css">
                      </head>
                      <body>
                      <script src="index.js"></script>
                      </body>
                    </html>`}

codeColor={"text-yellow-25"}
          
          ></CodeBlocks>
      </div>

 {/* code section 2 */}
      <div>
          <CodeBlocks
          position={"lg:flex-row-reverse"}
          heading={
            <div className='text-4xl font-semibold'>
              Unlock Your
              <HighLightText text={"coding potential"}></HighLightText>
              with our online courses
            </div>
          }
          subheading={"Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."}
          ctabtn1={
            {
              btnText:"try it yourself",
              linkto:"/signup",
              active:true,
            }
          }
          ctabtn2={
            {
              btnText:"Learn More",
              linkto:"/login",
              active:false,
            }
          }

          codeblock={`<!DOCTYPE html>
                      <html lang="en">
                        <head>
                          <meta charset="UTF-8">
                          <meta name="viewport" content="width=device-width, initial-scale=1.0">
                          <meta http-equiv="X-UA-Compatible" content="ie=edge">
                          <title>HTML 5 Boilerplate</title>
                          <link rel="stylesheet" href="style.css">
                        </head>
                        <body>
                        <script src="index.js"></script>
                        </body>
                      </html>`}

codeColor={"text-yellow-25"}
          
          ></CodeBlocks>
      </div>




      
    </div>

    <Footer></Footer>
    </>
          
  );
};

export default Home;
