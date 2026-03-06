// input value dhorar mahcine
function getValueFormInput (id){
    const input = document.getElementById(id);
    const value = input.value;
    return value;
}

//Taka dhorar machine
function getBalance(){
    const balanceElement = document.getElementById('balance');
    const balance = balanceElement.innerText;
    return Number(balance);
}

//Machine value => set balance
function setBalance(value){
    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = value;
}

function showOnly(id1, id2){
    const addMoney = document.getElementById('add-money')
    const cashout = document.getElementById('cashout');
    const sendMoney = document.getElementById('transfer-money')
    const getBonus = document.getElementById('get-bonus')
    const payBill = document.getElementById('pay-bill');
    const history = document.getElementById('transaction-history');
    addMoney.classList.add("hidden")
    cashout.classList.add("hidden")
    sendMoney.classList.add("hidden")
    history.classList.add("hidden")
    payBill.classList.add("hidden")
    getBonus.classList.add("hidden")
    //btn bg change
    document.getElementById('add-money-card-btn').classList.remove("text-[#0874F2]", "border-2", "border-[#0874F2]", "bg-[#0377fc14]");
    document.getElementById('send-money-card-btn').classList.remove("text-[#0874F2]", "border-2", "border-[#0874F2]", "bg-[#0377fc14]");
    document.getElementById('cashOut-money-card-btn').classList.remove("text-[#0874F2]", "border-2", "border-[#0874F2]", "bg-[#0377fc14]");
    document.getElementById('get-money-card-btn').classList.remove("text-[#0874F2]", "border-2", "border-[#0874F2]", "bg-[#0377fc14]");
    document.getElementById('pay-money-card-btn').classList.remove("text-[#0874F2]", "border-2", "border-[#0874F2]", "bg-[#0377fc14]");
    document.getElementById('history-money-card-btn').classList.remove("text-[#0874F2]", "border-2", "border-[#0874F2]", "bg-[#0377fc14]");
    
    const selected1 = document.getElementById(id1);
    selected1.classList.remove("hidden");
    const selected2 =  document.getElementById(id2);
    selected2.classList.add("text-[#0874F2]", "border-2", "border-[#0874F2]", "bg-[#0377fc14]")
};

// Coupon code
const btn = document.getElementById('code-text');
const text = document.getElementById('code');
document.getElementById('coupon-btn').addEventListener('click', function(){
    if(btn.textContent === "Get Your Coupon Code"){
        text.textContent = "YOUR CODE: 254682";
        btn.textContent = "";
    }else{
        btn.textContent = "Get Your Coupon Code";
        text.textContent = "";
    }
})