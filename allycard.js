function buildChecklist () {
  var checklistDiv = document.getElementById('checklist');
  var itemDiv = '';
  for (item in checklist) {
    itemDiv = '<li><input type="checkbox" id="' + item + '"><label for="'
            + item + '">' + checklist[item] + '</label></li>';
    checklistDiv.insertAdjacentHTML('beforeend', itemDiv);
  }
}

function allChecked () {
  var list = document.querySelectorAll('li input');
  for (var i = 0; i < checklist.length; i++) {
    if (!list[i].checked) {
      return false;
    }
  }
  return true;
}

function validate (event) {
  event.preventDefault();
  if (allChecked()) {
    alert('You\'re an ally!');
  } else {
    alert('Sorry... No ally card for you.');
  }
}

buildChecklist();
document.querySelector('form').addEventListener('submit', validate);
