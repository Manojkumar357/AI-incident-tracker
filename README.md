# AI-incident-tracker API
This is a simple **Incident Tracker** API built with **Express.js** and **MongoDB** for tracking incidents.
The main FIle is :app.js
The database connection in Config Folder
The database Schema in Model Folder
The Routes contians in Routes Folder

## Language/Framework

- **Node.js** (JavaScript runtime environment)
- **Express.js** (Web framework for Node.js)
- **MongoDB Atlas** (Cloud-based NoSQL database)
## Installation

### Step 1: Clone the Repository
First, clone the repository to your local machine:
```bash
git clone https://github.com/Manojkumar357/AI-incident-tracker.git
```

#Step 2: Go into the project directory:
cd incident-tracker

#Step 3: Install Dependencies
npm install
******************************************************************************************************************************************************

CONFIGURATION
Step 1: Connecting to my MongoDB culster
Create a .env file in the root directory of the project. The .env file should contain the following variables:
MONGO_URI=mongodb+srv://username:password@cluster0.pwiiwsw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
** if it is there then directly Run by  the command **
command: node app.js
After the command if it is showing the 
Server running on port 5000
MongoDB connected
"" Then you are successfully running the server ""
*****************************************************************************************************************************************************************************************

"""""""""""""""TESTING THE END POINTS USING POSTMAN ****************
Once the server is running, you can use Postman or cURL to test the API endpoints.
1.GET /incidents
Description: Retrieve all incidents.
Request:
URL: http://localhost:5000/incidents
2.POST /incidents
Description: Create a new incident.
Request:
curl -X POST -H "Content-Type: application/json" -d '{"title": "Sample Incident", "description": "This is a sample description.", "severity": "High"}' http://localhost:5000/incidents
3.GET /incidents/:id
Description: Retrieve a specific incident by ID.
Request: http://localhost:5000/incidents/60a7b3d8997b5b2e4c2c3d93
4. DELETE /incidents/:id
Description: Delete a specific incident by ID.
Request:curl -X DELETE http://localhost:5000/incidents/60a7b3d8997b5b2e4c2c3d93
***************END*******************************************************************************************************************************************************************************
