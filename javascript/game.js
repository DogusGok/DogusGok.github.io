const container = document.getElementById("game-container");
const score = document.getElementById("score");
let count = 0;

function addFruit() {
  const fruit = document.createElement("div");
  fruit.classList.add("fruit");
  const fruits = ["apple", "orange", "banana", "grape"];
  const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
  fruit.classList.add(randomFruit);
  const x = Math.floor(
    Math.random() * (container.offsetWidth - fruit.offsetWidth)
  );
  const y = Math.floor(
    Math.random() * (container.offsetHeight - fruit.offsetHeight)
  );
  fruit.style.left = x + "px";
  fruit.style.top = y + "px";
  container.appendChild(fruit);

  fruit.addEventListener("click", function () {
    fruit.remove();
    count++;
    score.textContent = `Skor: ${count}`;
    if (count === 20) {
      alert("Tebrikler, kazandınız!");
    }
  });
}

setInterval(addFruit, 1000);
