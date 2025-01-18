document.querySelectorAll('pre').forEach((block) => {
  // 创建复制按钮
  const copyBtn = document.createElement('button');
  copyBtn.className = 'copy-btn';
  copyBtn.innerText = 'Copy';
  block.appendChild(copyBtn);

  // 复制功能
  copyBtn.addEventListener('click', () => {
    const code = block.querySelector('code').innerText;
    navigator.clipboard.writeText(code).then(() => {
      copyBtn.innerText = 'Copied!';
      setTimeout(() => (copyBtn.innerText = 'Copy'), 2000);
    });
  });
});

