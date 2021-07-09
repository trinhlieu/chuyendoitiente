function calculate() {
    let amount = parseInt(document.getElementById("amount").value)
    let from = document.getElementById("from").value
    let to = document.getElementById("to").value
    let convert
    if (from == "usd" && to == "vnđ") {
        convert = amount * 23000
    }else if (from == "vnđ" && to == "usd") {
        convert = amount / 23000
    } else {
        convert = amount;
    }
    document.getElementById("convert").innerHTML = convert
}