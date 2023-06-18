import {jobs} from './scaricabile.js';
const listLocation = document.getElementById("jobResultList")

// function search (searchTitle, searchLocation, arr){ 
//     //console.log(jobs.length);
//       let count = 0;
//       const result = [];
//     for (let i=0; i<arr.length; i++){
//       /*console.log(i); //debug*/
//       if(arr[i].title.toLowerCase().includes(searchTitle.toLowerCase()) && arr[i].location.toLowerCase().includes(searchLocation.toLowerCase())){
//         //console.log({title,location}=jobs[i]);
//         const {title,location}=jobs[i];
//         result.push({title,location});
//         count++;
//       }
//     };
//     return {result, count};
//     };
    
//   console.log(search("marketing","us",jobs));
  
// function search2 (searchTitle, searchLocation,arr){ 
//     //console.log(jobs.length);
//       let count = 0;
//       const result = [];
//     arr.forEach((job)=>{
//       if(job.title.toLowerCase().includes(searchTitle.toLowerCase()) && job.location.toLowerCase().includes(searchLocation.toLowerCase())){
//         //console.log({title,location}=jobs[i]);
//         const {title,location}=job;
//         result.push({title,location});
//         count++;
//       }
//     })
//      return {result, count};
//     };
//     console.log(search2("marketing","us",jobs));
  
  
let compareStrings = (strCercata,testoDaFiltrare) => {
      const arrStrCercata = strCercata.toLowerCase().split(" ");
      //console.log(arrStrCercata);
      let comparator = true;
      arrStrCercata.forEach((strExCercata)=>{comparator &= testoDaFiltrare.toLowerCase().includes(strExCercata)});
      return comparator;
};
  
function search3(searchTitle, searchLocation,arr){ 
      //console.log(jobs.length);
        let count = 0;
        const result = [];      
      arr.forEach((job)=>{
        if(compareStrings(searchTitle,job.title.toLowerCase()) && compareStrings(searchLocation,job.location.toLowerCase())){
          const {title,location}=job;
          result.push({title,location});
          count++;
        }
      })
       return {result, count};
};
  
  
    //console.log("prova di comparazione: ",compareStrings("for no the","Aint No Rest For tHe Wicked"));
  //console.log(search3("marketing","us",jobs));

const buttonListen = document.getElementById("searchButton");
 
const printResults = () => {  
  const inJob = document.getElementById("inJob").value;
  const inPlace = document.getElementById("inPlace").value;
  const jobResults = search3(inJob,inPlace,jobs);
  console.log(jobResults);
  if (jobResults.count!=0) {
        jobResults.result.forEach((res)=> {
      const newLi = document.createElement("li");
      const newSpan = document.createElement("span");
      newSpan.innerText = `${res.title}`;
      newLi.appendChild(newSpan);
      //newLi.innerText += `    Location:`;

      const newSpan2 = document.createElement("span");
      newSpan2.innerText = ` ${res.location}`;
      newLi.appendChild(newSpan2);
      //newLi.innerText = ` ${res.location}`;// innerText preferito a innerHtml per una questione di sicurezza.
    
      listLocation.appendChild(newLi);
    })
  }else {
    const newLi = document.createElement("li");
      newLi.innerText= `No results matching`;
      listLocation.appendChild(newLi);
  }

}

buttonListen.addEventListener("click", printResults);


