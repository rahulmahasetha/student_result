const form = document.getElementById('srmForm');
const resultTable = document.getElementById('resultTable');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  // Get form values
  const name = document.getElementById('name').value;
  const rollNumber = document.getElementById('rollNumber').value;
  const marks = parseInt(document.getElementById('marks').value, 10);

  //  result
  const result = marks >= 40 ? 'Pass' : 'Fail';

  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${name}</td>
    <td>${rollNumber}</td>
    <td>${marks}</td>
    <td>${result}</td>
  `;
  resultTable.appendChild(row);

  form.reset();
});
