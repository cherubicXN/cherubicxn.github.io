var scripts = document.getElementsByTagName('script');


function showall(istrue) {

  if (istrue === 1) {
    document.getElementById("pubs").innerHTML = document.getElementById('pubs_all').innerHTML
    document.getElementById('select0').style = '';
    document.getElementById('select1').style = 'text-decoration:underline;color:#000000';
  }
  else{
    document.getElementById("pubs").innerHTML = document.getElementById('pubs_sel').innerHTML
    document.getElementById('select0').style = 'text-decoration:underline;color:#000000';
    document.getElementById('select1').style = '';


  }
}
