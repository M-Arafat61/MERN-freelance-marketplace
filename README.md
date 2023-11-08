# Project IT Quester

## Hosting URL: <https://dream-tech-jobs.web.app/>

#### IT Quester is an job marketplace where from a verified user can post job, manage posted jobs bids/applications, accept/reject bids and much more.

#### I have used `Express.js` `firebase` `Mongodb` `node` `jws` & `React` for the project. Below I'm explaining core features of my project.

- # Project features

### 1. `Home page` contains category based jobs as named _Digital Marketing, Web Development, Graphics Design_. By clicking any category shows Jobs under that category from mongodb database.

### 2. Each job contains a _Bid now_ button that takes the user to Job Details page where from a user can `bid job` by giving some information. User who posts the Job can not bid on his/her job.

### 3. Add Job page contains form to add job, after adding the job, job data gets stored in database. Home Page's category wise Jobs are these added Jobs.

### 4. My Posted Jobs page contains specific users posted Job. These Jobs are _protected with jsonwebtoken_. No one can see jobs except the user themselves.

- #### From this page user can `Update` information of specific job also can `Delete` the Job.

### 5. Bid Requests page contains jobs Bided by other users. User who posted the Job can only `Accept or Reject Job requests`.

### 6. My Bids page contain Jobs with status pending,rejected and in progress. In progress Jobs have a button complete, User who posted the Job can change the status as complete.
