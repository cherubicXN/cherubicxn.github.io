var scripts = document.getElementsByTagName('script');


function showall(istrue) {
  var pubs = document.getElementById("pubs");
  var source = document.getElementById(istrue === 1 ? 'pubs_all' : 'pubs_sel');
  if (pubs && source) {
    pubs.innerHTML = source.innerHTML;
  }

  // The selected/all toggle links only exist on the full publication page.
  var select0 = document.getElementById('select0');
  var select1 = document.getElementById('select1');
  if (select0) {
    select0.setAttribute('style', istrue === 1 ? '' : 'text-decoration:underline;color:#000000');
  }
  if (select1) {
    select1.setAttribute('style', istrue === 1 ? 'text-decoration:underline;color:#000000' : '');
  }
}
