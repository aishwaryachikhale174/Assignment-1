document.addEventListener('DOMContentLoaded', function () {
    const dropdownInput = document.getElementById('issue');
    const dropdownList = document.getElementById('dropdownList');
  
    dropdownInput.addEventListener('click', function () {
      dropdownList.style.display = dropdownList.style.display === 'block' ? 'none' : 'block';
    });
  
    dropdownList.addEventListener('click', function (e) {
      if (e.target.tagName === 'LI') {
        dropdownInput.value = e.target.textContent;
        dropdownList.style.display = 'none';
      }
    });
  
    // Close dropdown when clicking outside
    document.addEventListener('click', function (e) {
      if (!dropdownList.contains(e.target) && e.target !== dropdownInput) {
        dropdownList.style.display = 'none';
      }
    });
  });

  
  