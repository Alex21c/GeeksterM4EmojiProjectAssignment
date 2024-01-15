'use strict';
class Controller{ 

  constructor(view, model){
    this.view = view;
    this.model = model;
  }
  request(event, action){
    if(action === 'returnAllTheEmojisMatchingSearchQuery'){
      let searchQuery = event.target.value;
      let response = this.model.request('returnAllTheEmojisMatchingSearchQuery', searchQuery);

      // console.log('response is, ', response);
      this.view.renderAllEmojis(response);
    }
  }
 

}
