function updateProgress() {
  const progressBar = document.getElementsByClassName("progress-bar")
  for (i=0;i<progressBar.length;i++) {
    progressBar[i].innerHTML = "100%"
    progressBar[i].style.width = "100%";
  }
}