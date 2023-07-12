//code

  function filterContainers() {
    var searchTerm = document.getElementById("searchBar").value.toLowerCase();
    var selectedAddress = document.getElementById("addressDropdown").value.toLowerCase();
    var containers = document.getElementsByClassName("container");

    for (var i = 0; i < containers.length; i++) {
      var container = containers[i];
      var containerText = container.textContent.toLowerCase();
      var containerAddress = container.getElementsByTagName("p")[1].textContent.toLowerCase();

      if (searchTerm && selectedAddress) {
        if (containerText.includes(searchTerm) && containerAddress.includes(selectedAddress)) {
          container.style.display = "block";
        } else {
          container.style.display = "none";
        }
      } else if (searchTerm) {
        if (containerText.includes(searchTerm)) {
          container.style.display = "block";
        } else {
          container.style.display = "none";
        }
      } else if (selectedAddress) {
        if (containerAddress.includes(selectedAddress)) {
          container.style.display = "block";
        } else {
          container.style.display = "none";
        }
      } else {
        container.style.display = "block";
      }
    }
  }

