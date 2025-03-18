// Show Books Section on Button Click
document.getElementById('showBooksButton').addEventListener('click', function() {
  document.getElementById('booksSection').classList.remove('d-none');
});

// Show/Hide Summary on Button Click
document.getElementById('summaryButton').addEventListener('click', function() {
  const summaryContent = document.getElementById('summaryContent');
  if (summaryContent.classList.contains('d-none')) {
    summaryContent.classList.remove('d-none');
    this.textContent = 'Hide Summary';
  } else {
    summaryContent.classList.add('d-none');
    this.textContent = 'Show Summary';
  }
});

// Switch to Page 2
document.querySelector('#page1 .benefit-box:last-child').addEventListener('click', function() {
  document.getElementById('page1').classList.add('d-none');
  document.getElementById('page2').classList.remove('d-none');
});

// Back to Page 1
document.getElementById('backToPage1').addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById('page2').classList.add('d-none');
  document.getElementById('page1').classList.remove('d-none');
});