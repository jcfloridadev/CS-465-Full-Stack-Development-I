/*
 * Developer: Justin Carlo Florida
 * Course: CS-465 Full Stack Development I
 * Module Two: MVC Architecture
 * Description: Controller for the Travlr Getaways homepage.
 */

const index = (req, res) => {
    res.render('index', { title: 'Travlr Getaways' });
};

module.exports = {
    index
};
