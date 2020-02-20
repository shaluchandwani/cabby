# cabby
Cabby is a Travel website.

[![Build Status](https://travis-ci.com/shaluchandwani/cabby.svg?branch=develop)](https://travis-ci.com/shaluchandwani/cabby)
[![Reviewed by Hound](https://img.shields.io/badge/Reviewed_by-Hound-8E64B0.svg)](https://houndci.com)
[![Reviewed by Hound](https://img.shields.io/github/issues/shaluchandwani/cabby.svg?style=flat-square)](https://houndci.com)  [![Coverage Status](https://coveralls.io/repos/github/shaluchandwani/cabby/badge.svg?branch=develop)](https://coveralls.io/github/shaluchandwani/cabby?branch=develop) [![Maintainability](https://api.codeclimate.com/v1/badges/fbf4e41d7d7846a0bee6/maintainability)](https://codeclimate.com/github/shaluchandwani/cabby/maintainability)

Pivotal Tracker Project link - https://www.pivotaltracker.com/n/projects/2435464

### Steps to Setup the DB:PostgreSQL

  It will install the packages required
 `npm install`

  This will start your database before that make sure you have PostreSQL Database installed
 `brew services start postgresql`

  Initaillize Sequelize
 `sequelize init`

  create database
 `createdb @DBNAME`

  create model
 `sequelize model:create --name @tablename --attributes title:string, price:string, description:string`

  create table
 `sequelize db:migrate OR If it throws error Use : npm run sequelize`

 ## Run application with Docker
 * Install Docker on your machine
 * Clone the repository 
 * Copy the file ***.env.sample*** then rename it to ***.env***.  
 * In the `.env file` Set database host as `db`
 * Set the following `POSTGRES_USER=your_db_user_name`
       - `POSTGRES_PASSWORD=User_PASSWORD`
       - `POSTGRES_DB=POSTGRES_DB`
 * Run `docker-compose up` To run the application with docker   
 * wait to see the message `Listening on port 3000.......` 
