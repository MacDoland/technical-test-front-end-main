## About Software Development @ Cyberhawk



## The task
We've designed this task to try and give you the ability to show us what you can do and hopefully flex your technical and creative muscles. You can't show off too much here, show us you at your best and wow us!

To make things as simple as we could, we've opted to use [Laravel Sail](https://laravel.com/docs/8.x/sail) to provide a quick and convenient development environment, this will require you to install
[Docker Desktop](https://www.docker.com/products/docker-desktop) before you can start the test. We've provided [some more detailed instructions](#setting-everything-up) below in case this is your first time using Docker or Sail.

We'd like you to build the front-end of an application that will display an example wind farm, its turbines and their components and inspections.
We'd like to be able to see components and their grades (measurement of damage/wear) ranging between 1 - 5.

We've provided a pre-built API and an API spec document `api-spec.yaml` that we'd like you to consume to provide the functionality requested.

Don't be afraid of submitting incomplete code or code that isn't quite doing what you would like, just like your maths teacher, we like to see your working.
Just Document what you had hoped to achieve and your thoughts behind any unfinished code, so that we know what your plan was.

### Requirements
- Display a list of farms, turbines, components, inspections and grades
- Each Turbine should have a number of components
- A component can be have a grade from 1 to 5 (1 being perfect and 5 being completely broken/missing) via an inspection
- Conform to the spec provided in the `api-spec.yaml` file in the root of this project.

### Bonus Points
- Great UX/UI
- Use of React JS
- Use of Tailwind CSS
- Use of 3D
- Use of a web map technology in the display of the data
- Automated tests
- API Authentication
- API Authorization
- Use of coding style guidelines (we use PSR-12 and AirBnb)
- Use of git with clear logical commits
- Specs/Plans/Designs

### Submitting The Task
We're not too fussy about how you submit the task, providing it gets to us and we're able to run it we'll be happy however here are some of the ways we commonly see:
- Fork this repo, add us as a collaborator on your GitHub repo and send us a link
- ZIP the project and email it to us at andy.rayne@thecyberhawk.com / joe.ware@thecyberhawk.com

## Setting Everything Up
As mentioned above we have chosen to make use of Laravel Sail as the foundation of this technical test.
- If you haven't already, you will need to install [Docker Desktop](https://www.docker.com/products/docker-desktop).
- One that is installed your next step is to install this projects composer dependencies (including Sail).
    - This will require either PHP 8 installed on your local machine or the use of [a small docker container](https://laravel.com/docs/8.x/sail#installing-composer-dependencies-for-existing-projects) that runs PHP 8 that can install the dependencies for us.
- If you haven't done so already copy the `.env.example` file to `.env`
    - If you are running a local development environment you may need to change some default ports in the `.env` file
        - We've already changed mysql to 33060 and NGINX to 81 for you
- It should now be time to [start Sail](https://laravel.com/docs/8.x/sail#starting-and-stopping-sail) and the task
- There is a file in the root of this project called `api-spec.yaml` this can be imported into your application of choice to ensure you're building your application to the spec that we're expecting. Some notable applications are:
  - Postman
  - Swagger
  - StopLight

- You can seed the pre-built API using the commands:
  - `sail artisan migrate --seed`


### Installing Composer Dependencies
https://laravel.com/docs/9.x/sail#installing-composer-dependencies-for-existing-projects
```bash
docker run --rm \
-u "$(id -u):$(id -g)" \
-v $(pwd):/var/www/html \
-w /var/www/html \
laravelsail/php81-composer:latest \
composer install --ignore-platform-reqs
```

### Quick Tips
- Don't run npm/composer from your host, always run it via the sail command
  - This is because the docker container may not be able to write to the filesystem after you do so
- Ensure you have a valid .env file before starting sail for the first time.
  - Sail creates a docker volume which is persistent, so stopping/starting sail will not affect/fix issues in a volume (missing DB etc)

## Your Notes

### General notes
First step is to set up the project foundations such as adding TS, linting, tests.

Then some simple views that render all the models for each controller

Just for transparency - I am completely new to Laravel, I'm learning how it works as I go along. I'm trying my best to build my application in way that feels like an extension of the framework rather than something bolted on. 
~~For that reason I'm introducting inertia as from I understand this allows me to continue to use Laravels routing and keeps it in a MVC pattern.~~ I discovered that going with inertia meeant I would have to tamper with the API that has been defined, as it's whole thing is being able to build SPA's without an API, so decided to revert back to using api calls.

I have some rough designs on some screens I would like to build which I'll send through via email later. My initial plan is finish a set of views for the existing controllers, and then maybe add a couple of my own to do a map and 3D scene. This way I can complete the requirements and afford myself some time later to jump on the cool bits!

I installed husky to run linting / typescript compile checks pre git commit - however I struggled to figure out how to have it run reliably through sail and docker (with git credentials) so I've commented it out for now - I'll do manual checks for the interim and maybe look into it again later

### Testing

My next step is getting my testing setup in the simple components I've put together, once I'm happy with that I can roll them out to any further components. The bulk of the testing will be component testing using React Testing Library and jest. I will however add a few playwright E2E tests to test some user behaviour I feel that might not be covered as well as testing accessibility.

Once I have all the basic MVP components together I can start to think about the presentation and how I break these down into reusable components, having the initial tests in place will be benefitial to make sure I don't break anything in the process.


### Refactoring Components

It dawns on me that number of the views displaying Farms, Turbines, Inspections etc could be pretty similar and represented by one or a few components. That is if I wanted to just show them individually, but the api-spec describes relation ships so for the moment I am going to keep them as seperate views and I will look for an opportunity to refactor later.


