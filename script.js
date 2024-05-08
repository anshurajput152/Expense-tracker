const expenseform = document.getElementById('Tracker')
const expenselist = document.getElementById('expenselist')


expenseform.addEventListener('submit',function(events){
      events.preventDefault();

      const description = document.getElementById('Expense').value
      const category = document.getElementById('category').value
      const amount = document.getElementById('Amount').value

      if(document && category && !isNaN(amount)){
        const newrow=document.createElement('tr')
        newrow.innerHTML=`<td>${description}</td>
        <td>${category}</td>
        <td>${amount}</td>`
        expenselist.appendChild(newrow)
      }
      document.getElementById('Expense').value=''
      document.getElementById('category').value=''
      document.getElementById('Amount').value=''
})