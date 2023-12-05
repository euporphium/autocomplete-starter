function getAutocompleteResults(query: string): Promise<string[]> {
  const fruits = [
    "Ackee",
    "Apple",
    "Apricot",
    "Avocado",
    "Banana",
    "Bilberry",
    "Blackberry",
    "Blueberry",
    "Cactus Fruit",
    "Cantaloupe",
    "Cherry",
    "Clementine",
    "Coconut",
    "Cranberry",
    "Date",
    "Dragon Fruit",
    "Fig",
    "Grapefruit",
    "Grapes",
    "Guava",
    "Honeydew",
    "Kiwi",
    "Lemon",
    "Lime",
    "Lychee",
    "Mango",
    "Nectarine",
    "Orange",
    "Papaya",
    "Passion Fruit",
    "Peach",
    "Pear",
    "Persimmon",
    "Pineapple",
    "Pineberry",
    "Plum",
    "Pomegranate",
    "Rambutan",
    "Raspberry",
    "Soursop",
    "Star Fruit",
    "Strawberry",
    "Tangerine",
    "Watermelon"
  ]


  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fruits.filter((fruit) => fruit.includes(query)));
    }, 1000);
  });
}

function App() {

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-gray-900">
      <input className="mt-24 mb-4"/>
      <div className="text-gray-200 flex flex-col gap-2 items-start">
        Show results here
      </div>
    </div>
  )
}

export default App
