function check() {
    let message = document.getElementById("View").value;
    let text = (message == 'Employee') ?
        'Hello' : (message == 'Director') ?
        'Greetings' : (message == '') ?
            'No login' : '';
    alert(text);

}