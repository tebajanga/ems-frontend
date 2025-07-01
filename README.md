# Employee Management System (Frontend)

A demo React-based frontend application for managing employee records, designed to work with the EMS backend API.



## Features

- **Employee Dashboard**: View all employees in a paginated table
- **CRUD Operations**: Create, read, update, and delete employee records
- **Responsive Design**: Works on desktop and mobile devices
- **Form Validation**: Client-side validation for all forms
- **API Integration**: Seamless connection with EMS backend

## Technologies Used

| Category        | Technology       |
|-----------------|------------------|
| Framework       | React 18         |
| State Management| React Context API|
| HTTP Client     | Axios            |
| Routing         | React Router v6  |
| Build Tool      | Vite             |

## Prerequisites

- Node.js (v22 or higher)
- npm (v10 or higher) or yarn
- EMS Backend API (running locally or deployed)

## Installation

1. Clone the repository:
```
git clone https://github.com/tebajanga/ems-frontend.git
cd ems-frontend
```

2. Install dependencies:

```
npm install
# or
yarn install
```

3. Start the development server:

```
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3000`


## Connecting to Backend

Ensure your EMS backend is running and properly configured:

1. Update the API base URL.

2. Verify CORS settings in the backend

3. The frontend expects the backend to be running on `http://localhost:8080` by default.


## Deployment
### Building for Production
```
npm run build
# or
yarn build
```

### Serving Production Build

```
npm run preview
# or
yarn preview
```