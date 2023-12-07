const { createApp } = Vue

createApp({
    data() {
        return {
            message: "hello world",
            image: "https://www.ansa.it/webimages/news_base/2023/5/29/b14c76a7eddb3b25f90aec74d596c943.jpg"
        }
    }
}).mount("#world")