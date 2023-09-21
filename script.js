
/*fetch('https://api.pexels.com/v1/search?query=', {
            headers: {
                'Authorization': '9mNdAZ5zdmvZOwvg12C3K0vTKdIFIrQ6CH4p00URDv7ta3VnEVrYyjRZ'
            } pexels key
*/



function search() {
    const query = document.querySelector("#search").value;

    fetch(`https://api.pexels.com/v1/search?query=${query}`, {
        headers: {
            Authorization: '9mNdAZ5zdmvZOwvg12C3K0vTKdIFIrQ6CH4p00URDv7ta3VnEVrYyjRZ',
        },
    })
        .then((response) => response.json()).then((data) => {
            const result = document.querySelector("#results");
            result.innerHTML = data.photos.map
                ((photo) => `
                <div class="col -12 col-sm-6 col-md-4 col-lg-2">
                    <img src=${photo.src.medium} class="card-img-top" alt="">
                </div>`
                ).join("");
});

}