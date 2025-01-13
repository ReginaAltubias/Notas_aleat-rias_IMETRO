 // Array para armazenar estudantes e notas sem BD
 let students = [];

 // ID inicial para incrementar
 let nextId = 1;

 // Função para carregar dados salvos ao abrir a página
 function loadSavedGrades() {
     const savedData = localStorage.getItem("students");
     if (savedData) {
         students = JSON.parse(savedData);
         nextId = students.lengt + 1;
     }
 }

 // Função para verificar se o número de matrícula já existe
 function isMatriculaUnique(matricula) {
     return !students.some(student => student.matricula === matricula);
 }


  // Função para exibir mensagem de alerta temporária
  function showAlert(message, color = "yellow") {
    const alertBox = document.createElement("div");
    alertBox.textContent = message;
    alertBox.style.position = "fixed";
    alertBox.style.top = "10px";
    alertBox.style.right = "30px";
    alertBox.style.backgroundColor = color;
    alertBox.style.color = "black";
    alertBox.style.padding = "10px";
    alertBox.style.borderRadius = "5px";
    alertBox.style.zIndex = "1000";
    document.body.appendChild(alertBox);

    setTimeout(() => {
        document.body.removeChild(alertBox);
    }, 2000);
}

 // Função para atribuir notas aleatórias de 0 a 20
 function assignGrades() {
     const name = document.getElementById("name").value;
     const matricula = document.getElementById("matricula").value;

     if (name && matricula) {
         if (!isMatriculaUnique(matricula)) {
            showAlert("Número de matrícula existente. Por favor, insira um número único.");
             return;
         }
         const grade = Math.floor(Math.random() * 21); // Nota entre 0 e 20
         let estado;

         if (grade >= 10) {
             estado = "Aprovado";
         } else if (grade >= 7 && grade <= 9) {
             estado = "Recurso";
         } else {
             estado = "Reprovado";
         }

         students.push({ id: nextId++, name, matricula, grade, estado });
         showAlert(`Nota atribuída a ${name} com sucesso!`);
         clearForm();
     } else {
        showAlert("Por favor, insira o nome e número de matrícula.");
     }
 }

 // Função para limpar o formulário
 function clearForm() {
     document.getElementById("name").value = "";
     document.getElementById("matricula").value = "";
 }

 // Função para salvar notas
 function saveGrades() {
     localStorage.setItem("students", JSON.stringify(students));
     showAlert("Notas salvas com sucesso!");
 }

 // Função para exibir o popup com as notas dos estudantes em formato de tabela
 function viewGrades() {
     const resultTableBody = document.querySelector("#resultTable tbody");
     resultTableBody.innerHTML = ""; // Limpar tabela

     // Carregar os dados salvos se o array estiver vazio
     if (students.length === 0) {
         const savedData = localStorage.getItem("students");
         if (savedData) {
             students = JSON.parse(savedData);
         }
     }

     if (students.length > 0) {
         students.forEach((student) => {
             const row = document.createElement("tr");
             row.innerHTML = `
                 <td>${student.id}</td>
                 <td>${student.name}</td>
                 <td>${student.matricula}</td>
                 <td>${student.grade}</td>
                 <td>${student.estado}</td>
             `;
             resultTableBody.appendChild(row);
         });
         document.getElementById("popup").style.display = "flex";
     } else {
         const row = document.createElement("tr");
         row.innerHTML = `<td colspan="5">Nenhum dado disponível.</td>`;
         resultTableBody.appendChild(row);
         document.getElementById("popup").style.display = "flex";
     }
 }

 // Função para fechar o PopUp
 function closePopup() {
     document.getElementById("popup").style.display = "none";
 }

 // Verificar se o container existe antes de adicionar o evento de mousemove
 const container = document.getElementById('container');
 if (container) {
     container.addWaveEffect('mousemove', addWaveEffect);
 }

 // Atualizar o relógio
 function atualizarRelogio() {
     const relogio = document.getElementById('relogio');
     const actual = new Date();

     // Formata a hora
     const horas = actual.getHours().toString().padStart(2, '0');
     const minutos = actual.getMinutes().toString().padStart(2, '0');
     const segundos = actual.getSeconds().toString().padStart(2, '0');

     // Atualiza o conteúdo do elemento
     relogio.textContent = `${horas}:${minutos}:${segundos}`;
 }

 // Atualiza o relógio a cada segundo
 setInterval(atualizarRelogio, 1000);

 // Inicializa o relógio imediatamente
 atualizarRelogio();