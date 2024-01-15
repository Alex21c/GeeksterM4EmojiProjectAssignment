'use strict';
class Model{
  constructor(db){
    this.db = db;
    
  }
  request(action, searchQuery){
    if(action === 'returnAllTheEmojisMatchingSearchQuery'){
      return this.returnAllTheEmojisMatchingSearchQuery(searchQuery);
    }
  }

  returnAllTheEmojisMatchingSearchQuery(searchQuery){
   return this.db.filter((value)=>{
      
      return (value.aliases.includes(searchQuery) || value.tags.includes(searchQuery) || value.description.includes(searchQuery));
      // return (value.description.includes(searchQuery));
      // return (value.category.indexOf(searchQuery) !== -1 );
    })
  }

  
}
