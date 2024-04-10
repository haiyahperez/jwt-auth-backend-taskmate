-- db/seed.sql
\c jwt_auth

INSERT INTO users (user_id, username, password_hash, email)
VALUES 
(1,'demo', '$2b$10$.z68x3792U9LyBwmghfsKexstMO7i0SeNCoDmeJa7bEFPQBnZU3bK', 'demo@example.com');

INSERT INTO category (cat_id, color)
VALUES 
(1, 'Red'),
(2, 'Yellow'),
(3, 'Green');


INSERT INTO goal (goal_id, user_id, cat_id, title, description, specific, measure, attain, relevant, timely)
VALUES 
  (1, 1, 1, 'Master HTML, CSS, and JavaScript', 
   'Achieve proficiency in front-end web development technologies', 
   'I want to be able to create responsive and visually appealing web pages using HTML, CSS, and JavaScript.', 
   'I will consider my goal achieved when I can independently build a fully functional website from scratch.', 
   'Yes, by completing online courses, practicing regularly, and building projects to apply learned concepts.', 
   'Yes, as front-end development skills are essential for a software engineering career.', 
   'Yes, I aim to achieve this goal within the next six months.'),
  (2, 1, 2, 'Secure a Software Engineering Internship', 
   'Gain practical experience in a professional software development environment', 
   'I want to obtain a summer internship position at a tech company where I can contribute to real-world projects and learn from experienced developers.', 
   'I will consider my goal achieved when I receive an offer for a software engineering internship.', 
   'Yes, by actively applying to internships, networking, and preparing for technical interviews.', 
   'Yes, gaining hands-on experience will enhance my skills and increase my employability.', 
   'Yes, I aim to secure an internship before the end of this semester.'),
  (3, 1, 3, 'Contribute to an Open Source Project', 
   'Make meaningful contributions to open-source software and collaborate with the global developer community', 
   'I want to actively contribute code and documentation to an open-source project on GitHub, fostering community engagement and enhancing my programming skills.', 
   'I will consider my goal achieved when my contributions are merged into the project repository and positively impact its development.', 
   'Yes, by finding beginner-friendly projects, understanding their codebase, and submitting quality pull requests.', 
   'Yes, contributing to open-source projects will help me gain practical experience and build a professional network.', 
   'Yes, I aim to make my first contribution within the next three months.');


INSERT INTO task (user_id, task_id, goal_id, title, description)
VALUES 
  (1, 1, 1, 'Complete Online HTML/CSS Course', 
   'Enroll in and complete an online course covering HTML and CSS fundamentals'),
  (1, 2, 1, 'Build Responsive Website', 
   'Create a personal portfolio website showcasing projects and skills using HTML, CSS, and JavaScript'),
  (1, 3, 1, 'Practice JavaScript Daily', 
   'Spend at least 1 hour every day coding JavaScript projects and solving coding challenges'),
  (1, 4, 2, 'Update Resume and Cover Letter', 
   'Review and tailor resume and cover letter to highlight relevant skills and experiences for software engineering roles'),
  (1, 5, 2, 'Prepare for Technical Interviews', 
   'Practice solving coding problems and answering technical questions commonly asked in software engineering interviews'),
  (1, 6, 2, 'Attend Career Fairs and Networking Events', 
   'Participate in career fairs and networking events to connect with potential employers and industry professionals'),
  (1, 7, 3, 'Explore GitHub Projects', 
   'Research and identify beginner-friendly open-source projects on GitHub that align with my interests and skills'),
  (1, 8, 3, 'Contribute Code and Documentation', 
   'Select an issue from an open-source project and work on solving it, while documenting the process and code changes'),
  (1, 9, 3, 'Engage with Project Community', 
   'Join project discussions, ask questions, and seek feedback from project maintainers and contributors to foster collaboration');
