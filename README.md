# Github Repos REST API

A express-node.js based REST API to fetch github user details and repository details.

## Features

- Express
- REST API

## Requirements

- [node & npm](https://nodejs.org/en/)
- [git](https://git-scm.com/)

## Installation

- `git clone https://github.com/Abhinav4279/gh-repos-backend`
- `cd gh-repos-backend`
- `npm install`
- `npm run dev`
-  add github _BASE\_URL_  in root directory in _.env_ file.

### Testing

- `npm test`

### GET Routes

- visit http://localhost:5000 or https://gh-repos-backend.onrender.com/
  - /
  - /user?username={username}
  - /repos?username={username}

### API Endpoints

#### /user

- Sample Request
  - `http://localhost:5000/user?username=Abhinav4279`
- Response: 
```json
  {
    "name": "Abhinav Sharma",
    "avatar_url": "https://avatars.githubusercontent.com/u/54229503?v=4",
    "location": "Solan, H.P",
    "bio": "UG at NIT Hamirpur 🏛️ Web Developer 👨‍💻 Competitive Programmer 📊",
    "blog": "https://www.linkedin.com/in/abhinav4279/",
    "html_url": "https://github.com/Abhinav4279"
  }
```

#### /repos

- Sample Request
  - `http://localhost:5000/repos?username=Abhinav4279`
- Response:
```json
  [
    {
    "name": "Abhinav4279.github.io",
    "description": null,
    "language": "CSS",
    "html_url": "https://github.com/Abhinav4279/Abhinav4279.github.io"
    },
    {
    "name": "aboj-server",
    "description": "Web UI Repository: https://github.com/Abhinav4279/aboj-webUI",
    "language": "JavaScript",
    "html_url": "https://github.com/Abhinav4279/aboj-server"
    },
    {
    "name": "aboj-webUI",
    "description": "Assembly Online Judge",
    "language": "JavaScript",
    "html_url": "https://github.com/Abhinav4279/aboj-webUI"
    },
    {...},
    {...},
    {...},
    {...},
    {...},
    {...},
    {...},
    {...},
    {...},
    {...},
    {...},
    {...},
    {...},
  ]
```
