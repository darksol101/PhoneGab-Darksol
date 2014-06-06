$(document).ready(function() {
	var ul = $('#space_content ul');
    $("#space_content ul li input").css('width','auto');
	ul.find('li[parent-id]').each(function () {
        ul.find('li[parent-id=' + $(this).attr('li-id') + ']').wrapAll('<ul />').parent().appendTo(this)
    });

    $("#jform_username").removeAttr('readonly');
	
	 $("#space_content > ul > li > input").change(function () {
        $(this).next().find('input').prop('checked', this.checked);
    });


    $("#jform_profile_newsletter").val('1').prop('checked',true);
	$("#space_content input").prop('checked',true);

	$("#form_profile_interest ul").css('list-style:none');
	$(".optional").hide();
   

	$("#jform_profile_newsletter").bind({
        click: function() {
       		if ($(this).is(':checked')) {
            	$(this).val('1');
            	$("#space_content,#jform_profile_interest-lbl").show();
            	
			}else{
				$(this).val('0');
                $("#space_content input").prop('checked',false);
            	$("#space_content,#jform_profile_interest-lbl").hide();
           	}
        }
    });
});
