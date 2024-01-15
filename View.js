'use strict';
class View{
  constructor(db){
    this.db = db;
    this.wrapperEmojis = document.querySelector('div#wrapperEmojis');
    this.renderAllEmojis(this.db);

  }

  renderAllEmojis(db){
    this.wrapperEmojis.innerHTML="";
    for(let key in db){
      // console.log(db[key].emoji);
      let emoji = db[key].emoji;
      // <div class="emoji">
      //   <span class="emojiIcon">🍎</span>
      //   <span>Apple</span>
      //   <span>(Red Apple)</span>
      // </div> 
      let div = document.createElement('div');
        div.setAttribute('class', 'emoji');
        let span1 = document.createElement('span');
          span1.setAttribute('class', 'emojiIcon');
          span1.innerText = db[key].emoji;
        div.appendChild(span1);
        let span2 = document.createElement('span');     
          span2.innerText = db[key].aliases;     
          span2.setAttribute('class', 'aliases');
        div.appendChild(span2);
        let span3 = document.createElement('span');
          span3.innerText = `(${db[key].description})`;
          span3.setAttribute('class', 'description');
        div.appendChild(span3);
        this.wrapperEmojis.appendChild(div);

    }
  }
}
