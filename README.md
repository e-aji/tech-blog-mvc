# Tech Blog (MVC)

## Description 

The aim of this project is to create a full stack application which is a tech blog where where developers can publish their blog posts and comment on other developers’ posts as well. This application follwows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## Table of Contents 

* [Criteria](#criteria)
* [Usage](#usage)
* [Built With](#built-with)
* [Images](#images)
* [License](#license)
* [Links](#links)

## Criteria

* It's done when the `/` homepage route renders a list of all projects from the database.

* It's done when the `/project/:id` route renders an individual project's details based on the route parameter id.

* It's done when the `/login` route renders a form to log in and a form to create a new account.

* It's done when an existing user can enter their credentials on the login page to create a session on the server.

* It's done when a new user can create an account on the login page and then be immediately logged in with a session.

* It's done when the `/profile` route renders the logged-in user's projects and a form to create a new project.

* It's done when only a logged in user can visit the `/profile` route.

* It's done when a logged in user is redirected to `/profile` when they try to visit `/login` again.

* It's done when a user on the profile page can use the form to create a new project in the database.

* It's done when a user on the profile page can select a "Delete" button to remove their project from the database.

* It's done when a logged-in user can select a "Logout" button to remove their session.

* It's done when the session for a logged-in user expires after a set time.

* It's done when the API routes to create and delete posts are protected from non logged-in users.

* It's done when the code is organized using MVC architecture.

* It's done when the views are rendered with Handlebars.js templates.

## Usage 

* Open the link to the depolyed application (can be found in the 'links' section)
* Once opened, you will be directed to the homepage where you can view pre-existing blog posts including infotmation about when they were written and who they were written by.
* You can then click on each post and view the comments associated with that post.
* To create your own blog post and make comments on other blog posts, you will need to sign-up.
* Navigate to the login page and you will be presented with the option to either sign up or login (if you have already signed up)
* Once you have signed up, you will ba directed to your profile page where you can see any posts you have written and also be able to create new posts.  
* You are also able to delete or edit any posts that were previously created as well as comment on blog posts made by other people.

## Built With 

* Node.js
* Express.js
* Sequelize
* Handlebars.js 
* MVC architecture
* PostgreSQL

## Images 

**Below are images of the deployed application**

![Screenshot 2024-05-04 at 17 01 54](https://github.com/e-aji/tech-blog-mvc/assets/156595423/0730ed6d-47f1-48be-9420-39e6e3101969)

![Screenshot 2024-05-04 at 17 01 46](https://github.com/e-aji/tech-blog-mvc/assets/156595423/0a6ae535-eb59-448b-bce4-64ff069f12a4)

![Screenshot 2024-05-04 at 17 02 09](https://github.com/e-aji/tech-blog-mvc/assets/156595423/d41cc8f0-a0e4-4577-87a0-dd8a0a9d4899)

![Screenshot 2024-05-04 at 17 01 05](https://github.com/e-aji/tech-blog-mvc/assets/156595423/819e03a3-8bc8-45b7-89cd-ee958f5d5b56)

![Screenshot 2024-05-04 at 17 01 14](https://github.com/e-aji/tech-blog-mvc/assets/156595423/06c589e6-9571-4e3e-8654-b4ea8b320bee)

## License 

Licensed under the MIT license.

## Links 

Link to deployed application - https://tech-blog-mvc-u1o0.onrender.com 
