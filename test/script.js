function submitForm() {
    const form = document.getElementById("submissionForm");
    const formData = new FormData(form);
    const da1 = formData.get("da1");
    const da2 = formData.get("da2");
  
    if (da1 === "Yes" && da2 === "Yes") {
      fetch("insert.php", {
        method: "POST",
        body: formData
      })
      .then(res => res.text())
      .then(data => {
        document.getElementById("result").innerHTML = data;
        form.reset();
      });
    } else {
      alert("Both assessments must be marked 'Yes' to submit.");
    }
  }
  
  function displayData() {
    fetch("display.php")
      .then(res => res.text())
      .then(data => {
        document.getElementById("result").innerHTML = data;
      });
  }
  