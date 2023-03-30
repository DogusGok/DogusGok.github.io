var dizi = [];

function addComment() {
  alert(
    "Yorumunuz için teşekkürler! \nYorum:" +
      document.getElementById("input").value
  );
  dizi.push(document.getElementById("input").value);
  document.getElementById("input").value = "";
}

function showAllComments() {
  let allComments = "";
  dizi.forEach((element) => {
    allComments += element + "\n";
  });
  alert(allComments);
}
