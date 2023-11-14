const urls = [
    'https://registry.npmjs.org/package1',
    'https://registry.npmjs.org/package2',
    'https://registry.npmjs.org/package3'
  ];
  
  async function fetchPackageData() {
    const promises = urls.map(url => fetch(url));
  
    const results = await Promise.allSettled(promises);
  
    for (const result of results) {
      if (result.status === 'fulfilled') {
        const data = await result.value.json();
        console.log(data);
      } else {
        console.error(result.reason);
      }
    }
  }
  
  fetchPackageData();
  