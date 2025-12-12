---
layout: page
title: travel
permalink: /travel-map/
nav_order: 5
nav: true
map: true
description: My Wonderful Memories
---

<!-- Leaflet CSS -->
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
      integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
      crossorigin=""/>

<style>
#travel-map {
  height: 600px;
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  margin-bottom: 2rem;
  background: #f8f9fa;
}

/* Custom marker styling */
.custom-marker {
  background: transparent !important;
  border: none !important;
}

/* Modal image styling */
#photoGallery .card {
  transition: transform 0.2s;
}

#photoGallery .card:hover {
  transform: translateY(-2px);
}

#photoGallery img {
  transition: opacity 0.2s;
}

#photoGallery img:hover {
  opacity: 0.9;
}

/* Popup styling */
.leaflet-popup-content-wrapper {
  border-radius: 8px;
}

.leaflet-popup-content h6 {
  color: #2c3e50 !important;
}
</style>

<div class="row">
  <div class="col-md-12">
    <h2>My Travel</h2>
    <p>Click on the red dots on the map to see my travel photos from various locations!</p>
  </div>
</div>

<!-- The map container -->
<div id="travel-map"></div>

<!-- Photo modal -->
<div class="modal fade" id="photoModal" tabindex="-1" aria-labelledby="photoModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="photoModalLabel"></h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div id="photoGallery" class="row">
          <!-- Photos will be loaded here -->
        </div>
        <div id="locationInfo" class="mt-3">
          <!-- Location information will be loaded here -->
        </div>
      </div>
    </div>
  </div>
</div>

<script>
// Travel locations data
const travelLocations = [
  {
    name: "Beijing, China",
    coordinates: [39.9042, 116.4074],
    description: "首都北京，学习和生活的地方",
    photos: [
      {
        url: "/assets/img/travel/beijing_placeholder.svg",
        caption: "故宫博物院",
        description: "世界上最大的古代宫殿建筑群"
      },
      {
        url: "/assets/img/travel/beijing_placeholder.svg",
        caption: "长城",
        description: "世界七大奇迹之一"
      },
      {
        url: "/assets/img/travel/beijing_placeholder.svg",
        caption: "颐和园",
        description: "中国古典园林之首"
      },
      {
        url: "/assets/img/travel/beijing_placeholder.svg",
        caption: "北京大学",
        description: "中国顶尖高等学府"
      },
      {
        url: "/assets/img/travel/beijing_placeholder.svg",
        caption: "中科院计算所",
        description: "进行博士研究的科研机构"
      }
    ],
    visitDate: "2021-现在",
    icon: "🏛️"
  },
  {
    name: "Changsha, China",
    coordinates: [28.1940, 112.9822],
    description: "长沙",
    photos: [
      {
        url: "assets/img/travel/Changsha/NUDT-1.jpg",
        caption: "NUDT",
        description: "国防科技大学"
      },
    ],
    visitDate: "2021-现在",
    icon: "🏛️"
  },
  {
    name: "Shanghai, China",
    coordinates: [31.2304, 121.4737],
    description: "国际化大都市，现代与传统交融",
    photos: [
      {
        url: "/assets/img/travel/beijing_placeholder.svg",
        caption: "外滩",
        description: "上海的标志性滨江景观"
      },
      {
        url: "/assets/img/travel/beijing_placeholder.svg",
        caption: "浦东天际线",
        description: "现代摩天大楼林立"
      }
    ],
    visitDate: "2022",
    icon: "🏙️"
  },
  {
    name: "Hangzhou, China",
    coordinates: [30.2741, 120.1551],
    description: "人间天堂，西湖美景甲天下",
    photos: [
      {
        url: "/assets/img/travel/beijing_placeholder.svg",
        caption: "西湖",
        description: "世界文化遗产，中国十大名胜之一"
      }
    ],
    visitDate: "2023",
    icon: "🌸"
  },
  {
    name: "Shenzhen, China",
    coordinates: [22.5445, 114.0545],
    description: "人间天堂，西湖美景甲天下",
    photos: [
      {
        url: "/assets/img/travel/beijing_placeholder.svg",
        caption: "西湖",
        description: "世界文化遗产，中国十大名胜之一"
      }
    ],
    visitDate: "2023",
    icon: "🌸"
  },
  {
    name: "Xian, China",
    coordinates: [34.3415, 108.9401],
    description: "人间天堂，西湖美景甲天下",
    photos: [
      {
        url: "/assets/img/travel/beijing_placeholder.svg",
        caption: "西湖",
        description: "世界文化遗产，中国十大名胜之一"
      }
    ],
    visitDate: "2023",
    icon: "🌸"
  },
  {
    name: "Guiyang, China",
    coordinates: [26.6476, 106.6301],
    description: "人间天堂，西湖美景甲天下",
    photos: [
      {
        url: "/assets/img/travel/beijing_placeholder.svg",
        caption: "西湖",
        description: "世界文化遗产，中国十大名胜之一"
      }
    ],
    visitDate: "2023",
    icon: "🌸"
  },
  {
    name: "Zunyi, China",
    coordinates: [27.4895, 106.8582],
    description: "人间天堂，西湖美景甲天下",
    photos: [
      {
        url: "/assets/img/travel/beijing_placeholder.svg",
        caption: "西湖",
        description: "世界文化遗产，中国十大名胜之一"
      }
    ],
    visitDate: "2023",
    icon: "🌸"
  },
  {
    name: "Changde, China",
    coordinates: [29.0316, 111.6984],
    description: "人间天堂，西湖美景甲天下",
    photos: [
      {
        url: "/assets/img/travel/beijing_placeholder.svg",
        caption: "西湖",
        description: "世界文化遗产，中国十大名胜之一"
      }
    ],
    visitDate: "2023",
    icon: "🌸"
  },
  {
    name: "Wuhan, China",
    coordinates: [30.5930, 114.3053],
    description: "人间天堂，西湖美景甲天下",
    photos: [
      {
        url: "/assets/img/travel/beijing_placeholder.svg",
        caption: "西湖",
        description: "世界文化遗产，中国十大名胜之一"
      }
    ],
    visitDate: "2023",
    icon: "🌸"
  },
];

// Initialize the map when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Create the map
  const map = L.map('travel-map').setView([35.8617, 104.1954], 4); // Center on China

  // Add OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Custom red icon for markers
  const redIcon = L.divIcon({
    html: '<div style="background-color: #dc3545; width: 20px; height: 20px; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 6px rgba(0,0,0,0.3);"></div>',
    iconSize: [20, 20],
    iconAnchor: [10, 10],
    popupAnchor: [0, -10],
    className: 'custom-marker'
  });

  // Add markers for each location
  travelLocations.forEach(location => {
    const marker = L.marker(location.coordinates, { icon: redIcon }).addTo(map);

    // Create popup content
    const popupContent = `
      <div style="min-width: 200px;">
        <h6 style="margin: 0 0 8px 0; color: #333;">
          ${location.icon || '📍'} ${location.name}
        </h6>
        <p style="margin: 4px 0; font-size: 13px; color: #666;">
          <strong>访问时间:</strong> ${location.visitDate}
        </p>
        <p style="margin: 4px 0; font-size: 13px; color: #666;">
          ${location.description}
        </p>
        <button class="btn btn-sm btn-primary" onclick="showLocationPhotos('${location.name}')">
          查看照片 (${location.photos.length})
        </button>
      </div>
    `;

    marker.bindPopup(popupContent);
  });

  // Function to show location photos in modal
  window.showLocationPhotos = function(locationName) {
    const location = travelLocations.find(loc => loc.name === locationName);
    if (!location) return;

    // Set modal title
    document.getElementById('photoModalLabel').innerHTML = `
      ${location.icon || '📍'} ${location.name}
    `;

    // Clear and populate photo gallery
    const gallery = document.getElementById('photoGallery');
    gallery.innerHTML = '';

    location.photos.forEach(photo => {
      const photoCol = document.createElement('div');
      photoCol.className = 'col-md-6 mb-3';
      photoCol.innerHTML = `
        <div class="card">
          <img src="${photo.url}" class="card-img-top" alt="${photo.caption}"
               style="height: 200px; object-fit: cover;"
               onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkJhY2tncm91bmQgUGhvdG88L3RleHQ+PC9zdmc+';">
          <div class="card-body p-2">
            <h6 class="card-title mb-1">${photo.caption}</h6>
            <p class="card-text small text-muted">${photo.description}</p>
          </div>
        </div>
      `;
      gallery.appendChild(photoCol);
    });

    // Add location information
    document.getElementById('locationInfo').innerHTML = `
      <div class="alert alert-info">
        <h6 class="alert-heading">关于 ${location.name}</h6>
        <p class="mb-1"><strong>访问时间:</strong> ${location.visitDate}</p>
        <p class="mb-0">${location.description}</p>
      </div>
    `;

    // Show the modal
    const modal = new bootstrap.Modal(document.getElementById('photoModal'));
    modal.show();
  };

  // Fit map to show all markers
  if (travelLocations.length > 0) {
    const group = new L.featureGroup(travelLocations.map(loc =>
      L.marker(loc.coordinates)
    ));
    map.fitBounds(group.getBounds().pad(0.1));
  }
});
</script>