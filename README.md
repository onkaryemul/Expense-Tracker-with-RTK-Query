# Expense Tracker with RTK Query

A full-stack Expense Tracker application built using the MERN stack and powered by Redux Toolkit Query (RTK Query) for advanced data fetching and caching for tracking and visualizing expenses effortlessly.


## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)


## Features

- **Expense Tracking**: Keep track of your income and expenses.
- **Graphical Representation**: Visualize your spending habits with a doughnut chart.
- **Category Labels**: Categorize transactions with color-coded labels.
- **Transaction History**: View and delete past transactions.
- **Dynamic Data Fetching**: Utilizes RTK Query for efficient data fetching and caching.


## Technologies Used

- **Frontend**: React, Redux Toolkit, RTK Query, Chart.js
- **Backend**: Node.js, Express, MongoDB
- **Database**: MongoDB Atlas
- **Other Tools**: Postman (API testing tool), Lodash, Boxicons, Axios, Cors


## Installation

1. **Clone the repository:**

   ```bash
     git clone https://github.com/onkaryemul/Expense-Tracker-with-RTK-Query.git
   ```

2. **Navigate to the project directory:**

   ```bash
     cd Expense-Tracker-with-RTK-Query
   ```

3. **Open terminals for both client and server and Install dependencies for both client and server in respective terminal by using following command:**

   ```bash
     npm install
   ```
   

## Usage
 
1. **Create a .env file in the project root and add your News API key:
      Set up the MongoDB Atlas connection by creating a `config.env` file in the `server` directory with your MongoDB URI:**

   ```env
     PORT=3001
     ATLAS_URI=your_mongodb_atlas_uri
   ```

    Replace your_mongodb_atlas_uri with your actual mongodb atlas connection url.
    Make sure to replace placeholders like `yourusername` and `yourpassword` in the MongoDB URI with your actual MongoDB credentials. 

3. **Again, Open terminals for both client and server and Run the project using following command in respective directory or terminal**

    ```bash
      npm start
    ```

4. **Open your web browser and go to [http://localhost:3000](http://localhost:3000) to access the application.**

5. **Add transactions using the form.**

6. **View graphical representation and transaction history.**

7. **Explore and contribute to the codebase.**


## Contributing

Contributions are welcome! Feel free to fork the repository, make improvements, and submit a pull request. Please follow best practices and maintain code clarity.
   
