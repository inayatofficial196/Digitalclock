function clock(){
    let hours = document.getElementById('hours');
    let menates = document.getElementById('menates');
    let seconds = document.getElementById('seconds');
    let priod = document.getElementById('priod');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let ampm = h >= 12 ? 'PM' : "AM";

    if(h >= 12){
         h - 12;
    }

    hours.innerHTML = h;
    menates.innerHTML = m;
    seconds.innerHTML = s;
    priod.innerHTML = ampm;

}
setInterval(clock ,1000);