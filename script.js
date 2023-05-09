async function getWord() {
  const response = await fetch('https://random-word-api.herokuapp.com/word?number=1');
  const data = await response.json();

  return {
    word: data[0]
  };
}

function showWord(word) {
  const container = document.getElementById('word-container');

  container.innerHTML = `
    <h2>${word.word}</h2>
  `;
}

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const word = await getWord();
    showWord(word);
  } catch (error) {
    alert('Error fetching random word.');
    console.error(error);
  }
});
