const toggle = document.querySelector(".menu-icon");
const menu = document.querySelector("#menu");
const button = document.querySelector(".submit-btn");
const form = document.querySelector(".input-form");
const text = document.querySelector(".input-textbox");
const result = document.querySelector(".action");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

const handleSubmit = (e) => {
  e.preventDefault();

  if (!text.value) {
    alert("Please add a link");
  } else {
    //check for validation
    // text.reset();
    const shortenLink = async () => {
      const res = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${text.value}`
      );
      const data = await res.json();

      return data;
    };
    shortenLink()
      .then((data) => {
        //   let copyState = "Copy";

        const html = `
        <section class="result container">
        <div class="input-link">${data.result.original_link}</div>
        <div class="div"></div>
        <div class="result-right">
            <div class="output-link">${data.result.short_link}</div>
            <button class='copy-btn'>Copy</button>
        </div>
        </section>
      `;

        result.innerHTML += html;
        const copy = document.querySelector(".copy-btn");
        copy.addEventListener("click", (e) => {
          navigator.clipboard.writeText(data.result.full_short_link);
          e.target.textContent = "Copied!";
          e.target.style.backgroundColor = "var(--Dark-Violet)";
        });

        //   copyState = "Copied";
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

form.addEventListener("submit", handleSubmit);
button.addEventListener("click", handleSubmit);
