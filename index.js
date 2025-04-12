document.addEventListener("DOMContentLoaded", function (){
    const btnExpense = document.getElementById("expense-btn");
    const modalExpense = document.getElementById("modal-expense");

    const btnEntrance = document.getElementById("entrance-btn");
    const modalEntrance = document.getElementById("modal-entrance");

    btnExpense.onclick = () => {
        modalExpense.style.display = "block";
    };

    btnEntrance.onclick = () => {
        modalEntrance.style.display = "block";
    };

    const btnExit = document.querySelectorAll(".btnExitModal");
    btnExit.forEach(btn => {
        btn.onclick = () => {
            modalEntrance.style.display = "none";
            modalExpense.style.display = "none";
        }
    });

    window.onclick = function (event) {
        if (event.target.classList.contains("modal")) {
            event.target.style.display = "none";
        }
    };
});