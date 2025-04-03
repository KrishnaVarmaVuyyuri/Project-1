
let l = parseInt(prompt("Enter L value:"));
let n = parseInt(prompt("Enter no of photos:"));
let photos = [];

for (let i = 0; i < N; i++) {
    let input = prompt(`Enter width and height for photo ${i + 1} (space-separated):`);
    

    let parts = input.split(" ");  
    let w = parseInt(parts[0]);   
    let h = parseInt(parts[1]);    
    
    photos.push([w,h]); 
}

for (let i = 0; i < n; i++)
     {
        let w= photos[i][0];  
        let h = photos[i][1];  

        if (w < l || h < l)
            console.log("UPLOAD ANOTHER");
        else if (w === h) 
            console.log("ACCEPTED");
        else 
            console.log("CROP IT");
    
    }
