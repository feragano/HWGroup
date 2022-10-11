(() => {

    for (let n = 1; n <= 100; n++) {
        n % 3 === 0 && n % 5 === 0 ? console.log('TigaLima') :
            n % 3 === 0 ? console.log('Tiga') :
                n % 5 === 0 ? console.log('Lima') :
                    console.log(n);
    }

})()