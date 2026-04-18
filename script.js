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

getData();
