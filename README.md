# Real-Time Tracking App

This is a real-time location tracking application built with **Node.js**, **Express**, **Socket.IO**, and **Leaflet.js**. It allows users to share their live location on a map after entering their username.

## Features

- Real-time location sharing using **Socket.IO**.
- Interactive map powered by **Leaflet.js**.
- Automatically updates the map with the latest location of connected users.
- Removes markers when a user disconnects.

## Prerequisites

- **Node.js** installed on your system.
- A package manager like **npm** or **yarn**.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd realtime_tracker
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and specify the port (optional):
   ```
   PORT=3000
   ```

4. Start the server:
    ```bash
    node app.js
    ```

5. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Usage

1. Enter your username in the input field at the top of the page.
2. Click the **Start** button to begin sharing your location.
3. Your location will be displayed on the map in real-time.
4. Other connected users will also see your location, and you will see theirs.

**Note:** The application will only start showing your location on the map after you enter your username.

## Project Structure

```
realtime_tracker/
├── public/
│   ├── css/
│   │   └── style.css       # Styles for the application
│   ├── js/
│   │   └── script.js       # Client-side JavaScript
├── views/
│   └── index.ejs           # EJS template for the main page
├── .env                    # Environment variables
├── app.js                  # Main server file
├── package.json            # Project metadata and dependencies
└── README.md               # Project documentation
```

## Technologies Used

- **Node.js**: Backend runtime environment.
- **Express**: Web framework for Node.js.
- **Socket.IO**: Real-time communication between server and client.
- **Leaflet.js**: Interactive maps.
- **EJS**: Template engine for rendering views.

## License

This project is licensed under the MIT License. Feel free to use and modify it as needed.