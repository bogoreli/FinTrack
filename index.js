document.addEventListener("DOMContentLoaded", function (){
    const btnExpense = document.getElementById("expense-btn");
    const modal = document.getElementById("modal-expense");
    const btnExit = document.querySelector(".exit");

    btnExpense.onclick = () => {
        modal.style.display = "block";
    };

    btnExit.onclick = () => {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});