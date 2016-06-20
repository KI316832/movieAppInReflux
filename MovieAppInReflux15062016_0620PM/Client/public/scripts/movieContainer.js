var React=require('react');
var ReactDOM=require('react-dom');
var Router=require('react-router').Router;
var IndexRoute=require('react-router').IndexRoute;
var Route=require('react-router').Route;
var browserHistory=require('react-router').browserHistory;
var Link=require('react-router').Link;


var Reflux=require('reflux');
var Actions=require('../actions/MovieActions');
var Store=require('../store/MovieStore');
var LoginStore=require('../store/LoginStore');

var NavigationBar=React.createClass({
  render:function()
  {return(
    <div className="navbar navbar-inverse mynav">
        <div className="container ">
          <div className=" navbar-collapse collapse navbar-responsive-collapse">
          <ul className="nav navbar-nav ">
                <li><Link to="/home" >Home</Link></li>
                <li><Link to="/movies">Movie</Link></li>
                <li><Link to="/searchAndSave">Add Movie</Link></li>
                <li className="pull-right"><Link to="/logout">Log Out</Link></li>
          </ul>
          </div>
          </div>
      </div>
    );
  }
});

var MainLayout=React.createClass({
  render:function()
  {
    return(
    <div className="container" id="main">
      <NavigationBar />
      <main>
        {this.props.children}
      </main>
    </div>
  );
  }
});

var Home=React.createClass({
  render:function(){
    return(
    <div className="container">
    <div className="row">
    <h4 className='text-center'>10 Movies Must Watch Before You Die</h4>
    </div>
    </div>)
  }
});

var SearchMovie=React.createClass({
  mixins:[Reflux.listenTo(Store,'onStore')],
  getInitialState: function(){
    return {
      name:'',
      data:{},
      msg:''
    }
  },
  onStore:function(data){
    this.setState({data:data.movie});
    this.setState({msg:data.msg});
  },

 handleSubmit:function(){
   this.setState({name:''});
   var movieForm=$('#saveMovie').serialize();

   Actions.saveMovie(movieForm);



},
  submit: function (e){
    var self
    e.preventDefault()
    self = this
    alert(this.state.name);
    Actions.searchMovie(this.state.name);
},
clearForm: function() {
    this.setState({
      name: ''
    });
  },

  nameChange: function(e){
    this.setState({name: e.target.value})
    //this.setState({msg: 'Please Enter A Movie Title'})
  },
render: function (){
     return (
       <div className="container col-md-12">
       <div className=" row well" >
       <form onSubmit={this.submit} >
        <div className='searchBar'>
        <BasicInputBox label="Name:" valChange={this.nameChange} val={this.state.name}/>
        <button type="submit" className='form-control btn-info'>Search</button>
        </div>
        </form>
       </div>
       {this.state.data.Title!=undefined ? <form id="saveMovie">
           <div className={'form-group row'}>
              <label for="title" className={'col-sm-6 form-control-label'}>Title: </label>
              <div className={'col-sm-6 title'}>
                 <input type="text" className={'form-control input-tag'} name="Title" defaultValue={this.state.data.Title} required="required"/>
              </div>
            </div>
           <div className={'form-group row'}>
              <label for="releasedate" className={'col-sm-6 form-control-label'}>Year: </label>
              <div className={'col-sm-6 date'}>
                 <input type="number" className={'form-control input-tag'} name="Year" defaultValue={this.state.data.Year} required="required"/>
              </div>
           </div>

           <div className={'form-group row'}>
              <label for="director" className={'col-sm-6 form-control-label'}>Release Date: </label>
              <div className={'col-sm-6 director'}>
                 <input type="text" className={'form-control input-tag'} name="Released" defaultValue={this.state.data.Released} required="required"/>
              </div>
           </div>
           <div className={'form-group row'}>
              <label for="actors" className={'col-sm-6 form-control-label'}>Runtime: </label>
              <div className={'col-sm-6 actors'}>
                 <input type="text" className={'form-control input-tag'} name="Runtime" defaultValue={this.state.data.Runtime} required="required"/>
              </div>
           </div>
           <div className={'form-group row'}>
              <label for="actors" className={'col-sm-6 form-control-label'}>Genre: </label>
              <div className={'col-sm-6 actors'}>
                 <input type="text" className={'form-control input-tag'} name="Genre" defaultValue={this.state.data.Genre} required="required"/>
              </div>
           </div>
           <div className={'form-group row'}>
              <label for="actors" className={'col-sm-6 form-control-label'}>Director: </label>
              <div className={'col-sm-6 actors'}>
                 <input type="text" className={'form-control input-tag'} name="Director" defaultValue={this.state.data.Director} required="required"/>
              </div>
           </div>
           <div className={'form-group row'}>
              <label for="actors" className={'col-sm-6 form-control-label'}>Writer: </label>
              <div className={'col-sm-6 actors'}>
                 <input type="text" className={'form-control input-tag'} name="Writer" defaultValue={this.state.data.Writer} required="required"/>
              </div>
           </div>
           <div className={'form-group row'}>
              <label for="actors" className={'col-sm-6 form-control-label'}>Actors: </label>
              <div className={'col-sm-6 actors'}>
                 <input type="text" className={'form-control input-tag'} name="Actors" defaultValue={this.state.data.Actors} required="required"/>
              </div>
           </div>
           <div className={'form-group row'}>
              <label for="about" className={'col-sm-6 form-control-label'}>Plot: </label>
              <div className={'col-sm-6 about'}>
                 <textarea className={'form-control input-tag'} name="Plot" defaultValue={this.state.data.Plot} rows="5" cols="10">
                 </textarea>
              </div>
           </div>
           <div className={'form-group row'}>
              <label for="actors" className={'col-sm-6 form-control-label'}>Language: </label>
              <div className={'col-sm-6 actors'}>
                 <input type="text" className={'form-control input-tag'} name="Language" defaultValue={this.state.data.Language} required="required"/>
              </div>
           </div>
           <div className={'form-group row'}>
              <label for="actors" className={'col-sm-6 form-control-label'}>Country: </label>
              <div className={'col-sm-6 actors'}>
                 <input type="text" className={'form-control input-tag'} name="Country" defaultValue={this.state.data.Country} required="required"/>
              </div>
           </div>
           <div className={'form-group row'}>
              <label for="actors" className={'col-sm-6 form-control-label'}>Awards: </label>
              <div className={'col-sm-6 actors'}>
                 <input type="text" className={'form-control input-tag'} name="Awards" defaultValue={this.state.data.Awards} required="required"/>
              </div>
           </div>
           <div className={'form-group row'}>
              <label for="actors" className={'col-sm-6 form-control-label'}>Poster: </label>
              <div className={'col-sm-6 actors'}>
                 <input type="text" className={'form-control input-tag'} name="Poster" defaultValue={this.state.data.Poster} required="required"/>
              </div>
           </div>
           <div className={'form-group row'}>
              <label for="actors" className={'col-sm-6 form-control-label'}>Metascore: </label>
              <div className={'col-sm-6 actors'}>
                 <input type="text" className={'form-control input-tag'} name="Metascore" defaultValue={this.state.data.Metascore} required="required"/>
              </div>
           </div>
           <div className={'form-group row'}>
              <label for="actors" className={'col-sm-6 form-control-label'}>IMDB rating: </label>
              <div className={'col-sm-6 actors'}>
                 <input type="text" className={'form-control input-tag'} name="imdbRating" defaultValue={this.state.data.imdbRating} required="required"/>
              </div>
           </div>
           <div className={'form-group row'}>
              <label for="actors" className={'col-sm-6 form-control-label'}>IMDB Votes: </label>
              <div className={'col-sm-6 actors'}>
                 <input type="text" className={'form-control input-tag'} name="imdbVotes" defaultValue={this.state.data.imdbVotes} required="required"/>
              </div>
           </div>
           <div className={'form-group row'}>
              <label for="actors" className={'col-sm-6 form-control-label'}>IMDB ID: </label>
              <div className={'col-sm-6 actors'}>
                 <input type="text" className={'form-control input-tag'} name="imdbID" defaultValue={this.state.data.imdbID} required="required"/>
              </div>
           </div>
           <div className={'form-group row'}>
              <label for="actors" className={'col-sm-6 form-control-label'}>Type: </label>
              <div className={'col-sm-6 actors'}>
                 <input type="text" className={'form-control input-tag'} name="Type" defaultValue={this.state.data.Type} required="required"/>
              </div>
           </div>
           <input type="hidden" className={'form-control input-tag'} name="Rated" defaultValue={this.state.data.Rated} />
           <input type="hidden" className={'form-control input-tag'} name="Response" defaultValue={this.state.data.Response} />

     <div className={'form-group row adbt'}>
     <div className={'col-sm-offset-4 col-sm-6'}>
     <button type="button" onClick={this.handleSubmit} className={'btn btn-info pull-right'}>Save</button>
     </div>
     </div>
     </form>

          :this.state.msg!=''?<div><h3 className='text-center'>Movie Added Successfully</h3></div>:<div></div>}
    </div>

     );
}
});



/************************************
      BasicInputBox start
************************************/
var BasicInputBox = React.createClass ({
 render: function (){
   return (
     <div className='searchBar'>
     <input type="text" className='form-control' onChange={this.props.valChange} value= {this.props.val} placeholder="Search Here..."/>
      </div>
   );
 }
});

/***********************************
        DeleteMovieComponent
**************************************/
var DeleteMovie = React.createClass ({

delete:function(e){
    var deleteConfirm=confirm('Are you sure want to delete ?');
    if(deleteConfirm){
        Actions.deleteMovie(this.props.movie_id);
        //Actions.loadCommentsFromServer();
        }
  },
 render: function (){
   return (
  <form onClick={this.delete}>
  <button className="btn btn-danger" type="button" value={this.props.movie_id} name="movie_id">Delete</button>
  </form>
  );
 }
});

/***************************************
            AddMovie Component
****************************************/
var AddMovie = React.createClass({

   submit: function (e){
     var self
     e.preventDefault()
     self = this
     console.log("this.state       "+this.state);
     var data = {
       name: this.state.name.trim()
     }

     $.ajax({
       type: 'post',
       url: '/api/movies',
       data: data
     })
     .done(function(data) {
       self.clearForm()
     })
     .fail(function(fail) {
       console.log('failed to register');
     });

   },

   clearForm: function() {
     this.setState({
       name: "",
     });
   },

   nameChange: function(e){
     this.setState({name: e.target.value})
   },

   render: function(){
      return (

        <div className="container col-md-12">
        <div className=" row well" >
        <form onSubmit={this.submit} >
         <div className='searchBar'>
         <BasicInputBox label="Name:" valChange={this.nameChange} val={this.state.name}/>
         <button type="submit" className='form-control btn-info'>Search</button>
         </div>

       </form>
      </div>
      </div>
     );
   }

});

/*****************************************************
                Preparing MovieList
******************************************************/
var MovieList = React.createClass ({

 render: function (){
   var data=this.props.data;
   console.log('---MovieList---'+data);
   if(data.length>0){
     var out=data.map(function(movie){
       return(

       <div key={movie._id} className='container'>
       <div key={movie._id} className='row well'>
       <div key={movie._id} className="col-md-4">
 <img id="bgposter"  alt={movie.Title} src={movie.Poster} className="img-rounded center-block"/>
 </div>
 <div className="col-md-8">
 <input type="checkbox" name={movie._id} value={movie._id}/>
 <h3>{movie.Title}</h3>
 <h4>Year :{movie.Year} </h4>
 <h4>Actors :{movie.Actors}</h4>
 <h4>Director :{movie.Director}</h4>
 <h4>Description :{movie.Plot}</h4>
 <h4>Language :{movie.Language}</h4>
 <h4>Country :{movie.Country}</h4>
 <h4>Released on :{movie.Released}</h4>
 <h4>ImdbRating :{movie.imdbRating}</h4>
 <h4>Awards :{movie.Awards}</h4>
 <DeleteMovie  movie_id={movie._id}/>
 </div>
 </div>
</div>
    )
  })
}

   return (
     <div>{out}</div>
   );
 }
});

/***************************************
        GetAllMovies Component
****************************************/
var GetAllMovies = React.createClass({
  mixins:[Reflux.listenTo(Store,'onStore')],
  getInitialState:function(){
    return{
      data: []
    };
  },
  componentDidMount: function() {
    Actions.loadMoviesFromServer();
  },
  onStore:function(movies){
    this.setState({data:movies.moviesdata})
  },
  selectchecked :function(){
var checkedValues = $('input:checkbox:checked').map(function() {
    return $(this).val();
  });
Actions.selectchecked(checkedValues);
},
  render: function(){
       return (
         <div><form>{this.state.data.length>0?<input type="button" value="Multi Delete" className="btn btn-danger" onClick={this.selectchecked}/>:<h4 className="text-center">Please Add Movies to See On Your Dash Board</h4>}
         <MovieList data={this.state.data} /></form></div>
      );
    }
});

var LoginComponent = React.createClass({
  mixins :[
    Router.Navigation,
    Reflux.listenTo(LoginStore, 'onStoreUpdate')],
  onStoreUpdate : function(data){
    localStorage.setItem('user', data.user);
    localStorage.setItem('token', data.token);
    if(data.user != null && data.token != null){
      console.log(data.user);
      this.loginSuccess();
    }
  },
  loginSuccess(){
    browserHistory.push('/main');
  },
  doLogin : function(e){
    e.preventDefault();
    var data = $('#loginForm').serialize();
    Actions.login(data);
  },
  render : function(){
    return(

      <div className="container">
      <div className="row jaffa">

        <div className="col-md-4 col-md-offset-4">
          <div className="panel panel-default">

              <div className="panel-heading">

                <h3 className="panel-title">Login Here</h3>
              </div>
              <div className="panel-body">
                  <form role="form" id="loginForm">
                      <fieldset>
                          <div className="form-group">
                              <input className="form-control" placeholder="E-mail" name="email" type="email" autofocus />
                          </div>
                          <div className="form-group">
                              <input className="form-control" placeholder="Password" name="password" type="password" />
                          </div>
                          <center>
                            <button type="button"  id="loginButton" className="btn btn-info form-control" onClick={this.doLogin} >
                            Login</button>
                            <hr/>
                            <p>New User?<Link to="/register"> Register</Link></p>
                          </center>

                      </fieldset>
                  </form>
              </div>
            </div>
      </div>
   </div>
</div>
    );
  }
});

var RegisterComponent = React.createClass({
  mixins : [Reflux.listenTo(Store, 'onStoreUpdate')],
  onStoreUpdate : function(){
    this.clear();
  },
  clear : function(){
    $('#registerForm')[0].reset();
  },
  doRegister : function(e){
    e.preventDefault();
    var data = $('#registerForm').serialize();
    Actions.register(data);
  },
  render : function(){
    return(
    <div className="container">
    <div className="row jaffa">

      <div className="col-md-4 col-md-offset-4">
        <div className="panel panel-default">
          <div className="panel-heading">
          <h3 className="panel-title">Register Here</h3>
          </div>
          <div className="panel-body">
                  <form role="form" id="registerForm">
                      <fieldset>
                          <div className="form-group">
                            <input type="text" className="form-control" name="name" id="name"  placeholder="Name"/>
                          </div>
                          <div className="form-group">
                              <input type="email" className="form-control" name="email" id="email"  placeholder="Email"/>
                          </div>
                          <div className="form-group">
                            <input type="password" className="form-control" name="password" id="password"  placeholder="Password"/>
                          </div>


                      </fieldset>
                  </form>
                  <div className="form-group">
                  <button type="button" className="btn btn-info form-control" id="registerButton"
   onClick={this.doRegister}>Register</button>
                  </div>
                    <hr/>
                      <div className="form-group text-center">
                    <p><Link to="/">Click Here To Login</Link></p>
                      </div>
              </div>
        </div>
      </div>
    </div>
    </div>




  );
  }
});

var LogOutComponent=React.createClass({
  componentDidMount: function() {
    Actions.logout();
    browserHistory.push('/');
  },render: function(){
         return (
          <div></div>
        );
      }
});

ReactDOM.render(
  (
    <Router history={browserHistory}>
    <Route path="/" component={LoginComponent}/>
    <Route path="/register" component={RegisterComponent}/>
      <Route path="/main" component={MainLayout}>
       <IndexRoute component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/movies" component={GetAllMovies} />
        <Route path="/searchAndSave" component={SearchMovie} />
        <Route path="/logout" component={LogOutComponent} />
      </Route>
    </Router>
),document.getElementById('content'));
