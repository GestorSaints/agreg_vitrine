document.querySelector(".trocar-video").addEventListener("click", function(){
    const url = prompt("Cole o link do YouTube:");

    if(url){
        const videoId = url.split("v=")[1];

        document.querySelector(".video-pergaminho").src =
        "https://www.youtube.com/embed/" + videoId;
    }
});