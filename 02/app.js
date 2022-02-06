document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');
    
    // setBorderColorAsync(divList[0], 'red', function() {
        // setBorderColorAsync(divList[1], 'blue', function() {
            // setBorderColorAsync(divList[2], 'green', function() {
                // console.log('finish');
            // });
        // });
    // });


    const setBorderColorAsync = (element, color) => {
        const promise = new Promise((resolve, reject) => {
            const time = Math.random() * 3000;
            if( element && element instanceof HTMLElement ) {
                setTimeout(() => {
                    element.style.border = `3px solid ${color}`;
                    resolve()
                }, time);
            }
            else {reject('Parametr ~element~ musi być prawidłowym elementem DOM');}
        });
        return promise;
    } 

    setBorderColorAsync(divList[0], 'red')
        .then(() => setBorderColorAsync(divList[1], 'blue'))
        .then(() => setBorderColorAsync(divList[2], 'green'))
        .catch((err) => console.log(err) )
        .then(() => {
            console.log('finish')
        })
}






