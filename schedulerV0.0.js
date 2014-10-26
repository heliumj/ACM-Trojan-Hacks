$(document).ready(function()
{
	//var RemoveButton = $('<button>Remove</button>');
	//RemoveButton.addClass('Remove');
	var RemoveButton = '<button class="Remove">Remove</button>';
	//var TimeButton = '<'
	var counter = 0;
	$('button.ReqClass').on('click', function(){
		var ReqClassForm = $('<li><div>Required Class'+counter+RemoveButton+'</div>'+
								'<div>Class Name <input type="text" name="className[]"/> </div>'+
								'<div>Class ID <input type="text" name="classID[]"/></div>'+
								'<ul class="classTime">Class Times <button class="Time">Add Time</button><li><div><input type="datetime" name="time[]"/></div></li></ul>'+
							'</li>');
		counter ++;
		$(this).parent('div').children('ul').first().append(ReqClassForm);
	});
	$('div.ReqClass').on('click', 'button.Remove',function(){
		$(this).parent('div').parent('li').remove();
	});
	$('div.ReqClass').on('click', 'button.Time',function(){
		var AddTimeForm = $('<li><div><input type="text" name="datetime[]"/>'+ RemoveButton+ '</div></li>');
		$(this).parent('ul').append(AddTimeForm);
	});
});