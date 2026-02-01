document.addEventListener('DOMContentLoaded', function () {
  var filterButtons = document.querySelectorAll('.projects-filters button');
  var featuredCards = document.querySelectorAll('.featured-card');
  var projectCards = document.querySelectorAll('.project-card');
  var archiveRows = document.querySelectorAll('.archive-table tbody tr');
  var searchInput = document.getElementById('archive-search');

  filterButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterButtons.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var filter = btn.getAttribute('data-filter');

      featuredCards.forEach(function (card) {
        card.style.display = (filter === 'all' || card.getAttribute('data-category') === filter) ? '' : 'none';
      });

      projectCards.forEach(function (card) {
        card.style.display = (filter === 'all' || card.getAttribute('data-category') === filter) ? '' : 'none';
      });

      archiveRows.forEach(function (row) {
        row.style.display = (filter === 'all' || row.getAttribute('data-category') === filter) ? '' : 'none';
      });
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', function () {
      var query = this.value.toLowerCase();
      archiveRows.forEach(function (row) {
        var text = row.textContent.toLowerCase();
        row.style.display = text.indexOf(query) !== -1 ? '' : 'none';
      });
    });
  }

  var archiveToggle = document.getElementById('archive-toggle');
  var archiveTable = document.querySelector('.archive-table');
  var archiveSearchBox = document.querySelector('.archive-search');
  var toggleIcon = document.querySelector('.archive-toggle__icon');

  if (archiveToggle) {
    archiveToggle.addEventListener('click', function () {
      var isHidden = archiveTable.style.display === 'none';
      archiveTable.style.display = isHidden ? '' : 'none';
      archiveSearchBox.style.display = isHidden ? '' : 'none';
      toggleIcon.classList.toggle('open', isHidden);
    });
  }
});
