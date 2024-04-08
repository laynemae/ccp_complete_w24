function showDateTime() {
    var my_time = new Date();
    document.getElementById('dateTime').innerHTML = my_time;
    document.getElementById('dateTime').style.display = 'block'; 
    document.querySelector('button').style.display = 'none'; 
}