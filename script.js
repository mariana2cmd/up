// ========== TOAST (FEEDBACK INTERATIVO) ==========
function mostrarToast(mensagem) {
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toastMessage');
  toastMessage.textContent = mensagem;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// ========== SCROLL SUAVE ==========
function scrollToContato() {
  document.getElementById('contato').scrollIntoView({ behavior: 'smooth' });
}

function scrollToExplicacao() {
  document.getElementById('explicacao').scrollIntoView({ behavior: 'smooth' });
}

// ========== ENVIO DO FORMULÁRIO ==========
function enviarFormulario(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const telefone = document.getElementById('telefone').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  if (!nome || !email || !mensagem) {
    mostrarToast('Por favor, preencha todos os campos obrigatórios (*).');
    return;
  }

  mostrarToast(`Obrigado, ${nome}! Recebemos seu contato e retornaremos em breve.`);
  document.getElementById('formContato').reset();
  console.log('Dados enviados:', { nome, email, telefone, mensagem });
}

// ========== SCROLL SUAVE PARA LINKS INTERNOS ==========
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});