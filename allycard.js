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
    emptyError();
    return;
  }

  if (allChecked()) {
    success();
  } else {
    fail();
  }
}

function success () {
  var group = document.getElementById('group').value;
  document.querySelector('.allycard span').innerText = group;
  document.body.classList.remove('fail');
  document.body.classList.remove('empty');
  document.body.classList.add('success');
}

function fail () {
  document.body.classList.remove('empty');
  document.body.classList.remove('success');
  document.body.classList.add('fail');
}

function emptyError () {
  document.body.classList.remove('fail');
  document.body.classList.remove('success');
  document.body.classList.add('empty');
}

buildChecklist();
document.querySelector('form').addEventListener('submit', validate);
