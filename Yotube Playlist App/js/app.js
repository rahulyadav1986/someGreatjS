function mode_change(){
    var db_section= document.getElementById('db_section');
    var mode_change= document.getElementById('mode_change');

    db_section.classList.toggle('dark');
    mode_change.classList.toggle('active');
}

function view_change(){
    var view_change= document.getElementById('view_change');
    var change_view= document.getElementById('change_view');
    view_change.classList.toggle('active');
    change_view.classList.toggle('active');
}