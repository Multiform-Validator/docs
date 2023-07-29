  // Function to set the dark mode preference in local storage
  function setDarkModePreference(darkMode) {
    localStorage.setItem('darkModePreference', darkMode);
  }

  // Function to get the dark mode preference from local storage
  function getDarkModePreference() {
    return localStorage.getItem('darkModePreference');
  }

  // Function to apply the dark mode if it's enabled in local storage
  function applyDarkModeFromLocalStorage() {
    const darkModePreference = getDarkModePreference();
    if (darkModePreference === 'true') {
      $('body').addClass('dark');
      $('#switch').addClass('switched');
    }
  }

  $(document).ready(() => {
    // Apply dark mode from local storage when the page loads
    applyDarkModeFromLocalStorage();

    // Rest of your existing code...

    // Switch light/dark
    $('#switch').on('click', () => {
      if ($('body').hasClass('dark')) {
        $('body').removeClass('dark');
        $('#switch').removeClass('switched');
        // Store the dark mode preference as 'false' in local storage
        setDarkModePreference('false');
      } else {
        $('body').addClass('dark');
        $('#switch').addClass('switched');
        // Store the dark mode preference as 'true' in local storage
        setDarkModePreference('true');
      }
    });
  });