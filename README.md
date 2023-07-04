# Reeviu app 

[Project description and summary]

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. `git clone git clone https://github.com/AbdulAbdullah/fullstack.git`
2. `cd reeviu`
3. `npm install`
4. To run on browser `npm run web`

## Setting up the backend

1. Setup Python virtual env
```bash
python3 -m venv .venv
```

2. Activate env
```bash
source .venv/bin/activate
```

3. Install all Server dependencies
```bash
pip install -r requirements.txt
```

4. Setting up the database with postgreSQL and Pgadmin

5. download and set it up with your username and password `https://www.postgresql.org/`

6. download pgAdmin4 `https://www.pgadmin.org/` 

7. connect PostgreSQL wit pgAdmin4
- register the server name:
![Alt text](<Screenshot from 2023-07-02 15-19-14.png>)

- connect with your username password and click the save button save
![Alt text](<Screenshot from 2023-07-02 15-27-39.png>)

- create a database with the database name as reeviu

8. Migrate all the django models to your database from your virtual environment in terminal
```bash
./manage.py migrate
```

9. Start your backend server
```bash
./manage.py runserver
``` 


## Usage

[Instructions for using the project]

## Features

[List of features and functionality]

## Contributing

[Instructions for contributing to the project]

## License

[Information about the project's license]