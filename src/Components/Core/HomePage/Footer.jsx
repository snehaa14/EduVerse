import React from 'react'
import './Footer.css'
import { FaFacebook } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
const Footer = () => {
  return (
    <>
    <div className='main'>
    <div className="container">
     
        <div className='first'>
            <div>Company</div>
            <div>About</div>
            <div>Careers</div>
            <div>Affiliates</div>
            <div className='logos'>
            <FaFacebook />
            <FaGoogle />
            <FaTwitter />
            <IoLogoYoutube />
            </div>
        </div>

        <div className='second'>

            <div className='second-one'>
            <div className='heading'>Resources</div>
            <ul>
                <li><a href="#">Articles</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Chart Sheet</a></li>
                <li><a href="#">Code challenges</a></li>
                <li><a href="#">Docs</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Videos</a></li>
                <li><a href="#">Workspaces</a></li>
              </ul>
            </div>


            <div className="second-two">
                <div className='heading'>Support</div>
                <div>Help Center</div>
            </div>
            
        </div>

        <div className='third'>
            <div className="third-one">
            <div className='heading'>Plans</div>
            <ul>
                <li><a href="#">Paid memberships</a></li>
                <li><a href="#">For students</a></li>
                <li><a href="#">Business solutions</a></li>
              </ul>

            </div>

            <div className="third-two">
                <div className='heading'>Community</div>
                <ul>
                <li><a href="#">Forums</a></li>
                <li><a href="#">Chapters</a></li>
                <li><a href="#">Events</a></li>
              </ul>
            </div>
            
        </div>

        <div className='fourth'>
            <div className='heading'>Subjects</div>
            <ul>
                <li><a href="#">AI</a></li>
                <li><a href="#">Cloud Computing</a></li>
                <li><a href="#">Code Foundations</a></li>
                <li><a href="#">Computer Science</a></li>
                <li><a href="#">Cybersecurity</a></li>
                <li><a href="#">Data Analytics</a></li>
                <li><a href="#">Data Science</a></li>
                <li><a href="#">Data Visualization</a></li>
                <li><a href="#">Developer Tools</a></li>
                <li><a href="#">DevOps</a></li>
                <li><a href="#">Game Development</a></li>
                <li><a href="#">IT</a></li>
                <li><a href="#">Machine Learning</a></li>
                <li><a href="#">Math</a></li>
                <li><a href="#">Mobile Development</a></li>
                <li><a href="#">Web Design</a></li>
                <li><a href="#">Web Development</a></li>
              </ul>
        </div>



        <div className='fifth'>
            <div className='heading'>Language</div>
            <ul>
                <li><a href="#">Bash</a></li>
                <li><a href="#">C</a></li>
                <li><a href="#">C++</a></li>
                <li><a href="#">C#</a></li>
                <li><a href="#">Go</a></li>
                <li><a href="#">HTML & CSS</a></li>
                <li><a href="#">Java</a></li>
                <li><a href="#">JavaScript</a></li>
                <li><a href="#">Kotlin</a></li>
                <li><a href="#">PHP</a></li>
                <li><a href="#">Python</a></li>
                <li><a href="#">R</a></li>
                <li><a href="#">Ruby</a></li>
                <li><a href="#">SQL</a></li>
                <li><a href="#">Swift</a></li>
              </ul>
        </div>


        <div className='sixth'>
            <div className='heading'>Career building</div>
            <ul>
                <li><a href="#">Career paths</a></li>
                <li><a href="#">Career services</a></li>
                <li><a href="#">Interview prep</a></li>
                <li><a href="#">Professional certification</a></li>
                <li><a href="#">Full Catalog</a></li>
                <li><a href="#">Beta Content</a></li>
              </ul>
        </div>



    
    
    </div>


    <div className='last'>
        <div className='left'>
        <p>Privacy Policy | Cookie Policy | Terms</p>
        </div>
        <div className='right'>
        <p>Made with <span role="img" aria-label="heart">❤️</span> CodeHelp © 2023 Studynotion</p>
        </div>
    </div>
    </div>
    </>
  )
}

export default Footer
