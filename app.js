"use strict";
const table = document.getElementById('table');
const row = document.getElementById('row');
const column = document.getElementById('column');
const runBtn = document.getElementById('btn');

function tableGenerator(column, row) {
  let tableTemplate;
  let trTemplate = ''
  for (let trIndex = 1; trIndex <= row; trIndex++) {
    let tdTemplate = ''
    for (let tdIndex = 1; tdIndex <= column; tdIndex++) {
      tdTemplate += `<td>${trIndex} ${tdIndex}</td>`
    }
    trTemplate = `<tr>${trTemplate}${tdTemplate}</tr>`
  }
  tableTemplate = `<tbody>${trTemplate}</tbody>`
  return tableTemplate

}

function colorChanger(e) {
  const elem = e.target;
  elem.classList.toggle("green")
}

function addListenerToTr() {
  table.querySelectorAll('td').forEach(td => td.addEventListener("click", colorChanger)
  )
}

function tableRender(e) {
  e.preventDefault()
  table.innerHTML = tableGenerator(+column.value, +row.value);
  addListenerToTr();
}

runBtn.addEventListener("click", tableRender);
