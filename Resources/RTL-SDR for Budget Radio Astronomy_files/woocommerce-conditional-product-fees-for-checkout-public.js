(function($){'use strict';jQuery(document).on('change','input[name="payment_method"]',function(){jQuery('body').trigger('update_checkout');});if(jQuery('#billing_state').length){jQuery(document).on('change','#billing_state',function(){jQuery('body').trigger('update_checkout');});}})(jQuery);