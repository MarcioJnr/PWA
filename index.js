window.addEventListener('load', ()=>{
    registerSW()
})

async function registerSW(){
    if('serviceWorker' in navigator){
        try{
            await navigator.serviceWorker.register('./sw.js')
        } catch(e){
            console.log(`SW registration failed`);
        }
    }
}

const closeApp = () => {
    window.open('', '_self', '');
    window.close();
}

$("#myModal2").on('show.bs.modal', function (e) {
    $("#myModal1").modal("hide");
  });
