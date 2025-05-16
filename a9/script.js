const fruits = ["Straberry", "Orange", "Apple", "Banana"];

function search() {
  const input = document.getElementById('fruit').value.toLowerCase();
  const fruitList = document.getElementById('fruitList');
  fruitList.innerHTML = '';

  const filtered = fruits.filter(fruit => fruit.toLowerCase().includes(input));

  if (filtered.length > 0) {
    filtered.forEach(fruit => {
      const div = document.createElement('div');
      div.textContent = fruit;
      fruitList.appendChild(div);
    });
  } else {
    fruitList.innerHTML = '<div>No fruits found</div>';
  }
}