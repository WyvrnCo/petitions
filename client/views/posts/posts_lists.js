Template.petitionGroup.events({
  'change #petition-order': function(evt) {
     Session.set("postOrder", evt.currentTarget.value);
  },
  'click #load-more': function () {
    Session.set('postsLimit', Session.get('postsLimit') + 12);
  },
  'click #tag-select': function () {
    console.log(evt.currentTarget.value);
    Session.set('tag', evt.currentTarget.value);
    console.log(tag);
  }
});

Template.petitionGroup.rendered = function () {
  $('[data-toggle="tooltip"]').tooltip();
};
