<h1>Brief Description</h1>
<p>User can sign up and login, can create tasks, update tasks and delete tasks.</p>
<p>for user sign up- email, name and password are required</p>
<p>for user login - email and password required</p>
<p>A JWT token is created after logging in, this is for authentication and route protection</p>
<p>Each user has its own tasks, task has 3 fields</p>
<p>title, desc, isCompleted, title is required to create a task, isCompleted is false by default.</p>

<h1>INSTRUCTION TO RUN THE SOURCE CODE</h1>

<h3>1. Run this command in your terminal <span style="background: black">git clone git@github.com:shivam30072/btst-assignment.git</span>
</h3>

<h2>or</h2>

<h3>
Download the Zip file
</h3>

<h3>2. open the file in your code editor</h3>
<h3>3. open terminal and run the command <span style="background: black">npm install</span>. </h3>
<h3>4. you will have to create a <span style="background: black">.env file </span>, you need to create a db and store the credentials here, a<span style="background: black"> PORT</span> variable and a <span style="background: black">JWT SECRET</span> variable </h3>

<h3>4. To start the server run this command in terminal <span style="background: black">npm start<span></h3>

<h1>To run the APIs, you can use POSTMAN or any other application</h1>

<h1>File and Folder Structure</h1>
<h3>Root directory has package.json file and a backend named folder</h3>
<h3>Backend folder consists of all the code folder and files, server.js file is the main file which starts the server</h3>

<h1>Libraries I am using</h1>
<h3>Mongoose for mongodb</h3>
<h3>ExpressJs</h3>
<h3>Nodemon</h3>
<h3>dotenv</h3>
<h3>jsonwebtoken</h3>
<h3>bcryptjs</h3>
<h3>express-async-handler</h3>
