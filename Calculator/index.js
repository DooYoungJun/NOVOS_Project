document.addEventListener("DOMContentLoaded", () => { //DOM의 인터페이스의 일부로 웹페이지의 구조를 표현한다.
    const result = document.querySelector("#result");
    const operator = document.querySelector("#operator");
    const num0= document.querySelector("#num-0");
    const num1 = document.querySelector("#num-1");
    const num2 = document.querySelector("#num-2");
    const num3 = document.querySelector("#num-3");
    const num4 = document.querySelector("#num-4");
    const num5 = document.querySelector("#num-5");
    const num6 = document.querySelector("#num-6");
    const num7 = document.querySelector("#num-7");
    const num8 = document.querySelector("#num-8");
    const num9 = document.querySelector("#num-9");
    const plus = document.querySelector("#plus");
    const minus = document.querySelector("#minus");
    const divide = document.querySelector("#divide");
    const multiply = document.querySelector("#multiply");
    const calculate = document.querySelector("#calculate");
    const clear = document.querySelector("#clear");
    let numOne = "";
    let numTwo = "";
});

    const clickNum = (e) => {
        if (operator.value == "") {
            //연산자 칸이 비었다면
            numOne += e.target.textContent;
            result.value += e.target.textContent;
        } else if (operator.value !== "") {
            //연산자 칸이 비어있지 않다면
            numTwo += e.target.textContent;
            result.value += e.target.textContent;
        }
    };

    const clickOperator =  (e) => {
        if (result.value =="") {//결과 값이 비어있는데 연산자를 클릭한다면
            alert("숫자를 먼저 입력하세요");
        } else {
            result.value = ""; // 결과값 나타내는 인풋창 초기화
            operator.value = e.target.textContent;
        }
    };

    const clickCalculate = () => {
        if (operator.value == "+") {
            result.value = Number(numOne) + Number(numTwo);
        }
        if (operator.value == "-") {
            result.value = numOne - numTwo;
        }
        if (operator.value == "*") {
            result.value = numOne * numTwo;
        }
        if (operator.value == "/") {
            result.value = numOne / numTwo;
        }
    };

    const setClear = () => {
        result.value = "";
        operator.value = "";
        numOne = "";
        numTwo = "";
    };

    num0.addEventListener("click", clickNum);
    num1.addEventListener("click", clickNum);
    num2.addEventListener("click", clickNum);
    num3.addEventListener("click", clickNum);
    num4.addEventListener("click", clickNum);
    num5.addEventListener("click", clickNum);
    num6.addEventListener("click", clickNum);
    num7.addEventListener("click", clickNum);
    num8.addEventListener("click", clickNum);
    num9.addEventListener("click", clickNum);

    puls.addEventListener("click", clickOperator);
