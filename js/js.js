const buttonall=document.querySelectorAll('.btn-complete')
// console.log(buttonall)

let taskcount=6;
let taskcompleted=23;

for(let i=0;i<buttonall.length;i++){
    // console.log(buttonall[i]);
    buttonall[i].addEventListener("click",function(){
        const btn=buttonall[i];

        btn.disabled=true;
        btn.classList.add('bg-blue-200');


        const taskTitle = btn.parentElement.parentElement.parentElement.querySelector('.card-title').innerText;
                // console.log(taskTitle)
        
        const time=new Date().toLocaleTimeString();
        // console.log(time);

        const massage=document.querySelector('.massage');
        const newmassage=document.createElement('p');
        newmassage.innerHTML=`you have completed the task ${taskTitle} at ${time}`;
        newmassage.classList.add('bg-gray-100', 'rounded-md','px-4','py-2','my-3','mx-4');
        massage.appendChild(newmassage);

        taskcount--;
        taskcompleted++;

        // const taskassigned=parseInt(document.querySelector('.task-assigned').innerText);
        // console.log(taskassigned)

        document.querySelector('.task-assigned').innerText=taskcount;
        document.querySelector('.taskcompleted').innerText=taskcompleted;

        if(taskcount===0){
            alert('Board Updated Successfully');
           
            alert('congrates!!! you have completed all the current task');             
        
        }
        else{
            alert('Board Updated Successfully');
        }
       

    });
}
// clest histry
document.getElementById('clear-history').addEventListener('click', function () {
    document.querySelector('.massage').innerHTML = "";
});

// current date functionality



const date = new Date();
const optionsWeekday = { weekday: 'short' }; // "Wed"
const optionsDate = { month: 'short', day: 'numeric', year: 'numeric' }; // "Jul 28 2025"

const weekday = date.toLocaleDateString('en-US', optionsWeekday);
const formattedDate = date.toLocaleDateString('en-US', optionsDate);

// Set the formatted weekday and date
document.getElementById('weekday').textContent = weekday;
document.getElementById('date').textContent = formattedDate;


// randomly background color change 
document.getElementById('color-btn').addEventListener('click', function () {
    // document.querySelector('.body-bg').style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 85%)`;
    document.querySelector('.body-bg').style.backgroundColor = `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256})`;
});