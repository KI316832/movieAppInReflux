var Reflux=require('reflux');
var Actions=require('../actions/MovieActions');

var MovieStore=Reflux.createStore({
  listenables:Actions,
  data:{
      moviesdata:[],
        movie:{},
        msg:''
  },
  onLoadMoviesFromServer:function(){
    console.log("inside");
    $.ajax({
      url: '/api/movies',
      type:'get',
      dataType: 'json',
      cache: false,
      success: function(movies) {
        this.data.moviesdata=movies;
        this.trigger(this.data);
    }.bind(this),
      error: function(xhr, status, err) {
        console.error('/api/movies', status, err.toString());
      }.bind(this)
      });
  },

  onDeleteMovie:function(movie_id){

    $.ajax({
        url: '/api/movies/'+movie_id,
        type:'delete',
        dataType: 'json',
        cache: false,
        success:  this.onLoadMoviesFromServer()

        });
  },
  onSearchMovie:function(title){
    console.log('--onSearchMovie--'+title);
    $.ajax({
        url: '/api/search/'+title,
        type:'get',
        cache: false,
        success: function(mv) {
          this.data.movie=mv;
          this.data.msg='';
          this.trigger(this.data);
          }.bind(this)

        })
  },
  onSaveMovie:function(formdata){
    console.log('--onsavemoviestore--');
    $.ajax({
       url: '/api/movies/',
       type:'post',
       data:formdata,
       cache: false,
       success: function(data) {
         console.log(data);
         this.data.movie={};
         this.data.msg='Movie Added Successfully';
         this.trigger(this.data);
       }.bind(this)
         });

  },
  onSelectchecked :function(checkedValues){
   $.ajax({
     url: '/api/del',
     type: 'post',
     data : 'movieDeleteObj='+checkedValues.toArray(),
     success:this.onLoadMoviesFromServer()

   });
 }


});

module.exports=MovieStore;
