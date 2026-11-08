/*
 * Developer: Justin Carlo Florida
 * Course: CS-465 Full Stack Development I
 * Module Two: MVC Architecture
 * Description: Controller for the Travlr Getaways travel page.
 */

const travel = (req, res) => {
    res.render('travel', { title: 'Travlr Getaways' });
};

module.exports = {
    travel
};
