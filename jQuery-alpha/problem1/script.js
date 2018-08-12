
$(document).ready(function(){
  $( "#stick" ).click(function( event ) {
    content = $("#todo").val().replace(/(?:\r\n|\r|\n)/g, '<br />');
    childcount=$( ".col-left-container" ).children().length + 1;
    card= "<div class='card' id='note"+childcount+"'>Note"childcount+"\n"+content+"</div>" ;
    $( ".col-left-container" ).append(card);
  });
});