const { DateTime } = require("luxon");
const {v4: uuidv4} = require('uuid');
const stories = [
    {
        id: '1',
        title: 'My life at Charlotte',
        content: 'My life at charlotte is pretty mediocre; I just go to class, come back to my apartment and go to work, make food sometimes, and then work out, then sleep.',
        author: 'Kevin Manoj',
        createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
    },
    {
        id: '2',
        title: 'Learning NBAD',
        content: 'I have learnt HTML5, CSS, NodeJS, Express Framework, EJS Template Engine, and MVC.',
        author: 'Kevin Manoj',
        createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
    },
    {
        id: '3',
        title: 'My Spring Break',
        content: 'I am going to Paris for my birthday.',
        author: 'Kevin Manoj',
        createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
    }
];

exports.find = () => stories;

exports.findById = id => stories.find(story=>story.id === id);

exports.save = function(story) {
    story.id = uuidv4();
    story.createdAt = DateTime.now().toLocaleString(DateTime.DATETIME_SHORT);
    stories.push(story);
};

exports.updateById = function(id, newStory) {
    let story = stories.find(story=>story.id === id);
    if(story) {
        story.title = newStory.title;
        story.content = newStory.content;
        return true;
    } else {
        return false;
    }
};

exports.deleteById = function(id) {
    let index = stories.findIndex(story=>story.id === id);
    if(index !== -1) {
        stories.splice(index, 1);
        return true;
    } else {
        return false;
    }
};