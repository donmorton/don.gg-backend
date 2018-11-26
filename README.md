# Don.gg Backend
The backend portion for my personal website

## Set up
Project set up documented on MacOS. Please contact the Donald Morton or update the documentation if set up varies by machine.


### Quickstart
Want to skip all the explanations, database and redis set up? Fine. Make sure your enviroment variables are set. You should have -

```
PORT=

MYSQL_DATABASE_HOST='localhost' # MySQL Host
MYSQL_DATABASE_USER='' # MySQL Username
MYSQL_DATABASE_PASSWORD='' # MySQL Password
MYSQL_DATABASE_DB='yummy_development' # MySQL Databbase Name
```

### Set up environment variables
Add authentication credentials to your local environment variable file. Currently there is an example environment variables file. This file has values that will need to be set after copying them over into a `.env` file.
```sh
cp .env.example .env  # don't forget to change the MYSQL_DATABASE_USER and MYSQL_DATABASE_PASSWORD variables!
```

Make sure the `.env` file is located in `./src`

### Create database locally
These commands operate under the assumption you have already created a MySQL user on your local machine. [Digital Ocean](https://www.digitalocean.com/community/tutorials/how-to-create-a-new-user-and-grant-permissions-in-mysql) has a great tutorial on how to do this.
```sh
mysql -u $USER -p
create database don_dev;
exit;
mysql -u $USER -p --database=don_dev < don_dev.sql.dump
```

### Run API in development mode locally
When constantly making changes to the server it is helpful to have everything restart on save (hot-reloading). Running the API in development mode will save you the hassle of stopping and then restarting to check changes(live reloading). Ensure that mysql-server is running on your machine as well. You can check by listing services running i.e `brew services list`. If it is not green (not running), `brew services stop mysql && brew services start mysql`. (For some reason the `restart` command puts the process in a warning state.) Navigate to your preferred browser at the endpoint below to start using it. You might find [Postman](https://www.getpostman.com/apps) helpful. Enjoy! :tada:
```sh
npm i
npm run-script dev
```
