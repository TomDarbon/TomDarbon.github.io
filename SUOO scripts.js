
document.addEventListener('click', function(e){
  if(e.target.matches('.gallery img')){
    const src = e.target.getAttribute('src');
    const modal = document.createElement('div');
    modal.style.position='fixed';
    modal.style.left=0;modal.style.top=0;modal.style.right=0;modal.style.bottom=0;
    modal.style.background='rgba(0,0,0,0.85)';modal.style.display='flex';modal.style.alignItems='center';modal.style.justifyContent='center';
    modal.innerHTML = '<img src="'+src+'" style="max-width:90%;max-height:90%;border-radius:6px">';
    modal.addEventListener('click', ()=>modal.remove());
    document.body.appendChild(modal);
  }
});
