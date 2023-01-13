const sidenav = document.querySelectorAll('.sidenav ')
M.Sidenav.init(sidenav,{
    edge : "right",
    draggable : true,
    
})
const image =document.querySelector('.slider')
M.Slider.init(image,{
    indicators : false,
    interval : 4500,
    trnasition : 800,
    height : 500
})

const paralax = document.querySelector('.parallax')
M.Parallax.init(paralax)


const materialBox = document.querySelectorAll('.materialboxed')
M.Materialbox.init(materialBox)


const about = document.querySelectorAll('.scrollspy')
M.ScrollSpy.init(about,{
    scrollOffset : 50,
    throttle : 200
})


const waktuTujuan = new Date('jun 29 2023 00:54:00').getTime()
const put = document.querySelector('.diskon')

const show = setInterval(function(){
    
    const waktuSekarang = new Date().getTime()
    let selisih = waktuTujuan-waktuSekarang;
    const hari = Math.floor(selisih / (1000*60*60*24))
    const jam =Math.floor(selisih % (1000*60*60*24)/(1000*60*60))
    const menit =Math.floor(selisih % (1000*60*60)/(1000*60))
    const detik =Math.floor(selisih % (1000*60)/1000)
    //console.log(selisih)
    
    put.innerHTML = `waktu diskon ${hari} hari ${jam} jam ${menit} menit,dan ${detik} detik `
   if(selisih > 6000){
       const checkout = document.querySelector('.checkout')
       checkout.addEventListener('click',()=>{
           clearInterval(show);
           put.innerHTML='terimakasih pesanan anda berhasil di checkout'
           
       })
   
   }else if(selisih < 60000){
       clearInterval(show)
       put.innerHTML= 'vocer discound anda sudah kadaluarsa'
}

})
const dnone = document.querySelector('.dnone')
const dtogle = document.querySelector('#gost')
const from = document.querySelector('.reset')
dtogle.classList.remove('progress')
console.log(dnone)

const scriptURL = 'https://script.google.com/macros/s/AKfycbyrWtzmY5_XxDefkr11jitpyQOyVfuu5SZ_cmU4sQVyab_cJUB_yCtZs1rqli0BC4go5w/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    dtogle.classList.toggle('progress')
    dnone.classList.toggle('d-none')
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        alert('data anda berhasil terkirim')
        dnone.classList.toggle('d-none')
        dtogle.classList.toggle('progress')
        from.reset()

        console.log('Success!', response)})
    .catch(error => console.error('Error!', error.message))
})
