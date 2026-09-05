const mongoose = require('mongoose');
const Student = require('../models/Student');

const invalidId = (id) => !mongoose.isValidObjectId(id);

const createStudent = async (req, res) => {
    try {
        const { name, regNo, email } = req.body;

        if (!name || !regNo || !email) {
            return res.status(400).json({
                success: false,
                message: 'Please provide name, regNo, and email'
            });
        }

        const student = await Student.create({ name, regNo, email });

        return res.status(201).json({
            success: true,
            message: 'Student account created successfully',
            data: student
        });
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({
                success: false,
                message: 'Registration number or email already exists'
            });
        }

        if (error.name === 'ValidationError') {
            return res.status(400).json({
                success: false,
                message: error.message
            });
        }

        return res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message
        });
    }
};

const getStudent = async (req, res) => {
    if (invalidId(req.params.id)) {
        return res.status(400).json({
            success: false,
            message: 'Invalid student ID format'
        });
    }

    try {
        const student = await Student.findById(req.params.id);

        if (!student) {
            return res.status(404).json({
                success: false,
                message: 'Student not found'
            });
        }

        return res.status(200).json({
            success: true,
            data: student
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message
        });
    }
};

const updateStudent = async (req, res) => {
    if (invalidId(req.params.id)) {
        return res.status(400).json({
            success: false,
            message: 'Invalid student ID format'
        });
    }

    const { name } = req.body;

    if (!name) {
        return res.status(400).json({
            success: false,
            message: 'Please provide a name to update'
        });
    }

    try {
        const student = await Student.findByIdAndUpdate(
            req.params.id,
            { name },
            { new: true, runValidators: true }
        );

        if (!student) {
            return res.status(404).json({
                success: false,
                message: 'Student not found'
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Student profile updated successfully',
            data: student
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message
        });
    }
};

const deleteStudent = async (req, res) => {
    if (invalidId(req.params.id)) {
        return res.status(400).json({
            success: false,
            message: 'Invalid student ID format'
        });
    }

    try {
        const student = await Student.findByIdAndDelete(req.params.id);

        if (!student) {
            return res.status(404).json({
                success: false,
                message: 'Student not found'
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Student account deleted permanently',
            data: student
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message
        });
    }
};

module.exports = {
    createStudent,
    getStudent,
    updateStudent,
    deleteStudent
};