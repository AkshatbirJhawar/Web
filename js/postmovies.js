const formEl = document.querySelector('.form');

formEl.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(formEl);
    const data = object.fromEnteries(formData)



    //validate that the fields have data results
    if(data.title == "" || data.genre == ""|| data.release_year == ""){
        $.toaster({priority : 'danger', title : 'error', message : 'oops something broke'});
    }
    else{
        fetch('',{
            method: 'Post',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
        .then(data => console.log(data))
        .then(error => console.log(error))
        $.toaster({priority : 'success', title : 'Movies add', message : 'new Movie added to the library'});

    }
});
