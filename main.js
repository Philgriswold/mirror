const eventTag = document.getElementById("message")
const eventArticle1 = document.getElementById("box1")
const eventArticle2 = document.getElementById("box2")

eventTag.addEventListener("keyup", () => {
    console.log(event)
    eventArticle1.innerHTML = event.target.value
    eventArticle2.innerHTML = event.target.value
});




















// ANSWER
// const articleBuilder  = (item) => {
//     return`
//         <div>
//             <artilce>${item.text}</article>
//             <article>${item.text}</article>
//         </div>
//        `
//  }
//  const input = document.getElementById("message");
//  const articles = document.getElementById("art1");
//  const articleTwo = document.getElementById("art2");
//  input.addEventListener("keyup", () => {
//     articles.innerHTML = event.target.value
//  })
//  input.addEventListener("keyup", () => {
//     articleTwo.innerHTML = event.target.value
//  })

//  this is the JS portion