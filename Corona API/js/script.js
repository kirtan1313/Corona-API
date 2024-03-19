
let corona = document.getElementById('corona');

fetch('  https://data.covid19india.org/data.json').then((res) => {
    return res.json();
}).then((data) => {

    const stateData = data.statewise;
    console.log("data",data.statewise);
    stateData.forEach((state) => {
        corona.innerHTML += ` <tr>
                             <td class="border border-2 border-white">${state.state}</td>
                             <td class="border border-2 border-white">${state.active}</td>
                             <td class="border border-2 border-white">${state.lastupdatedtime}</td>
                             <td class="border border-2 border-white">${state.confirmed}</td>
                             <td class="border border-2 border-white">${state.deaths}</td>
                         </tr>`;
    });

}).catch((err) => {
    console.log("err",err);
})






