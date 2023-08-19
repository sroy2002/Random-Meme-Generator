const generateBtn = document.querySelector("button");
const memeImage = document.querySelector("img");
const memeTitle = document.querySelector("h2");
const memeAuthor = document.querySelector(".meme-author");
const updateDetails=(url,title,author)=>{
    memeImage.setAttribute("src",url);
    memeTitle.innerHTML=title;
    memeAuthor.innerHTML=(`Meme by : ${author}`);
}
const generateMeme = () => {
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then(response => response.json())
    .then(data=>{
        updateDetails(data.url,data.title,data.author);
    });
}
generateBtn.addEventListener("click",generateMeme);