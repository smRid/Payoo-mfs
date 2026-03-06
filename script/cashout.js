document.getElementById('cashout-btn').addEventListener('click', function(){
    const currentBalance = getBalance();

    const agentNumber = getValueFormInput('agent-number');
    if(agentNumber.length !== 11){
        alert("Invalid Agent Number");
        return;
    }
    const cashoutAmount = getValueFormInput('cashout-amount');
    const newBalance = currentBalance - Number(cashoutAmount);
    if(newBalance < 0){
        alert("Insufficient Balanced.");
        return;
    }
    
    const pin = getValueFormInput('input-pin');
    if(pin.length === 4){
        alert("Cashout Successful.")
        setBalance(newBalance);

        //Time and date
        const now = new Date();

        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0'); 
        const year = now.getFullYear();

        let hours = now.getHours();
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');

        const ampm = hours >= 12 ? 'PM' : 'AM';


        //Transactions record
        const history = document.getElementById('history-container');
        const newHistory = document.createElement('div');
        newHistory.innerHTML = `
        <div class="transaction-card p-4 bg-base-100 rounded-lg flex justify-between">
                <div class="flex gap-2 items-center">
                    <div class="p-3 rounded-[50%]">
                        <img src="./assets/opt-1.png" alt="">
                    </div>
                    <div>
                        <h3 class="text-[rgba(8,8,8,0.7)] font-semibold mb-1.5">Cash Out <span class="text-red-700">-${cashoutAmount}</span></h3>
                        <p class="text-[rgba(8,8,8,0.7)] text-[12px]">${day}-${month}-${year} | ${hours}:${minutes}:${seconds} ${ampm}</p>
                    </div>
                </div>
                <div>
                    <img src="./assets/menu.svg" alt="">
                </div>
        </div> 
        `
        history.appendChild(newHistory);
    }else{
        alert("Wrong Pin")
        return;
    }
})






// document.getElementById('cashout-btn').addEventListener('click', function(){
//     //get the current balance
//     const balanceElement = document.getElementById('balance');
//     const balance = balanceElement.innerText;

//     //get agent nmbr
//     const agentNumberInput = document.getElementById('agent-number');
//     const agentNumber = agentNumberInput.value;
//     if(agentNumber.length !== 11){
//         alert("Invalid Agent Number");
//         return;
//     }

//     //get cashout amount
//     const cashoutAmountInput = document.getElementById('cashout-amount');
//     const cashoutAmount = cashoutAmountInput.value;
//     const newBalance = Number(balance) - Number(cashoutAmount);
//     if(newBalance < 0){
//         alert("Insufficient Balanced.");
//         return;
//     }

//     //get the pin
//     const pinInput = document.getElementById('input-pin');
//     const pin = pinInput.value;
//     if(pin === "4321"){
//         alert("Cashout Successfully.")
//         balanceElement.innerText = newBalance;
//     }else{
//         alert("Invalid Pin")
//         return;
//     }
// })