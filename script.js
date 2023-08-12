const imageUrls = [
    'https://www.frameiteasy.com/learn/wp-content/uploads/2020/12/2_Sara_McDaniel_@simplysoutherncottage_001-700x875.jpeg',
    'https://m.media-amazon.com/images/I/71qv9PXx4rL._AC_UF894,1000_QL80_.jpg',
    'https://m.media-amazon.com/images/S/aplus-media-library-service-media/a9d5754c-94a2-4c1a-a199-ca9469aadf48.__CR609,170,1142,1429_PT0_SX362_V1___.jpg',
    
  ];
  
  
  const gallery = document.querySelector('.gallery');
  function createGallery() {
    imageUrls.forEach(url => {
      const img = document.createElement('img');
      img.src = url;
      gallery.appendChild(img);
    });
  }
  createGallery();
  
  
  
  