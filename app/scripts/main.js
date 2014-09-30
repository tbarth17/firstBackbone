var bands = [
  {name: 'Primus'},
  {name: 'Black Sabbath'},
  {name: 'Rush'},
  {name: 'Ween'},
  {name: 'Pink Floyd'},
  {name: 'Foxy Lemon'},
  {name: 'Insects vs. Robots'},
  {name: 'Mr. Bungle'},
  {name: 'Tool'},
  {name: 'Puscifer'},
  {name: 'Oysterhead'},
  {name: 'Holy Mackarel'},
  {name: 'Sausage'}
];

var BaseView = Backbone.View.extend({
  render: function(){
    $('body').append(this.el);
  }
});

var ListView = BaseView.extend({
  tagName: 'ul',
  className: 'bandList'
});

var ItemView = BaseView.extend({
  tagName: 'li',
  className: 'bandNames hidden',

    initialize: function(names){
      this.name = names.name;
    },

    render: function(){
      this.$el.text(this.name);
      $('ul').append(this.el);
    }
});

var listView = new ListView();
listView.render();

_.each(bands, function(band){
  var itemView = new ItemView(band);
  itemView.render();
});

$("#band-search").on("keyup", function() {
        var search = $(this).val();
        $(".bandNames").show();
        if (search) $(".bandNames").not(":contains(" + search + ")").hide();

});
