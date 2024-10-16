const tableBody = document.getElementById("table-body");
let membersData = JSON.parse(localStorage.getItem("membersData")) ?? [];

function renderTable() {
  tableBody.innerHTML = "";
  membersData.forEach((item) => {
    let gender = item.gender === "male" ? "남자" : "여자";
    const tr = document.createElement("tr");
    tr.innerHTML = `
            <td><input type="checkbox" id="${item.id}" /></td>
            <td>${item.name}</td>
            <td>${item.englishName}</td>
            <td><a href="https://github.com/${item.github}" target="_blank">${item.github}</a></td>
            <td>${gender}</td>
            <td>${item.role}</td>
            <td>${item.firstWeekGroup}</td>
            <td>${item.secondWeekGroup}</td>
        `;
    tableBody.appendChild(tr);
  });
}

const selectBtn = document.getElementById("select-btn");
selectBtn.addEventListener("click", selectAll);

function selectAll() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  checkboxes.forEach((checkbox) => {
    checkbox.checked = selectBtn.checked;
  });
}

const delBtn = document.getElementById("del-btn");
delBtn.addEventListener("click", deleteRow);

function deleteRow() {
  const checkboxes = tableBody.querySelectorAll('input[type="checkbox"]');

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      const id = parseInt(checkbox.getAttribute("id"));
      membersData = membersData.filter((item) => item.id !== id);
    }
  });

  localStorage.setItem("membersData", JSON.stringify(membersData));
  selectBtn.checked = false;
  renderTable();
}

renderTable();
