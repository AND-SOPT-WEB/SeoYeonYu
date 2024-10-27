const tableBody = document.getElementById("table-body");
let membersData = JSON.parse(localStorage.getItem("membersData")) ?? [];

// 테이블 렌더링 함수
function renderTable(data = membersData) {
  tableBody.innerHTML = "";
  data.forEach((item) => {
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

// 데이터 필터링하기
const nameKorFilter = document.getElementById("nameKor");
const nameEngFilter = document.getElementById("nameEng");
const githubFilter = document.getElementById("github");
const genderFilter = document.getElementById("gender");
const roleFilter = document.getElementById("role");
const firstGroupFilter = document.getElementById("firstGroup");
const secondGroupFilter = document.getElementById("secondGroup");
const searchBtn = document.getElementById("filtering-search-btn");
const resetBtn = document.getElementById("filtering-reset-btn");

function filterTable() {
  const filteredData = membersData.filter((item) => {
    const nameKorMatch =
      nameKorFilter.value.trim() === "" || item.name.includes(nameKorFilter.value);
    const nameEngMatch =
      nameEngFilter.value.trim() === "" || item.englishName.includes(nameEngFilter.value);
    const githubMatch =
      githubFilter.value.trim() === "" || item.github.includes(githubFilter.value);
    const genderMatch = genderFilter.value === "성별 선택" || item.gender === genderFilter.value;
    const roleMatch = roleFilter.value === "OB / YB 선택" || item.role === roleFilter.value;
    const firstGroupMatch =
      firstGroupFilter.value === "" || item.firstWeekGroup === parseInt(firstGroupFilter.value, 10);
    const secondGroupMatch =
      secondGroupFilter.value === "" ||
      item.secondWeekGroup === parseInt(secondGroupFilter.value, 10);

    return (
      nameKorMatch &&
      nameEngMatch &&
      githubMatch &&
      genderMatch &&
      roleMatch &&
      firstGroupMatch &&
      secondGroupMatch
    );
  });

  renderTable(filteredData);
}

const filterForm = document.getElementById("filtering-form");

filterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  filterTable();
});

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
  alert("데이터가 성공적으로 삭제되었습니다 :)");
  renderTable();
}

// 데이터 추가 모달 열고 닫기
const modalBackground = document.querySelector(".modal-background");
const modalOpen = document.querySelector("#add-btn");
const modalClose = document.querySelector("#close-btn");

function openModal() {
  modalBackground.style.display = "flex";
}

function closeModal() {
  modalBackground.style.display = "none";
}

modalOpen.addEventListener("click", openModal);
modalClose.addEventListener("click", closeModal);

// 백드롭 클릭 시 모달 닫기
modalBackground.addEventListener("click", (e) => {
  if (e.target === modalBackground) {
    closeModal();
  }
});

// 데이터 추가하기
const modalForm = document.querySelector(".modal-body");

modalForm.addEventListener("submit", () => {
  const nameKor = document.getElementById("modalNameKor")?.value.trim();
  const nameEng = document.getElementById("modalNameEng")?.value.trim();
  const github = document.getElementById("modalGithub")?.value.trim();
  const gender = document.getElementById("modalGender")?.value;
  const role = document.getElementById("modalRole")?.value;
  const firstGroup = parseInt(document.getElementById("modalFirstGroup")?.value, 10);
  const secondGroup = parseInt(document.getElementById("modalSecondGroup")?.value, 10);

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

// 초기 테이블 렌더링
renderTable();
