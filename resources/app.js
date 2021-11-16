function startVid() {
    document.getElementById('button').style.display ='none';
    document.getElementById('wrap').style.display ='block';
    document.getElementById("bg_vid").play();
}

function moreInfo() {
    document.getElementById('wrap').style.display ='none';
    document.getElementById('moreInfo').style.display ='inline-block';
    document.getElementById('back').style.display ='flex';
}

function goBack() {
    document.getElementById('wrap').style.display ='block';
    document.getElementById('moreInfo').style.display ='none';
    document.getElementById('back').style.display ='none';
}