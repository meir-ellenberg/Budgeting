let main = document.querySelector('main');

request('GET', '/months/2018/11', result => {
    console.log(result);
    main.innerHTML = render(result);
});