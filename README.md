# The project

This project is a successor to a project I attempted several years ago but never finished. It is fully functional, even though I still have some ideas on how I want to improve it.

The main idea is to have your goals listed in a tree like structure, where goals can have smaller subgoals, and calculate the satisfaction of a goal by averaging the satisfactions of its subgoals. The satisfaction for goals that don't have subgoals can be inputed manually.

You can add subgoals to any goal and delete any goal, as well as show / hide subgoals. At the moment there is no guard against deleting a goal with subgoals, so be careful and make sure to often save if you're making big changes.

_Note:_ the goals are not saved automatically. You can save them by pressing Ctrl+s. You can also always backup your current 

You can also backup your current data by simply backing up the user_data/goal_info.json file in the project.

All in all, this is supposed to be a way to assign an objective score to your satisfaction with different parts of life. Not sure how effective it is at measuring progress but I wanted to try such an idea for a long time and basically made this for myself. If anyone else finds this useful, that's great as well. :)

# Setup

This project is built with Angular + Electron, so the best way to install all dependencies and run the project is using npm. 

To install dependencies simply run `npm install`. Then you can run the project using `npm run electron`. This will both build the angular project, and launch the desktop app.

Since building the project takes a lot of time, you can only build it once (using `npm run electron` to launch the app) and use `npm run electron_no_build` afterwards to have a quick launch time.

# Future additions

In the future I am planning to add the following features:
* Drag and drop functionality to reorder the goals
* Option to add a weight to your subgoals to influence how the satisfactions are calculated
* Undo / redo functionality
* Add different colours to better distinguish goals
* Add themes
* Add a way to track your satisfaction over time
* Make it possible to use the app using only keyboard (add keyboard shortcuts for navigation)