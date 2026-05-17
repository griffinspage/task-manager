Task Manager Application
Overview

The Task Manager Application is a modern React based productivity tool built with Next.js and Tailwind CSS. The project demonstrates the core concepts of React state management, component architecture, dynamic rendering, and side effect synchronization using hooks such as useState and useEffect.

The application allows users to create tasks, mark them as completed, delete tasks, and persist their data using the browser's local storage. The interface follows a neo minimal design approach with a clean glassmorphism inspired layout and responsive user experience.

This project was developed as a practical exercise to strengthen understanding of frontend development concepts and modern React workflows.

Features
Add Tasks

Users can create new tasks by typing into the input field and clicking the Add button or pressing the Enter key.

Toggle Task Completion

Clicking on a task marks it as completed. Completed tasks are visually distinguished using a strike through effect and reduced opacity.

Delete Tasks

Users can permanently remove tasks from the task list using the Delete button.

Persistent Storage

Tasks are automatically saved in the browser using localStorage. Data remains available even after refreshing or reopening the browser.

Responsive Design

The application is fully responsive and adapts to desktop, tablet, and mobile devices.

Modern User Interface

The interface includes:
Glassmorphism effects
Smooth transitions and hover animations
Gradient backgrounds
Rounded layouts
Minimal and professional styling

Technologies Used
Frontend Framework

React with Next.js App Router

Styling

Tailwind CSS

State Management

React Hooks

useState for managing tasks and input state

useEffect for handling persistence with localStorage
