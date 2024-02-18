function dragablize(list) {
  let currentLi;
  list?.addEventListener("dragstart", (e) => {
    e.dataTransfer.effectAllowed = "move";
    currentLi = e.target;
    setTimeout(() => {
      // currentLi.classList.add('moving');
      currentLi.style.background = "transparent";
      currentLi.style.color = "transparent";
      currentLi.style.border = "1px dashed #ccc";
    });
  });

  list?.addEventListener("dragenter", (e) => {
    e.preventDefault();
    let target = e.target;
    if (target === currentLi || target === list) {
      return;
    }

    // 获取list的真正子节点
    while (target.parentNode !== list) {
      target = target.parentNode;
    }
    let liArray = Array.from(list?.childNodes);
    let currentIndex = liArray.indexOf(currentLi);
    let targetIndex = liArray.indexOf(target);

    if (currentIndex < targetIndex) {
      list?.insertBefore(currentLi, target.nextElementSibling);
    } else {
      list?.insertBefore(currentLi, target);
    }
  });

  list?.addEventListener("draover", (e) => {
    e.preventDefault();
  });

  list?.addEventListener("dragend", (e) => {
    // currentLi.classList.remove('moving');
    currentLi.style.removeProperty("background");
    currentLi.style.removeProperty("color");
    currentLi.style.removeProperty("border");
  });
}

export { dragablize };
