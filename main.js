
function setDate(){
      
    const now = new Date();
      const sec = now.getSeconds();
      const secHand = document.querySelector('.second-hand');
      const secDegree = ((sec/60)*360) +90;
      secHand.style.transform = `rotate(${secDegree}deg)`;
      console.log(sec);

      const min = now.getMinutes();
      const minHand = document.querySelector('.min-hand');
      const minDegree = ((min/60) *360) +90;
      minHand.style.transform = `rotate(${minDegree}deg)`;
      
      const hour = now.getHours();
      const hourHand = document.querySelector('.hour-hand');
      const hourDegree = ((hour/12)*360)+90;
      hourHand.style.transform = `rotate(${hourDegree}deg)`;
      // console.log(sec);
      // console.log(min);
      // console.log(hour);

      const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"]
      
      const date = document.querySelector('p');
      const day = now.getDay();
      const today = now.getDate();
      const month = monthNames[now.getMonth()];
      const year = now.getFullYear();
      
      // console.log(today); 
      // console.log(day);
      // console.log(month);
      
      // console.log(year);
      date.textContent = `Today is ${today} of ${month}, ${year}`;
    }

    setInterval(setDate, 1000);