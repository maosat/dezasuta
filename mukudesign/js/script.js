$(function(){
    var $filter = $('.work-page__filter [data-filter]'),
        $item = $('.work-page__list [data-category]');

        $filter.click(function(e){
            e.preventDefault();
            var $this = $(this);

            $filter.removeClass('work-page__active');
            $this.addClass('work-page__active');

            var $filterItem = $this.attr('data-filter');
            if($filterItem == 'all'){
                $item.removeClass('work-page__active').fadeOut().promise().done(function(){
                    $item.addClass('work-page__active').fadeIn();
                });
            } else{
                $item.removeClass('work-page__active').fadeOut().promise().done(function(){
                    $item.filter('[data-category = "' + $filterItem + '"]').addClass('work-page__active').fadeIn();
                });
            }
        });
});