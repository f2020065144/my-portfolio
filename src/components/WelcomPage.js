import React from 'react';
import './/WelcomePage.css'
import 'bootstrap/dist/css/bootstrap.css';
import myImage from './Images/kashif.jpeg'
const WelcomePage = () => {
  const progress = {
      width:'70%',
      background:'red'
  };
  const progressbar1 = {
    width:'60%',
    background:'blue'
};
const progressbar2 = {
  width:'85%',
  background:'orange'
};
  return (
    <div className="welcome-page">
     
        <div class="container-fluid" id="main_div">
            <div class="row" id="namediv">
                <div class="col-lg-6  mb-12">
                <img id='myimg' src={myImage} alt="My Image" />
                </div>
                <div class="col-lg-6  mb-12" id="namehead" >
                    <h1 id="title">Kashif Ali</h1>
                    <h3 id="titlename">Software Engineer</h3>
                   
                    <a href="Reachout.html"><button type="button" id="btnreach">Reach out</button></a>
                </div>
            </div>
        </div>

        <div class="container-fluid" id="experiencediv">
            <div class="row" id="expinnerdiv">
                <div class="col-lg-4  mb-4">
                    <h1 id="exptitle"><strong>Experience & Education</strong></h1>
                  
                </div>
                 <div class="col-lg-8  mb-4" id="detaildiv">
                   
                    <h4><strong id="headingdetail">WEB DEVELOPMENT</strong></h4>
                     <p>During my time at university, I successfully completed small projects where I cloned popular e-commerce websites like Nike and Bata. These projects involved replicating their design, layout, and responsiveness using HTML, CSS, and JavaScript. I also implemented product pages, navigation, and optimized images for faster loading. These experiences significantly enhanced my web development skills and understanding of front-end technologies.</p>
                      <br></br>
                      <br></br>
                     <h4><strong id="headingdetail">DESKTOP APPLICATION</strong></h4>
                     <p>In my C# programming journey, I have undertaken various desktop application projects. Using the C# language and the .NET framework, I developed applications with graphical user interfaces (GUIs) that offer functionality such as data management, file handling, and user interactions. These projects have provided me valuable experience in software development and honed my skills in C# programming and desktop application development.</p>
                     <br></br>
                      <br></br>
                     <h4><strong id="headingdetail">ANDROID DEVELOPMENT</strong></h4>
                     <p>In my Java development experience, I have successfully completed two projects: a Bike Parts app and a Phonebook app. The Bike Parts app allows users to manage and search for bike components, utilizing object-oriented principles to handle data. The Phonebook app provides features for adding, editing, and searching contacts, employing data structures like linked lists or arrays. These projects have enriched my Java programming skills and reinforced my understanding of data organization and manipulation in practical applications</p>
                     <br></br>
                      <br></br>
                     <h4><strong id="headingdetail">UNIVERSITY OF MANAGEMENT & TECHNOLOGY</strong></h4>
                     <p>Software Engineering career, inprogress. 2020-2024</p>
                     <br></br>
                      <br></br>
        
                     <h4><strong id="headingdetail">SUPERIOR GROUP OF COLLEGE</strong></h4>
                     <p>FSc. 2018-2020</p>
                </div>
            </div>
        </div>

         <div class="container-fluid">
            <div class="row" id="expinnerdiv">
                <div class="col-lg-4  mb-4">
                    <h1 id="skilltitle"><strong>Skills &<br></br> Proficiencies</strong></h1>
                </div>
            </div>
            <div class="row" id="skilldiv">
                <div class="col-lg-6 mb-12">
                    <h3 id="skill">TECHANICAL SKILLS</h3>
                    <p id="skillsdetail">HTML , CSS , Bootstrap , Javascript , PHP</p>
                    <div class="progress-bar">
                      <div class="progress" style={progressbar2}></div>
                    </div>
                    <br></br>
                    <br></br>
                    <p id="skillsdetail">Desktop Application in C#</p>
                    <div class="progress-bar">
                      <div class="progress" style={progress}></div>
                    </div>
                    <br></br>
                    <br></br>
                    
                    <p id="skillsdetail">Android Development in Java</p>
                    <div class="progress-bar">
                      <div class="progress" style={progressbar2}></div>
                    </div>
                    <br></br>
                    <br></br>
                </div>
                <div class="col-lg-6 mb-12">
                     <h3 id="language">LANGUAGES</h3>
                    <p id="languagedetail">Urdu</p>
                    <div class="progress-bar">
                      <div class="progress" style={progressbar2}></div>
                    </div>
                    <br></br>
                    <br></br>
                    <p id="languagedetail">English</p>
                    <div class="progress-bar">
                      <div class="progress" style={progressbar1}></div>
                    </div>
                    <br></br>
                    <br></br>
                    
                    <p id="languagedetail">Saraki & Punjabi</p>
                    <div class="progress-bar">
                      <div class="progress" style={progress}></div>
                    </div>
                    <br></br>
                    <br></br>
                </div>
            </div>
        </div> 
          
  
    </div>
  );
};

export default WelcomePage;