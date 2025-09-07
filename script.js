const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  // Toggle icon between bars and X
  const icon = hamburger.querySelector("i");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-times");
});

//cv downloader button 
const btn = document.getElementById("cvBtn");
const link = document.getElementById("cvLink");

btn.addEventListener("click", () => {
  // simple UX feedback while preparing
  const originalText = btn.innerHTML;
  btn.disabled = true;
  btn.innerHTML = '<span class="btn-icon">⏬</span><span>Preparing…</span>';

  // trigger the download
  // using a small timeout for visual feedback; you can remove it if you want instant
  setTimeout(() => {
    link.click();
    // restore button state
    btn.innerHTML = originalText;
    btn.disabled = false;
  }, 250);
});
/////////////////////
// Replace with your own Google Apps Script Web App URL
// Replace with your own Google Apps Script deployment link
const scriptURL = "https://script.google.com/macros/s/AKfycbzLB2MH4ccvvePyQl9mkFS1CnHiGjSHoxXbnLqkUPMa-7rZ42jf-RStJ_L8_E8DF_6a/exec";
const form = document.getElementById("contact-form");

form.addEventListener("submit", e => {
  e.preventDefault();

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then(response => {
      alert("Form submitted successfully!");
      form.reset();
    })
    .catch(error => {
      alert("Error! " + error.message);
    });
});

