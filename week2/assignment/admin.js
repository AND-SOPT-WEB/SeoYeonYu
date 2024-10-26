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

renderTable();

// 전체 선택하기
const selectBtn = document.getElementById("select-btn");
selectBtn.addEventListener("click", selectAll);

function selectAll() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  checkboxes.forEach((checkbox) => {
    checkbox.checked = selectBtn.checked;
  });
}

// 선택 삭제하기
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

// 데이터 추가 모달 열고 닫기
const modal = document.querySelector(".modal-background");
const modalOpen = document.querySelector("#add-btn");
const modalClose = document.querySelector("#close-btn");

function openModal() {
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}

modalOpen.addEventListener("click", openModal);
modalClose.addEventListener("click", closeModal);

// 데이터 추가하기
const modalForm = document.querySelector(".modal-body");

modalForm.addEventListener("submit", () => {
  const nameKor = document.getElementById("nameKor")?.value.trim();
  const nameEng = document.getElementById("nameEng")?.value.trim();
  const github = document.getElementById("github")?.value.trim();
  const gender = document.getElementById("gender")?.value;
  const role = document.getElementById("role")?.value;
  const firstGroup = parseInt(document.getElementById("firstGroup")?.value, 10);
  const secondGroup = parseInt(document.getElementById("secondGroup")?.value, 10);

  if (!nameKor || !nameEng || !github || !gender || !role || !firstGroup || !secondGroup) {
    alert("모든 항목을 입력해주세요 :(");
    return;
  }

  const newMember = {
    id: Date.now(),
    name: nameKor,
    englishName: nameEng,
    github: github,
    gender: gender,
    role: role,
    firstWeekGroup: firstGroup,
    secondWeekGroup: secondGroup,
  };

  membersData.push(newMember);
  localStorage.setItem("membersData", JSON.stringify(membersData));

  modalForm.reset();
  alert("데이터가 성공적으로 추가되었습니다 :)");
  closeModal();
  renderTable();
});
