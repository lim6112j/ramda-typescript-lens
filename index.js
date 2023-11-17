"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var R = require("ramda");
var game = {
    name: 'Keep talking and nobody explodes',
    genres: ['Puzzle', 'VR'],
    publisher: {
        name: 'Steel Crate Game',
        location: 'Ottawa, Canada'
    }
};
var name = R.lensProp("name");
R.view(name, game);
