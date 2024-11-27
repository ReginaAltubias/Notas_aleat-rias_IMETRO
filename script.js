


// Array para armazenar estudantes e notas sem BD
let students = [];



// Função para carregar dados salvos ao abrir a página
function loadSavedGrades() {
    const savedData = localStorage.getItem("students");
    if (savedData) {
        students = JSON.parse(savedData);
    }
}



// Função para atribuir notas aleatórias de 0 á 20
function assignGrades() {
    const name = document.getElementById("name").value;
    const matricula = document.getElementById("matricula").value;

    if (name && matricula) {
        const grade = Math.floor(Math.random() * 21); // Nota entre 0 e 20
        students.push({ name, matricula, grade });
        alert(`Nota atribuída a ${name} com sucesso!`);
        clearForm();
    } else {
        alert("Por favor, insira o nome e número de matrícula.");
    }
}

// função para limpar o formulário, porém somente funciona se a o butão limpar estiver activado 
function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("matricula").value = "";
}

// função para Salvar notas (sem funcionalidade real)

function saveGrades() {
    localStorage.setItem("students", JSON.stringify(students));
    alert("Notas salvas com sucesso!");
}

// função para exibir o popup com as notas dos estudantes 
function viewGrades() {
    const resultList = document.getElementById("resultList");
    resultList.innerHTML = ""; // limpar lista

    // Carregar os dados salvos se o array estiver vazio
    if (students.length === 0) {
        const savedData = localStorage.getItem("students");
        if (savedData) {
            students = JSON.parse(savedData);
        }
    }

    if (students.length > 0) {
        students.forEach((student) => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <strong>Nome:</strong> ${student.name} <br>
                <strong>Matrícula:</strong> ${student.matricula} <br>
                <strong>Nota:</strong> ${student.grade} <br>
            `;
            resultList.appendChild(listItem);
        });
        document.getElementById("popup").style.display = "flex";
    } else {
        resultList.innerHTML = "<li>Nenhum dado disponível.</li>";
        document.getElementById("popup").style.display = "flex";
    }
}
function viewGrades() {
    const resultList = document.getElementById("resultList");
    resultList.innerHTML = "";  // limpar lista

    students.forEach((student) => {
     
        const listItem = document.createElement("li");
        
        // adicionar nome, Matrícula e notas em linhas separadas  
        listItem.innerHTML = `
            <strong>Nome:</strong> ${student.name} <br>
            <strong>Matrícula:</strong> ${student.matricula}  <br>
            <strong>Nota:</strong> ${student.grade} <br>
        `;
        resultList.appendChild(listItem);
    });
    document.getElementById("popup").style.display = "flex";
    
}

function deleteRecord(){
    const numberStudentRemove = document.getElementById("matricula")


const updatedStudents = students.filter((student) => student.matricula !== numberStudentRemove);

console.log(updatedStudents);
// Saída: [ { id: 1, name: "João" }, { id: 3, name: "Ana" } ]



}

// função para fechar o PopUp
function closePopup (){
document.getElementById("popup").style.display = "none"; 

// Seleciona o container para o efeito de ondas
const container = document.getElementById('wave-effect'); 

// Função para adicionar o efeito de ondulatório
function addWaveEffect (event){
    const wave = document.createElement ('span');
    wave.classList.add('wave'); 
    wave.style.left =`${event.clientX}px`;
    wave.style.left =`${event.clienty}px`;
    container.appendChild (wave); 

    
    // removendo o efeito após a animação 
    setTimeout (()=> {
        wave.remove(); 
    }, 600); 
        
    } 

}

// Verficar se o containers existe antes de adiconar o eventode mousemovve. 
const container = document.getElementById('container'); //TOMEI A LIBERDADE DE DECLARAR ESSA VARIÁVEL PORQUE ESTAVA A DAR ERRO E A MINHA FUNÇÃO NÃO ESTAVA A SER CHAMADA
if (container){
    container.addWaveEffect ('mousemove', addWaveEffect);  
    
} // fim temporário até a proxima Aula. 




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