function foo() {
  var bar;
  quux = 5;

  function zip() {
    bar = true;
    var quux = 0;
  }

  return zip;
}
