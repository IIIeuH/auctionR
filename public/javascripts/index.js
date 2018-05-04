class Modal{
    constructor(btn){
        $(document).on('click', '.'+btn, () => {
            $('#'+btn).arcticmodal();
        })
    }
}

$( () => {
    new Modal('login');
    new Modal('registration');
});
