const form = document.getElementById('getDogs');
const select = document.getElementById('dogs');
const containerEl = document.getElementById('container');

form.addEventListener('submit',function(e){
    e.preventDefault();
    const dogsVal = select.value;

    fetch(`https://dog.ceo/api/breed/${dogsVal}/images`)
        .then(res => res.json())
        .then(data => {
            const imgs = data.message.map(img => `<img src="${img}">`).join('')

            containerEl.innerHTML = imgs;

        })
        .catch(err => console.log(err))
    
})

