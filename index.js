$('select.like-select').change(function(){
    $('like-select-placeholder').attr('style', 'display: none;');
    $('select.sub-select').removeAttr('name').hide();
    $('select.'+$(this).val()).show().attr('name','sub_select_name');
});