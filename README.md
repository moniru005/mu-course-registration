
# Project Title: Class Registration



## Q.1 - Project Features

Certainly, here are few important project features for students class registration system, each with an estimated credit hour cost:

#### Credit Hour Limit Enforcement: 
   - Implement a feature that ensures students cannot register for more than a specified maximum credit hour limit in selected courses.
   - Display a warning when students approach their credit hour limit during registration.
   - Students can adjust their course selections to meet the credit hour constraint after reload the course registration page.

#### Course Duplication Prevention:
   - Add a check to prevent students from registering for the same course more than once within the same semester.
   - Display clear error messages when students attempt to select a course they have already registered for.

#### Course Cart:
   - Introduce a "Course Cart" feature that allows students to add courses to a virtual cart before finalizing their registration.
   - Students can review their selected courses in the cart, make adjustments, and then confirm their registration.
   - This feature enhances the registration process by providing students with an opportunity to organize and review their course selections before officially enrolling.

These features should help improve the user experience, prevent common registration errors, and streamline the course selection.


## Q.2 - Discuss Managed the state:

Managing state effectively in a Vite.js and React-based Class Registration assignment project involves organizing my application's data and logic to ensure it operates smoothly and accurately reflects user actions. Here's a discussion on how I can manage state using Vite.js and React:

#### State Management Library:
   - Consider using a state management library to help manage my application's state. Redux and Mobx are popular choices, but in this example, I'll demonstrate how to manage state without a library for simplicity.

#### Local State:
- For small to medium-sized projects, I can start by managing state locally within React components using the useState hook. Local state is ideal for component-specific data that doesn't need to be shared globally.


## Using useState ()

Below the state using for store and update after fetch the all courses data

```bash
    const [courses, setCourses] = useState([]);
```

Below the state using for store and update every single course data.

```bash
    const [selectedCourses, setSelectedCourses] = useState([]);
```

Below the state using for store and update the remaining Credit hour for every single course. 
```bash
   const [remaining, setRemaining] = useState(0);
```

Below the state using for store and update the total selected Credit hour for every single course. 
```bash
  const [totalCreditHour, setTotalCreditHour] = useState(0);
```

Below the state using for store and update the total Price for every single course. 
```bash
  const [totalPrice, setTotalPrice] = useState(0);
```

## Using useEffect ()

Below the useEffect using for fetch the all courses data from the local json file from the public folder in the file name of  ***data.json***

```bash
    useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
```

## Installation on this projects

Install Tailwind CSS with Vite
```bash
    npm create vite@latest my-project -- --template react
    cd my-project
```
```bash
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
```
Install PropTypes for prop validation
```bash
    npm install --save prop-types
```
Install sweetalert2 for showing beautiful messages
```bash
    npm install sweetalert2
```
## Importing on this projects

Import for PropTypes validtion
```bash
    import PropTypes from 'prop-types'; // ES6
```
Import for Icons in sweetalert2
```bash
    import Swal from 'sweetalert2'
```