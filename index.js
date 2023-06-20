const catsAPI = "https://api.thecatapi.com/v1/breeds";
const averageWeightElement = document.getElementById("average-weight");

fetch(catsAPI)
  .then((response) => response.json())
  .then((data) => {
    const weights = data.map((cat) =>
      parseFloat(cat.weight.metric.split(" - ")[0])
    );
    const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
    const averageWeight = totalWeight / weights.length;
    averageWeightElement.textContent = `Average Weight: ${averageWeight.toFixed(
      2
    )} kg`;
  })
  .catch((error) => {
    console.error("Error fetching cat data:", error);
    averageWeightElement.textContent = "Error retrieving data";
  });
