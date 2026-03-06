document.getElementById('pay-bill-btn').addEventListener('click', function(){
    const bankAccount = getValueFormInput('pay-bill-bank');
    if(bankAccount == 'Select Bank'){
        alert("Please select a bank");
        return;
    }

    const bankAccountNumber = getValueFormInput('pay-bill-number');
    if(bankAccountNumber.length !== 11){
        alert("Invalid Agent Number");
        return;
    }
    const payAmount = getValueFormInput('pay-bill-amount');
    const currentBalance = getBalance();
    const newBalance = currentBalance + Number(payAmount);
    console.log(newBalance)
    const pin = getValueFormInput('pay-bill-pin');
    if(pin === "4321"){
        alert(`Add Money Successful from ${bankAccount} 
        at ${new Date()}`)
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
                        <h3 class="text-[rgba(8,8,8,0.7)] font-semibold mb-1.5">Payment <span class="text-red-700">-${payAmount}</span></h3>
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