const express = require('express');
const { check } = require('express-validator');
const asyncHandler = require('express-async-handler');

const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Course, Deck } = require('../../db/models');

const router = express.Router();

const validateCourse = [
    check('name')
        .exists({ checkFalsy: true })
        .isLength({ min: 1 })
        .withMessage('Please provide a valid course name.'),
    check('description')
        .exists({ checkFalsy: true })
        .isLength({ min: 25 })
        .withMessage('Please provide a breif description of your course at least 25 characters'),
    handleValidationErrors
];


// Getting Course information
router.get(
    '/:courseId',
    asyncHandler(async (req, res) => {
        const courseId = req.params.courseId
        const courseInfo = await Course.findOne({ where: { id: courseId } });
        const courseDecks = await Deck.findAll({ where: { courseId: courseId } });
        const creatorInfo = await User.findOne({ whene: { id: courseInfo.creatorId } })
        return res.json({
            courseInfo,
            courseDecks,
            creatorInfo,
        })
    })
)

// Creating a course
router.post(
    '/:userId/course',
    validateCourse,
    asyncHandler(async (req, res) => {
        const { name, description } = req.body;
        const course = await Course.create({
            name: name,
            description: description,
            creatorId: req.params.userId
        });
        // console.log(course)
        return course;
    })
);

module.exports = router;
