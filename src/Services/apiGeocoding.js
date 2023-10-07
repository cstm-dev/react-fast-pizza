async function getAddress({ latitude, longitude }) {
  try {
    const res = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`,
    );
    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err.message);
  }
}

function getPosition() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export { getAddress, getPosition };
