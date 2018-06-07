+function($) {
    'use strict';

    var modals = $('.modal.multi-step');

    modals.each(function(idx, modal) {
        var $modal = $(modal);
        var $bodies = $modal.find('div.modal-body');
        var total_num_steps = $bodies.length;
        var reset_on_close = $modal.attr('reset-on-close') === 'true';

        function reset() {
            $modal.find('.step').removeClass('d-block animated');
            $modal.find('[data-step]').removeClass('d-block animated');
        }

        function goToStep(step) {
            reset();
            var to_show = $modal.find('.step-' + step);
            if (to_show.length === 0) {
                // at the last step, nothing else to show
                return;
            }
            var animateWelcomeText = function () {
                $('.welcome-modal .animated').removeClass('animated');
                $(this).addClass('animated');
            };
            to_show.toggleClass('d-block animated');
            findFirstFocusableInput(to_show).focus();
        }

        function findFirstFocusableInput(parent) {
            var candidates = [parent.find('input'), parent.find('select'),
                    parent.find('textarea'),parent.find('button')],
                winner = parent;
            $.each(candidates, function() {
                if (this.length > 0) {
                    winner = this[0];
                    return false;
                }
            });
            return $(winner);
        }

        function bindEventsToModal($modal) {
            var data_steps = [];
            $('[data-step]').each(function() {
                var step = $(this).data().step;
                if (step && $.inArray(step, data_steps) === -1) {
                    data_steps.push(step);
                }
            });

            $.each(data_steps, function(i, v) {
                $modal.on('next.m.' + v, {step: v}, function(e) {
                    goToStep(e.data.step);
                });
            });
        }

        function initialize() {
            reset();
            $modal.find('.step-1').addClass('d-block animated');
            bindEventsToModal($modal, total_num_steps);
            $modal.data({
                total_num_steps: $bodies.length,
            });
            if (reset_on_close){
                //Bootstrap 3
                $modal.on('hidden.bs.modal', function () {
                    reset();
                    //$modal.find('.step-1').show();
                    $modal.find('.step-1').addClass('d-block');
                })
            }
        }

        initialize();
    })
}(jQuery);
