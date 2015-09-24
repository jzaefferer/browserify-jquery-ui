// require('./main.css');
// require('jquery-ui/themes/base/core.css');
// require('jquery-ui/themes/base/menu.css');
// require('jquery-ui/themes/base/autocomplete.css');
// require('jquery-ui/themes/base/theme.css');
var jQuery = require('jquery');
var autocomplete = require('jquery-ui/ui/widgets/autocomplete');

jQuery('<h1>Welcome to the programming languages quiz</h1>').appendTo('body');
new autocomplete({
  source: ['javascript', 'css', 'c', 'objectivec']
}).element.appendTo('body').focus();
