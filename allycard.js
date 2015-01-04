//
// # Get your ally card!
//

buildChecklist();
document.querySelector('form').addEventListener('submit', submit);
document.getElementById('tweet').addEventListener('click', tweet);


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

function submit (event) {
  event.preventDefault();
  if (!document.getElementById('group').value.length) {
    showError('empty');
    document.getElementById('group').focus();
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

function tweet (event) {
  event.preventDefault();
  var url = 'https://twitter.com/share?url='
          + encodeURIComponent('http://allycard.me')
          + '&via=allycard&text='
          + encodeURIComponent('Are you a true ally?');

  generatePopup(url);
}

function generatePopup (url) {
  var width = 550;
  var height = 300;
  var left = (screen.width / 2) - (width / 2);
  var top = (screen.height / 2) - (height / 2);
  var popupAttrs = 'height=' + height + ',width=' + width + ',left=' + left + ',top=' + top;
  popupAttrs += ',toolbar=0,location=0,menubar=0,scrollbars=0,status=0,resizable=no';

  window.open(url, '', popupAttrs);
}

