document.getElementById("button").innerHTML = '<button onclick="Sum()">Result</button>'

function Sum() {
    let sumtype = eval(document.getElementById("Screen").value);
    //document.getElementById("Screen"). value = sumtype;
    view = sumtype < 4 ? 'Below' : 'Over';
    alert(view);

}
