var Reflux=require('reflux');

var Actions=Reflux.createActions([
"loadMoviesFromServer","deleteMovie","searchMovie","saveMovie","selectchecked","login","register","logout"
]);

module.exports=Actions;
