import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
          Enthusiastic and skilled React.js Developer with 2 years of experience building dynamic, scalable, and responsive
          web applications using React.js, JavaScript, HTML, CSS, and Node.js. Strong foundation in frontend architecture,
          API integration, and performance optimisation.
          Additionally, 6 months of hands-on experience in manual and automation testing on Android and Web
          applications. Proficient in delivering clean, efficient code focusing on user experience, quality, and collaboration.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education & Training
        </h1>
        <div className="space-y-4">
  {/* Education Section */}
  <div>
    <div className="flex flex-wrap gap-2 items-baseline">
      <h5 className="font-semibold text-l">Bachelor of Technology (B.Tech) in Computer Science,</h5>
      <span>Kamla Nehru Institute of Physical and Social Science | Aug 2017 – Aug 2021</span>
    </div>
    <p className="mt-1 text-sm">
      <span className="font-semibold">CGPA:</span> 7.27 / 10
    </p>
  </div>
</div>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <div className="flex gap-2 items-baseline">
          <h3 className="text-red-600 font-semibold text-l">– Frontend:</h3>
          <span>React.js, JavaScript (ES6+), HTML5, CSS3, Bootstrap, Material-UI (MUI)</span>
        </div>

        <div className="flex gap-2 items-baseline">
          <h3 className="text-red-600 font-semibold text-l">– Backend:</h3>
          <span>Node.js, Express.js, Winston Logger, Swagger, Jest</span>
        </div>
        
        <div className="flex gap-2 items-baseline">
          <h3 className="text-red-600 font-semibold text-l">– Database:</h3>
          <span>MongoDB</span>
        </div>
        
        <div className="flex gap-2 items-baseline">
          <h3 className="text-red-600 font-semibold text-l">– Testing Tools:</h3>
          <span>Selenium, Appium, Postman</span>
        </div>
        
        <div className="flex gap-2 items-baseline">
          <h3 className="text-red-600 font-semibold text-l">– Tools Used:</h3>
          <span>VS Code, Linux, Postman</span>
        </div>
        
        <div className="flex gap-2 items-baseline">
          <h3 className="text-red-600 font-semibold text-l">– Version Control Project Management:</h3>
          <span>Git, GitHub, JIRA</span>
        </div>
        <br />
        
        <h1 className="text-green-600 font-semibold text-xl">
          Professional Experience
        </h1>
        <div className="space-y-4">
  {/* Frontend Developer Experience */}
  <div>
    <div className="flex flex-wrap gap-2 items-baseline">
      <h5 className="font-semibold text-l">Frontend Developer (React.js Developer),</h5>
      <span>Inevitable Infotech – Lucknow, UP | June 2022 – May 2024</span>
    </div>
    <ul className="list-disc list-inside ml-4 text-sm mt-1 space-y-1">
      <li>Designed and developed dynamic and responsive UIs using React.js, JavaScript, HTML5, CSS3, and Material-UI (MUI).</li>
      <li>Created reusable and modular components using functional components and React Hooks (useState, useEffect, useRef, useContext).</li>
      <li>Integrated REST APIs using fetch and axios to load and update real-time data on frontend.</li>
      <li>Applied state management techniques to ensure clean architecture and efficient data flow between components.</li>
      <li>Focused on performance optimization using lazy loading, code splitting, and avoiding unnecessary re-renders.</li>
      <li>Ensured cross-browser compatibility and responsive design using Bootstrap and custom CSS media queries.</li>
      <li>Conducted code reviews, maintained Git version control, and collaborated with UI/UX teams for better design experiences.</li>
    </ul>
  </div>

  {/* QA Engineer Experience */}
  <div>
    <div className="flex flex-wrap gap-2 items-baseline">
      <h5 className="font-semibold text-l">QA Engineer (Manual and Automation Testing),</h5>
      <span>Inevitable Infotech – Lucknow, UP | Dec 2021 – May 2022</span>
    </div>
    <ul className="list-disc list-inside ml-4 text-sm mt-1 space-y-1">
      <li>Performed manual testing and automation testing for Android applications using Appium and web applications using Selenium.</li>
      <li>Wrote and executed detailed test cases to validate frontend functionality and backend API responses.</li>
      <li>Worked in Linux environment using Bash scripting and Git for version control.</li>
      <li>Collaborated with developers to log, track, and resolve bugs using JIRA and GitHub.</li>
    </ul>
  </div>
</div>   
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
        Project Experience
        </h1>
        <div className="space-y-4">
  {/* Project Experience */}
  <div>
    <div className="flex flex-wrap gap-2 items-baseline">
      <h5 className="font-semibold text-l">Inventory Management System (InviIMS),</h5>
      <span>Inevitable Infotech – Lucknow, UP | June 2022 – May 2024</span>
    </div>
    
    <p className="mt-2 text-sm">
      <span className="font-semibold">Project Description:</span> Developed a full-fledged Inventory Management System to manage stocks, suppliers, categories, and user activities in an enterprise environment.
    </p>
    
    <p className="mt-2 font-semibold text-sm">Key Responsibilities:</p>
    <ul className="list-disc list-inside ml-4 text-sm mt-1 space-y-1">
      <li>Designed and developed user-friendly, scalable interfaces using React.js, Material-UI, JavaScript, HTML5, and CSS3.</li>
      <li>Built modular components such as Product List, Stock Management, Supplier Management, and Order Tracking.</li>
      <li>Implemented dynamic forms, tables, and pagination for large data handling using Material-UI components.</li>
      <li>Managed application state efficiently using React Hooks and Context API.</li>
      <li>Integrated backend Node.js/Express.js APIs to fetch and update inventory data dynamically.</li>
      <li>Ensured security features such as user authentication and authorization for different roles (admin/user).</li>
      <li>Focused on mobile-first design principles to make the system responsive across devices.</li>
    </ul>

    <p className="mt-2 text-sm">
      <span className="font-semibold">Technologies Used:</span> React.js, JavaScript, HTML5, CSS3, Bootstrap, Material-UI, Node.js, Express.js, MongoDB
    </p>
  </div>
</div>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p>
          My mission is to leverage my skills and creativity to deliver
          innovative [Your Field] solutions that exceed client expectations and
          contribute positively to the digital landscape. I am committed to
          continuous learning and growth, always seeking new challenges and
          opportunities to expand my horizons.
        </p>
      </div>
    </div>
  );
}

export default About;
