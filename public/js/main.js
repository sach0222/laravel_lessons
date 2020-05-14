(function () {
  'use strict';

  var cmds = document.getElementsByClassName('del');
  var i;

  for (i = 0; i < cmds.length; i++) {
    cmds[i].addEventListener('click', function (e) {
      e.preventDefault();
      if (confirm('are you sure?')) {
        console.log('form_' + this.dataset.id);
        document.getElementById('form_' + this.dataset.id).submit();
      }
    })
  };

})();