console.log("this is drag and drop utility function")

const images=document.querySelectorAll('.imagebox')
const imgContainers=document.querySelectorAll('.whitebox')
let dragable=null;

//eventlistners for draggable items imagebox
images.forEach(imagebox  => {
imagebox.addEventListener('dragstart',(e)=>{
    console.log("dragstart has triggred")
    imagebox.classList.add('hold')
    dragable=e.target;
    setTimeout(() => {
        imagebox.classList.add('hide')
    }, 0);
})
imagebox.addEventListener('dragend',()=>{
    console.log('dragend has triggred')
    imagebox.classList.remove('hold','hide')

})
})
//dropping images here
imgContainers.forEach(whitebox => {
whitebox.addEventListener('dragover',e=>{
    console.log('dragover has triggred')
    e.preventDefault()
    const object=document.querySelector('.hold')
    // dragable.parentNode.removeChild(dragable);
    e.target.appendChild(object)

})
whitebox.addEventListener('dragenter',()=>{
    console.log('dragenter has triggred')
    // !whitebox.classList.add('dragenter')
})
whitebox.addEventListener('dragleave',()=>{
    console.log('dragleave has triggred')
    // !whitebox.classList.remove('dragenter')
})
// whitebox.addEventListener('drop',(e)=>{
//     console.log('drop has triggred')
//     e.target.append(imagebox);
// })
})