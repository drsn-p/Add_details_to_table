var table, flag;
$(document).ready(function () {
    let pattern =  (/^[A-Za-z ]+$/)
    table = $(".details").DataTable();
    $('.container').on('click', '#addDetail', function () {
        if($("#name").val() == ""||$("#age").val() == ""||$("#desg").val() == ""){
            Swal.fire('Please fill all inputs')
            flag = 1;
        }
        else if(!($('#name').val().match(pattern))){
            Swal.fire('please enter letters only')
            $('#name').val('');
            flag=1;
        }
        else if(!($('#desg').val().match(pattern))){
            Swal.fire('please enter letters only')
            $('#desg').val('');
            flag=1;
        }
        else if($("#age").val() < 20 || $("#age").val() > 100){
            Swal.fire('Age must be between 20 and 100')
            flag = 1;
        }
        else{
            flag = 0;
        }
        if (flag == 1) {
            return;
        }
        table.row.add([$("#name").val(), $("#age").val(), $("#desg").val()]).draw();
        $("input").val("");
        $("#staticBackdrop").modal('toggle');
    });
    $('.container').on('click', '.close', function () {
        $("input").val("");
    });
     
});