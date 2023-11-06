# Paired Project Game Database
created by Rich Boyce and Tyller Mendoza

In this project, you will pick a single resource to create, read, update, and delete. This resource can be anything from hats to games to snacks.

Building this application will be a team effort that will require you to collaborate with at least one other classmate. You will build an Express server with a PostgreSQL database for the back-end application. For the front-end application, you will use React alongside CSS. Both the front-end and back-end applications should be deployed.

## Project scoring

This project has five different parts on which you will be graded. Each part is weighted differently.

- 50% of the project is scored on **completion**.
- 20% of the project is scored through the **mastery rubric**.
- 10% of the project is scored through **stretch goals**.
- 20% of the project is scored through the **teamwork rubric**.

In total, you must receive at least 70% to complete this project. For example, you could attain 35% of points through the completion requirements, 15% of points through the mastery rubric, 15% of points through the teamwork rubric, and 5% of points through the stretch goals.

> **Note**: Your contributions to this group project must be equitable. Failure to make meaningful individual contributions to this project may lead to a separate assessment of some kind or a failing grade.
>
> Please also note that team members should work _across_ the stack. One team member should not be solely responsible for the front-end application, for example.

### Completion

To complete this project, you will need to build a full-stack application that meets the following feature and technical requirements.

#### Overall requirements

1. Create a GitHub repository for both the front-end and back-end applications and upload your code to it.
1. Both the front-end and back-end applications should be successfully deployed to the web.
1. Your front-end repository should have a `readme.md` file with setup instructions for your application.
   - Your readme should also include links to your back-end GitHub repository, both of your deployed URLs, and a link to the Trello board you used to manage your work.
1. Your project should have a coherent theme and narrative.

#### Back-end feature requirements

To complete the back-end application, you will need to build a RESTful server that performs CRUD actions on a single resource.

5. Your server should incorporate at least one table that includes:
   - A primary key
   - At least 7 total fields
   - At least 4 different data types are used among those fields
1. Your table should have at least two constraints, which can include `DEFAULT` values.
1. A route exists to create new resources.
1. A route exists to read all resources.
1. A route exists to read a single resource.
1. A route exists to update a single resource.
1. A route exists to delete a single resource.
1. An appropriate "Not Found" response is given when a route is requested that does not match the created routes.

#### Front-end feature requirements

To complete the front-end application, you will need to build a React application that allows for CRUD operations to be performed on a single resource. You will also need to display the data thoughtfully and clearly.

13. All pages should include the same navigation bar, which includes the name of the application and a button to create a new resource.
1. You should have an Index page that presents all of the resources in your database table.
1. After clicking on a single resource, you should be brought to a Show page which includes more detailed information about the specific resource.
1. When the button in the navigation bar to create a new resource is clicked, you should be brought to a new page that includes a form to create a new resource. 
1. Forms should be properly labeled and the type of inputs should be properly set. For example, an input that requires a number should have type number, not text.
1. When a new resource form is submitted, the resource should be created in the database and the user should be brought to that new resource's Show page. 
1. On the resource's Show page, there should be a button to edit the current resource. When clicked, the user is brought to a form page with data already filled in that can be edited.
1. When an edited resource form is submitted, the resource should be edited in the database and the user should be brought to that new resource's Show page.
1. On the resource's Show page, there should be a button to delete the current show page. When clicked, a message is displayed that asks the user if they are sure they want to delete the resource. If the user confirms, the resource is deleted and the user is brought to the Index page.
1. Using the resource's data, perform a calculation that can be performed on the front-end application and displayed to the user. For example, if you are collecting nutritional information, you may develop an algorithm that determines whether or not the resource is healthy. If it is, a unique icon is shown alongside the resource.

### Mastery rubric

This section of the project is designed to measure your increasing skill at writing good code and following best practices.

To view components of the mastery rubric, view the appropriate assignment on Canvas.

### Stretch goals

This section of the project measures your ability to go above and beyond in creating your project. To score points in this section, you should incorporate a feature, technology, or skill not explicitly required by the project instructions.

When you submit your pull request, _make sure to include a description of any stretch goals you implemented._ You may choose from the list below or come up with features or tasks that are more relevant to your specific implementation of the project.

- The front-end application uses a CSS framework like Bootstrap.
- The back-end application responds with a detailed and RESTful response when a resource cannot be created due to invalid data.
- The front-end application provides helpful errors to users when they attempt to create or edit a resource with invalid data.
- The back-end application makes use of an external package to improve the code in some way. For example, it could use the [humps](https://www.npmjs.com/package/humps) package to convert between camel case (i.e., the default in JavaScript) and snake case (i.e., the default for table names in PostgreSQL).

Points will be allocated in this section at the discretion of the instructor.

### Teamwork rubric

This section of the project is designed to allow you and your teammate(s) to self-reflect on what it was like working in a group with one another. These skills are critical for succeeding in the course and thriving as a software developer.

To view components of the teamwork rubric, view the appropriate assignments on Canvas.

## Project setup and overview

There are no tests for this project and you _should not_ fork and clone this repository. Instead, create your own repositories with your group member(s).

## Example application

The following example application uses "Snacks" as the resource. It uses the nutritional information for snacks to determine whether or not a snack is healthy and displays that as a red heart.

### Index page

![Index page](./assets/index-page.png)

### Show page

![Show page](./assets/show-page.png)

### New page

![New page](./assets/new-page.png)

### Edit page

![Edit Page](./assets/edit-page.png)
