'use strict';
let model = new Model(db);
let view = new View(db);
let controller = new Controller(view, model);

let emojiSearch = document.querySelector('input#emojiSearch');
emojiSearch.addEventListener('keyup', (event)=>controller.request(event, 'returnAllTheEmojisMatchingSearchQuery'));
