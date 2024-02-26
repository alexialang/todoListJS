let monBouton = document.querySelector("#add");
monBouton.addEventListener("click", function () {
  let nouvelleTache = document.querySelector("#task");
  if (!nouvelleTache.value) {
    nouvelleTache.style.backgroundColor = "#f27d4f";
    setTimeout(function () {
      nouvelleTache.style.backgroundColor = "";
    }, 1000);
  } else {
    // Creation de l'element div, ajout de style
    let newP = document.createElement("p");
    newP.innerText = nouvelleTache.value;
    let newDiv = document.createElement("div");
    newDiv.appendChild(newP);
    newP.classList.add("newP");
    newDiv.classList = "newDiv";
    newDiv.setAttribute("draggable", "true");
    nouvelleTache.style.backgroundColor = "#C9E3CC";
    setTimeout(function () {
      nouvelleTache.style.backgroundColor = "";
    }, 1000);
    // ajouter la tache à la premiere colonne
    document.querySelector("#toDo").appendChild(newDiv);
    // / création et ajout des flèches
    let upArrow = document.createElement("span");
    upArrow.innerHTML = "";
    upArrow.classList.add("arrowUp");

    let downArrow = document.createElement("span");
    downArrow.innerHTML = "";
    downArrow.classList.add("arrowDown");

    newDiv.appendChild(upArrow);
    newDiv.appendChild(downArrow);
    //rendre les fleches fonctionnelles
    upArrow.addEventListener("click", function () {
      let divUp = newDiv.previousElementSibling;
      if (divUp && divUp.classList.contains("newDiv")) {
        newDiv.parentNode.insertBefore(newDiv, divUp);
      }
    });

    downArrow.addEventListener("click", function () {
      let nextSibling = newDiv.nextElementSibling;
      if (nextSibling && nextSibling.classList.contains("newDiv")) {
        nextSibling.parentNode.insertBefore(
          newDiv,
          nextSibling.nextElementSibling
        );
      }
    });
    // creation et ajout du bouton suppr
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "";
    deleteButton.classList.add("deleteButton");

    deleteButton.addEventListener("click", function () {
      newDiv.parentNode.removeChild(newDiv);
    });

    newDiv.appendChild(deleteButton);
    nouvelleTache.value = "";

    // Gestion des événements de glisser-déposer
    newDiv.addEventListener("dragstart", function (e) {
      this.classList.add("dragging");
    });

    newDiv.addEventListener("dragend", function (e) {
      this.classList.remove("dragging");
    });
  }
});

let toDo = document.querySelector("#toDo");
toDo.addEventListener("dragover", function (e) {
  e.preventDefault();
});

toDo.addEventListener("drop", function (e) {
  e.preventDefault();
  let selected = document.querySelector(".dragging");
  this.appendChild(selected);
});

let inProgress = document.querySelector("#inProgress");
inProgress.addEventListener("dragover", function (e) {
  e.preventDefault();
});

inProgress.addEventListener("drop", function (e) {
  e.preventDefault();
  let selected = document.querySelector(".dragging");
  this.appendChild(selected);
});

let finishTask = document.querySelector("#finishTask");
finishTask.addEventListener("dragover", function (e) {
  e.preventDefault();
});

finishTask.addEventListener("drop", function (e) {
  e.preventDefault();
  let selected = document.querySelector(".dragging");
  this.appendChild(selected);
});
