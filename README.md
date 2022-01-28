# It is a create react app project:

### Steps to run the application:

1. `clone the project or unzip the attachment this project(if you are reading it in your editor, you would have already completed step-1)`.
2. `cd react-coding-test`
3. `npm install`( I am using Node Version - 14.15.4)
4. `npm start`
5. `open[http://localhost:3000/]`

Alternatively, if you are a Docker person, I have provided a very simple Dockerfile. Build and run the docker - Port 3000 is exposed.

## Assessment:

Things Covered as a part of this test:

- UI Rules mentioned in the Requirement Document is covered.
- 3 Reusable Components
- Included react router to add Site Configuration Page
- A shared component under components/shared - FeatureFlagSettings - Which can be used in Any routes/pages.
- Schema folder - which returns raw schema which can be fetched from API using axios (will be updating in future).

Additional:

1. React-Router - yes, it is not required for this single page UI task. I could visualize the requirement as a module(Feature Flag Module) which can be a part of any big SPAs. So to isolate it from other modules/pages, I created a separate route using react-router dom.

2. components/core - Since the wireframe screenshot in the requirement document mentions Toggle Component, there is no need of creating core, shared components and all. But, yet I had it for the following reasons:

   - Toggles can be used in any pages (and also any application that follows the common design system)
   - Instead of making toggle to have nested items inside it, I created two different components,
     1. Toggle
     2. NestedList ( which wraps toggle component inside it), so that Toggle can be used anywhere independently.
     3. If any design system specific to Dataminr exists or in pipeline, separation of components would help creating a UI library for Dataminr.

3. @types:
   There will two places where types are specified, one inside the src/ folder and another inside components/ folder.
   Reason: if the components are to be extracted out of the application layer, there should not be any dependency.

4. Unit Testing: In progress
   I usually write unit testing as part of development like TDD but since from the interview perspective, for the quicker completion, I was sharing it without unit tests and will be writing.

5. State management:
   For the same reason, why I have included Route, I thought of include Redux for state management, but Redux store's state is something that we need to define based on many factors such as component communication, data model etc, and also timely submission of factor, I made a trade off of not including Redux.
   And yes, for this requirement, Redux is overkill, provided in future, based on requirement, redux could add value to it.
