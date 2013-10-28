Movies = new Meteor.Collection("movies");
// Movies:
// - name
// - ratingCount
// - sumOfRatings

if (Meteor.isClient) {
  Template.movies.movies = function () {
    return Movies.find();
  };

  Template.movie.events({
    'click input.rate': function (event) {
      var score = $(event.currentTarget).parent().find(".ratingScore").val();
      if (score !== "none") {
        score = parseInt(score);
        Movies.update(this._id, {$inc: {sumOfRatings: score, ratingCount: 1}});
      }
    }
  });

/*
  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
*/
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
