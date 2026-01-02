// const mysql = require('mysql');

// // Create a connection to the MySQL database
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'ecommerce_kisanseva'
// });

// // Connect to the database
// connection.connect((err) => {
//   if (err) {
//     console.error('Error connecting to MySQL database:', err);
//     return;
//   }
//   console.log('Connected to MySQL database');
// });

// // Perform database operations here
// // For example, you can execute SQL queries using connection.query()

// // Close the connection when done
// // connection.end();




const mysql = require('mysql2/promise');

// Database configuration
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ecommerce_kisanseva'
};

// Function to establish database connection and insert registration data
async function registerUser(name, email, password, confirmpassword) {
    try {
        // Create a connection to the database
        const connection = await mysql.createConnection(dbConfig);
        
        // Check if passwords match
        if (password !== confirmpassword) {
            console.log('Password do not match!');
            return;
        }

        // Prepare SQL statement to insert user registration data into the database
        const sql = "INSERT INTO registration (firstname, lastname, email, password, confirmpassword) VALUES (?, ?, ?, ?, ?)";
        const values = [name, email, password, confirmpassword];

        // Execute the SQL statement
        const [rows, fields] = await connection.execute(sql, values);

        // Close connection
        await connection.end();

        console.log('User registered successfully');
        // Redirect to success page or login page
        // Replace this with your own logic
    } catch (error) {
        console.error('Error registering user:', error);
        // Handle registration errors
        // Replace this with your own logic
    }
}

// // Example usage
// const name = 'John Doe';
// // const lastName = 'Doe';
// const email = 'john.doe@example.com';
// const password = 'password123';
// const confirmpassword = 'password123';

// registerUser(name, email, password, confirmpassword);
