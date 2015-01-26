//
// # Get your ally card!
//

buildChecklist();
buildResources();
document.addEventListener('DOMContentLoaded', function(event) {
  fadeIn();
});
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

function buildResources () {
  var resourcesDiv = document.getElementById('resources');
  var itemDiv, categoryDiv, resource, qs = '';
  for (category in resources) {
    categoryDiv = '<li class="category" id="resources' + category + '">' + resources[category].category + '<ul></ul></li>';
    resourcesDiv.insertAdjacentHTML('beforeend', categoryDiv);
    for (item in resources[category].list) {
      resource = resources[category].list[item];
      itemDiv = '<li class="resource"><a href="' + resource.url + '">' + resource.title + '</a>';
      itemDiv += resource.description ? ': ' + resource.description : '';
      itemDiv += '</li>';
      qs = '#resources' + category + ' ul';
      document.querySelector(qs).insertAdjacentHTML('beforeend', itemDiv);
    }
  }
}

function fadeIn () {
  setTimeout(function () {
    document.querySelector('section').classList.add('fadein');
  }, 2);
}

function submit (event) {
  event.preventDefault();
  if (allChecked()) {
    success();
  } else {
    fail();
  }
  document.getElementById('allycard').classList.add('fadein');
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

function fail() {
  document.getElementById('allycard').classList.remove('show-success');
  document.getElementById('allycard').classList.add('show-fail');
}


function success () {
  document.getElementById('allycard').classList.remove('show-fail');
  document.getElementById('allycard').classList.add('show-success');
}

function tweet (event) {
  event.preventDefault();
  var url = 'https://twitter.com/share?url='
          + encodeURIComponent('http://allycard.me')
          + '&text='
          + encodeURIComponent('Are you a true ally? Get your "Ally Card" here: ');

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
