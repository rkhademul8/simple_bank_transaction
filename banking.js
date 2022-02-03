// handle deposite button event
document.getElementById('deposite-button').addEventListener('click',function(){
    // get the  deposite amount
    const depositeInput=document.getElementById('deposite-input')
    const depositeAmountText=depositeInput.value
    depositeInput.value=''
    const depositeAmount=parseFloat(depositeAmountText)
    

    // update deposite total
    const depositeTotal=document.getElementById('deposite-total')
    const previousDepositeText=depositeTotal.innerText
    const previousDepositeAmount=parseFloat(previousDepositeText)
    if(depositeAmount>0)
    {
    const newDepositTotal=previousDepositeAmount+depositeAmount
    depositeTotal.innerText=newDepositTotal
    }
    else{
        alert('oh!! man please check your input value')
    }
    
    // update balance
     const balanceTotal=document.getElementById('balance-input')
     const previousBalanceText=balanceTotal.innerText
     const previousBalanceAmount=parseFloat(previousBalanceText)
     if(depositeAmount>0 ){
        const tatoalBalance=previousBalanceAmount+depositeAmount
        balanceTotal.innerText=tatoalBalance
     }
     
     
    
})





// handle withdraw button event

document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawInput=document.getElementById('withdraw-input')
    const withdrawInputText=withdrawInput.value
    withdrawInput.value=''
    const withdrawAmount=parseFloat(withdrawInputText)

    // update  withdraw total

    const withdrawTotal=document.getElementById('withdraw-total')
    const previouswithdrawText=withdrawTotal.innerText
    const previouswithdrawAmount=parseFloat(previouswithdrawText)


     // balance update after withdraw
   const balanceTotal=document.getElementById('balance-input')
   const previousBalanceText=balanceTotal.innerText
   const previousBalanceAmount=parseFloat(previousBalanceText)
    


    if(withdrawAmount>0 && withdrawAmount<=previousBalanceAmount){
        const totalWithdraw=previouswithdrawAmount+withdrawAmount
        withdrawTotal.innerText=totalWithdraw
    }
    else{
        alert('oh!! man please check your input value')
    }
   


  


    if(withdrawAmount>0 && withdrawAmount<=previousBalanceAmount){
        const tatoalBalance=previousBalanceAmount-withdrawAmount
        balanceTotal.innerText=tatoalBalance
    }
    
    

})