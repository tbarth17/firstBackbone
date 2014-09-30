/* global describe, it */

(function () {
    'use strict';

    describe('List of bands', function () {
            it('should render itself to the DOM', function () {
                this.view = new ListView();
                this.view.render();
              expect($('ul').length).equal(1);
            });
        });
    });
})();
