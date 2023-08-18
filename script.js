const search = document.getElementById("search")
const searchBtn=document.getElementById("submit")
const output=document.getElementById("output")
let key ="AIzaSyBSe5ibblVH__ZvJzUgmK05LPvVOqs0rf0"
// https://www.googleapis.com/books/v1/volumes?q=cat&&apikey=AIzaSyBSe5ibblVH__ZvJzUgmK05LPvVOqs0rf0
// https://www.googleapis.com/books/v1/volumes?q=cat&key=AIzaSyBSe5ibblVH__ZvJzUgmK05LPvVOqs0rf0
let getBook=()=>{
    let bookName =search.value
    const url=`https://www.googleapis.com/books/v1/volumes?q=${bookName}&&apikey=${key}`

    if(bookName.length<=0){
        output.innerHTML=""

    }else {
        fetch(url).then(res=>res.json())
        .then(data =>{
            if (data.respose =true){
                console.log(data);
                displayData(data)

            }else{
                output.innerHTML=`<h3>nothing to show</h3>`
            }
        }).catch(()=>{
            output.innerHTML=`<h3> somthing went wrong</h3>`
        })
    }
}
function displayData(data){
        output.innerHTML = '';
        data.items.forEach((book)=>{
        output.innerHTML+=`
        <div class="test">
            <div class="text-arrng">
        <h3>${book.volumeInfo.title}</h3>
        <p>${book.volumeInfo.authors}</p>
        <p>${book.volumeInfo.publisher}</p>
        <p>${book.volumeInfo.publishedDate}</p>
        <a href="${book.volumeInfo.previewLink}"target="_blank">Read    from her</a>

            </div>
            <div class="photo-arrng">
        <img src="${book.volumeInfo.imageLinks.thumbnail}"></img>
            </div>

</div>
        `
        
    })

}

searchBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    getBook()
})

search.addEventListener("keydown", function(e){
    // to make the funcation and give it a function from keyboard
    if(e.key==="enter"){
        e.preventDefault()
        getBook()
    }
})
