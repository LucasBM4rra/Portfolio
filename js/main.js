async function loadInicioContent() {
    try {
      const response = await fetch('inicio.html');
      if (!response.ok) throw new Error('Não foi possível carregar o arquivo inicio.html');
      
      const text = await response.text();
      
      document.getElementById('mainContent').innerHTML = text;
  
    } catch (error) {
      console.error(error);
      document.getElementById('mainContent').innerHTML = '<p>Erro ao carregar conteúdo.</p>';
    }
  }
  
  loadInicioContent();
  