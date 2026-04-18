// ── Visitor Counter (resume.html) ──
async function getData() {
  const url = "https://uo5yvxon2j.execute-api.us-east-1.amazonaws.com/visits";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    document.getElementById('visit-count').textContent = await response.json();
  } catch (error) {
    console.error(error.message);
  }
}

if (document.getElementById('visit-count')) {
  getData();
}

// ── Dropdown Menu (index.html) ──
const toggle = document.querySelector('.dropdown-toggle');
const menu = document.querySelector('.dropdown-menu');

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.contains('open');
    menu.classList.toggle('open', !isOpen);
    toggle.classList.toggle('active', !isOpen);
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown')) {
      menu.classList.remove('open');
      toggle.classList.remove('active');
    }
  });
}
