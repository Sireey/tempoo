// json2html.js
export default function json2html(data) {
    let table = `<table data-user="bhagyasreebillu@gmail.com">
                   <thead>
                     <tr><th>Name</th><th>Age</th><th>Gender</th></tr>
                   </thead>
                   <tbody>`;
  
    data.forEach(item => {
      table += '<tr>';
      table += `<td>${item.Name}</td>`;
      table += `<td>${item.Age}</td>`;
      table += `<td>${item.Gender || ''}</td>`;
      table += '</tr>';
    });
  
    table += '</tbody></table>';
    return table;
  }
  