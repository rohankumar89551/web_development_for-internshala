var array = [
    {
        id: "1",
        name : "rohan",
        country : "india",
        city : "banglore"
    },
    {
        id: "2",
        name : "sohan",
        country : "india",
        city : "manglore"
    },
    {
        id: "3",
        name : "mohan",
        country : "india",
        city : "hsr"
    },
    {
        id: "4",
        name : "vohan",
        country : "india",
        city : "karnataka"
    }
]
// show table
function showtable(curarray){
    document.getElementById("mytable").innerHTML = 
    <tr class="bg-primary text-white fw-bold">
        <td>id</td>
        <td>name</td>
        <td>country</td>
        <td>city</td>

    </tr>
    // for checking array is empty
    if(curarray==""){
        document.getElementById("error").innerHTML = '<span class="text-danger">not found</span>'
    }
    else{
        document.getElementById("error").innerHTML = "";
        for(var i =0; i < curarray.length; i++){
            document.getElementById("mytable").innerHTML += 
            <tr>
                <td>${curarray[i].id}</td>
                <td>${curarray[i].name}</td>
                <td>${curarray[i].country}</td>
                <td>${curarray[i].city}</td>
            </tr>
            
        }
    }
}
// calling show table data method
showtable(array);