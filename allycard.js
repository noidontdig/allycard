//
// # Get your ally card!
//

buildChecklist();
document.querySelector('form').addEventListener('submit', validate);


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
  if (!document.getElementById('group').value.length) {
    showError('empty');
    return;
  }

  if (allChecked()) {
    success();
  } else {
    showError('fail');
  }
}

function showError (errorName) {
  hideErrors();
  document.getElementById('allycard').classList.remove('show');
  document.getElementById(errorName).classList.add('show');
}

function hideErrors () {
  var errors = document.querySelectorAll('.error');
  for (var i = 0; i < errors.length; i++) {
    errors[i].classList.remove('show');
  }
}

function success () {
  hideErrors();
  var group = document.getElementById('group').value;
  document.querySelector('.allycard span').innerText = group;
  document.getElementById('allycard').classList.add('show');
}

