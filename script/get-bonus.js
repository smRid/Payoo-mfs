document.getElementById('get-bonus-btn').addEventListener('click', function(){
    const currentBalance = getBalance();
    
    const coupon = getValueFormInput('get-bonus-coupon');
    if(coupon === "254682"){
        alert(`Bonus Received 500 TAKA.`)
        const newBalance = currentBalance + 500;
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
                        <h3 class="text-[rgba(8,8,8,0.7)] font-semibold mb-1.5">Get Bonus <span class="text-green-600">+500</span></h3>
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
        alert("Wrong Coupon")
        return;
    }
})