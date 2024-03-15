function getCharacters(done){
    const results = fetch("https://rickandmortyapi.com/api/character")
    
    results
    .then(response => response.json())
    .then(data=> {
        done(data)
    })
}

getCharacters(data => {
    data.results.forEach(personaje => {  
    const article = document.createRange().createContextualFragment(`
    
    <article>
    <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
            <img src="${personaje.image}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-5">
            <div class="card-body">
                <h5 class="card-title">${personaje.name}</h5>
                <p>${personaje.status}</p>
                <p>${personaje.species}</p>
                <p>${personaje.type}</p>
                <p>${personaje.gender}</p>
                <p>${personaje.origin.name}</p>
            </div>
            </div>
        </div>
    </div>
    </article>
    `)

    const main = document.querySelector("#card")
    main.append(article)

    })
})