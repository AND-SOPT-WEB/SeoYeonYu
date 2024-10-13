const tableBody = document.getElementById("table-body");

function renderTable() {
  let membersData = JSON.parse(localStorage.getItem("membersData"));
  membersData.forEach((item) => {
    let gender = item.gender === "male" ? "남자" : "여자";
    const tr = document.createElement("tr");
    tr.innerHTML = `
            <td><input type="checkbox" /></td>
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

renderTable();
