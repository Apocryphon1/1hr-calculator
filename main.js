var calcLogic = function (eqn) {

    tempArr = eqn.split(" ");
    temp = 0;
    nmb = 0;
    operator = "";

    for (i = 0; i < tempArr.length; i += 2) {
        nmb = parseInt(tempArr[i]);
        switch (operator) {
            case "x":
                temp = temp * nmb;
                break;
            case "/":
                temp = temp / nmb;
                break;
            case "-":
                temp = temp - nmb;
                break;
            case "+":
                temp = temp + nmb;
                break;
            default:
                temp = temp + nmb;
                break;
        }
        operator = tempArr[i + 1];
    }

    input = document.getElementById("inputSpan");
    input.innerHTML = temp;
}

var btnTrigger = function (btnEle) {
    var btnValue = btnEle.getAttribute("data-tip");

    var input = document.getElementById("inputSpan");

    switch (btnValue) {
        case "x":
        case "/":
        case "+":
        case "-":
            input.innerHTML += " " + btnValue + " ";
            break;

        case "C":
            let temp = input.innerHTML;
            splittedTemp = temp.split('');
            if (splittedTemp[splittedTemp.length - 1] == ' ') {
                splittedTemp.pop();
                splittedTemp.pop();
                splittedTemp.pop();
            } else {
                splittedTemp.pop();
            }
            temp = splittedTemp.join('');
            input.innerHTML = temp;
            break;

        case "CA":
            input.innerHTML = "0";
            break;

        case "=":
            calcLogic(input.innerHTML);
            break;
        default:
            if (input.innerHTML == "0") {
                input.innerHTML = btnValue;
            } else {
                input.innerHTML += btnValue;
            }
    }

}