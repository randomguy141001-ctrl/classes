const express = require('express');
const connectDB = require('./config/db');
const studentRoutes = require('./routes/studentRoutes');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the Student Portal API',
        endpoints: {
            create: 'POST /api/students',
            read: 'GET /api/students/:id',
            update: 'PUT /api/students/:id',
            delete: 'DELETE /api/students/:id'
        }
    });
});

app.use('/api/students', studentRoutes);

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found'
    });
});

app.use((error, req, res, next) => {
    console.error(error.stack);
    res.status(500).json({
        success: false,
        message: 'Something went wrong on the server'
    });
});

const startServer = async () => {
    try {
        await connectDB();
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    } catch (error) {
        process.exitCode = 1;
    }
};

if (require.main === module) {
    startServer();
}

module.exports = app;