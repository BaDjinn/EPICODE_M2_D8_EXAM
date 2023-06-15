import {jobs} from './scaricabile.js';

function search (searchTitle, searchLocation, arr){ 
    //console.log(jobs.length);
      let count = 0;
      const result = [];
    for (let i=0; i<arr.length; i++){
      /*console.log(i); //debug*/
      if(arr[i].title.toLowerCase().includes(searchTitle.toLowerCase()) && arr[i].location.toLowerCase().includes(searchLocation.toLowerCase())){
        //console.log({title,location}=jobs[i]);
        const {title,location}=jobs[i];
        result.push({title,location});
        count++;
      }
    };
    return {result, count};
    };
    
  console.log(search("marketing","us",jobs));
  
  function search2 (searchTitle, searchLocation,arr){ 
    //console.log(jobs.length);
      let count = 0;
      const result = [];
    arr.forEach((job)=>{
      if(job.title.toLowerCase().includes(searchTitle.toLowerCase()) && job.location.toLowerCase().includes(searchLocation.toLowerCase())){
        //console.log({title,location}=jobs[i]);
        const {title,location}=job;
        result.push({title,location});
        count++;
      }
    })
     return {result, count};
    };
    console.log(search2("marketing","us",jobs));
  
  
  
    let compareStrings = (strCercata,testoDaFiltrare) => {
      const arrStrCercata = strCercata.toLowerCase().split(" ");
      //console.log(arrStrCercata);
      let comparator = true;
      arrStrCercata.forEach((strExCercata)=>{comparator &= testoDaFiltrare.toLowerCase().includes(strExCercata)});
      return comparator;
  };
  
    function search3 (searchTitle, searchLocation,arr){ 
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
    console.log(search3("marketing","us",jobs));