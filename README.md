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
~~For that reason I'm introducting inertia as from I understand this allows me to continue to use Laravels routing and keeps it in a MVC pattern.~~ I discovered that going with inertia meant I would have to tamper with the API that has been defined. It's whole thing is being able to build SPA's without an API, so I decided to revert back to using api calls.

My initial plan is finish a set of views for the existing api routes, and then maybe add a couple of my own components to do a map and 3D scene. This way I can complete the requirements and afford myself some time later to jump on the cool bits!

I installed husky to run linting / typescript compile checks pre git commit - however I struggled to figure out how to have it run reliably through sail and docker (with git credentials) so I've commented it out for now - I'll do manual checks for the interim and maybe look into it again later

### Testing

My next step is getting my testing setup in the simple components I've put together, once I'm happy with that I can roll them out to any further components. The bulk of the testing will be component testing using React Testing Library and jest. I will however add a few playwright E2E tests to test some user behaviour I feel that might not be covered as well as testing accessibility.

Once I have all the basic MVP components together I can start to think about the presentation and how I break these down into reusable components, having the initial tests in place will be benefitial to make sure I don't break anything in the process.

### Playwright
You will have to install playwright by running as root user to install the operating system dependencies.

I did this with "sail root-shell"

Then ->  npm init playwright@latest

With the following options:

✔ Where to put your end-to-end tests? · e2e
✔ Add a GitHub Actions workflow? (y/N) · false
✔ Install Playwright browsers (can be done manually via 'npx playwright install')? (Y/n) · true
✔ Install Playwright operating system dependencies (requires sudo / root - can be done manually via 'sudo npx playwright install-deps')? (y/N) · true


### Refactoring Components

It dawns on me that number of the views displaying Farms, Turbines, Inspections etc could be pretty similar and represented by one or a few components. That is if I wanted to just show them individually, but the api-spec describes relation ships so for the moment I am going to keep them as seperate views and I will look for an opportunity to refactor later.


### Data Structure

It gets a lot more difficult to manage and call everything when displaying grades as you need to make calls to inspections and components then map all the data together. It's time to upgrade the solution I think - I'm going to look at introducitng Rest hooks to help make the code more manageable. Because I have setup a number of tests on each view hopefully it won't be too much trouble to swap in.

I was hoping rest-hooks or Reactive Data Client as its now known would help me with doing client side foreign key joins but it hasn't unfortunately. It can normalize data that is in one big structure but doesnt seem to have the mechanisms to describe relationships. It still does a lot of nice things such as data caching but I may have to just do manual maps.

### Component Reuse

There is definitely opportunity to reuse some of the lists for example passing a farm_id to the Turbines component and having it only display a subset but I think I'm going to do it the simple way first and then optimise after if I can find a nice way to correlate the route params with a different url call.


### Map
I've looked at a few options to implement a map, I've gone with leaflet react as it was open source and quite easy to get going! I've placed it on the Turbines views because they contained Lat/Lng data. I was consider also putting it on the farms view and using any linked turbine to give it a position. It's also a tricky one to test, I don't really want to test that the map works - but I can just check that the components it sits within still function.

### 3D Viewer

I created a 3D model of a wind turbine, exported it from Blender and used React Three Fiber to display and play an animation. With some more time I could create a number of models with different defects and use the component grades to display different models.

### Authentication

I put in a basic login page and front end auth framework (react auth kit) to handle managing the front end access. However I have left the API implementation for as I am new to Laravel it would take me a bit of time to figure out everything I need. From a quick look over documents I believe my steps would be:

* create a database migration file to create the users table
* create a user model
* create an authentication controller
* validate credentials
* generate a jwt access token
* add auth route
* guard api routes 
* setup middleware to guard protected api routes - token would be sent by front end and decoded to check if user can access


### Things I would improve

* I'm missing a number of routes such as /turbines/:turbineID/inspections/:inspectionID. I couldn't quite find a way to reuse my components with rest-hooks which left me having manually create a component for each combination which just didnt feel right. I couldn't quite get it working but I was attempting to create a generic TableView component that could recieve a FetchFunction to call for its data and is parms such as farmId and turbineId via an HOC. That would have dramatically cut down on the number of components to maintain and test I feel but I couldn't quite think of the right way to do it. My attempts at finding the right typescript type for the fetch function of useSuspense and passing in it and a param resulted in console errors.

* React Data Client (Rest-Hooks) has a peer dependency mismatch an expects a lower version of React and react-dom. However lowering version breaks my tests so I did an override in package.json. If I had noticed earlier I may have went with a different direction however forcing react 18 does not seem to impact its function. (Thankfully!)

* Find nicer workaround for Leaflet  vs Three canvas collisions - I had to do a hacky solution for now. I wouldn't want to have to do something like that in production so would probably swap leaflet maps out with something else if I couldnt find a solution. What I think happens is that the THREE canvas initialisation triggers a re-initialisation of the leaflet canvas container and that throws an error. So if Leaflet initialises first after the 3D canvas then its fine.

* In resources/js/schema/endpoints.tsx I define a number of api rest end points that all are currently hard coded to localhost - I would like to replace with an env variable for being able to deploy the app into different environments

* Same as above for e2e tests - currently hardcoded to localhost

* login validation is very basic and could be made more meaningful for the user

* generally the presentation - which I felt got the briefest of passes

* A number of e2e tests reporting flaky - it may be the AsyncBoundary/Loading Page that's tripping up the tests or the api call time, im not sure - they are not fully deterministic which is something I would look to address. For now I just bumped up the retry count.

* Improve e2e tests to include more than just Title. I left it at title, as I was mainly interested in ensuring navigating through the application didnt result in broken or missing pages. Inspecting any data could result in having to update the tests on every seed.

* created and updated properties on entities should be parsed to date objects so rest-hooks knows when to make resources stale

* 3D turbine should reset the blade back to position on "View Blade", some times it doesn't

* test coverage - I've included a number of tests but I definitely haven't covered all components