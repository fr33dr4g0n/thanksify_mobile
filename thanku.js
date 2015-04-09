Router.route('/', function() {
  this.render('index');
});

Router.route('/buynow', function() {
  this.render('buynow');
});

Router.route('/howitworks', function() {
  this.render('howitworks');
});

Router.route('/stories', function() {
  this.render('stories');
});

Router.route('/faq', function() {
  this.render('faq');
});

Router.route('/contact', function() {
  this.render('contact');
});
Router.route('/privacy', function() {
  this.render('privacy');
});

Router.route('/refund', function() {
  this.render('refund');
});

Router.route('/terms', function() {
  this.render('termsofuse');
});

Router.route('/sharing', function() {
   this.render('sharing');
});




if (Meteor.isClient) {

}

if (Meteor.isServer) {

}
