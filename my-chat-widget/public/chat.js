document
  .getElementById("send")
  .addEventListener("click", () => {

      const msg =
        document.getElementById("message").value;

      document
        .getElementById("messages")
        .innerHTML += `<p>${msg}</p>`;
});