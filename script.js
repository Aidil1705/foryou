function kirimPesan1() {
    const pesan = document.getElementById('pesan1').value
    const userId = 1629367241
    const token = "6609725318:AAEEvspY7d5kxr8w30gzWt6w_ocB7Rq8maA"
    fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${userId}&text=${pesan}`);
    alert("Berhasil mengirim pesan!")
}
function kirimPesan2() {
    const pesan = document.getElementById('pesan2').value
    const userId = 1629367241
    const token = "6609725318:AAEEvspY7d5kxr8w30gzWt6w_ocB7Rq8maA"
    fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${userId}&text=${pesan}`);
    alert("Berhasil mengirim pesan!")
}
function kirimPesan() {
    const pesan = document.getElementById('pesan').value
    const userId = 1629367241
    const token = "6609725318:AAEEvspY7d5kxr8w30gzWt6w_ocB7Rq8maA"
    fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${userId}&text=${pesan}`);
    alert("Berhasil mengirim pesan!")
}
const pindah = document.getElementById("pesan2");

pindah.addEventListener("mouseover", movehover )

function movehover(){
    const i=Math.floor(Math.random()*250)+1 ;
    const j=Math.floor(Math.random()*250)+1 ;

    pindah.style. left=i+"px"
    pindah.style. top=j+"px"
}
gambar1.addEventListener("click", click )

// function click(){
//     var img = document.getElementById('gambar1');
//     img.src = 'gb.jpg';
// }
