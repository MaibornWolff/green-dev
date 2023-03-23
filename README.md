# Green Dev

## Lesson 1: Web Development

### Getting started

#### Requirements

Ideally, you should have a recent version of Node with NPM installed.
Suggested versions are:
* Node Version >= 16
* NPM Version >= 8

If you don't have Node installed, you can download it from the official [Node Homepage](https://nodejs.org/en/download).

#### Downloading the repository

You can download the repo to your computer, by clicking on the green `Code` button.

If you have `git` installed, you can clone the repo.

If you don't have `git`, just choose the option to download the code as a zip file. 

![image](https://user-images.githubusercontent.com/128626672/227161051-04720be0-70db-44cc-878b-16317f57bca6.png)

#### Starting the server

From the root of the project, you can now run the following commands.

```
npm install 
```
This will download the node modules listed in the package-lock and package.json which are necessary to run the server.
```
npm run serve
```
Now you can start a script to prepare and build the source files using a bundler called [parcel](https://parceljs.org/). Eventually, parcel starts a web server on http://localhost:1234
