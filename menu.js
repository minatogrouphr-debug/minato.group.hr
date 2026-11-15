(function () {
  var btn = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");
  if (!btn || !nav) return;

  function setOpen(open) {
    nav.classList.toggle("is-open", open);
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    btn.setAttribute("aria-label", open ? "メニューを閉じる" : "メニューを開く");
  }

  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    setOpen(!nav.classList.contains("is-open"));
  });

  // メニューの外をタップ / Escキーで閉じる
  document.addEventListener("click", function (e) {
    if (!nav.contains(e.target)) setOpen(false);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setOpen(false);
  });
})();
