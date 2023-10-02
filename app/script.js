async function getImage() {
  try {
    const image = await getRandomDogImageFromApi();
    console.log(image);
  } catch (error) {
    console.log(error);
  }
}
async function initialize() {
  const dogNamesList = await getList();
  appendToSelect(dogNamesList);
}
