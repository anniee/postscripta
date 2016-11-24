angular.module('postscriptaApp', [])
  .controller('AlphabetDisplayController', function() {
    console.log('CTRL is HERE');
    var vm = this;

    vm.typedArray = [];

    // example of array of objects, maybe this structure makes more sense?
    // vs. just an object
    // vm.bImg = [
    //   {code:'Bb', sorc: '/static/img/bImg.png'}
    // ];

//CREATE DICTIONARY FOR LETTER TO IMAGE SOURCE
    // store obj with key being string of letter typed (first lower case)
    // and value being src for image corresponding to that letter
    var alphabetList = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o'];

    for(i=0;i<27;i++){
      var letterChar = alphabetList[i];
      var imgSource = '/static/img/' + letterChar + 'Img.png';
      // push key and val into alphabet obj
      // created as
      // key = char;
      // val = '/static/img/' + char + 'Img.png'
      // alphabet push key, val
      // alphabet.push(letterChar, imgSource);
    }

    var alphabet = {
      // will look like format
      // 'a': '/static/img/aImg.png',
    };

    // create new img for letter
    // assign img.src to val from alphabet obj
    var bImg = new Image();
    bImg.src = "/static/img/bImg.png";


    // write out letters
    // on key press, store letter typed in an array (typedArray)
    // after user is finished typing and clicks submit,
    // iterate over array and use string value of letter
    // to look up key in alphabet obj and set source of a new image
    // to source in obj

    // ng-click in template triggers writeOutLetters to
    // iterate over array and create new images corresponding to the
    // typed letters
    vm.writeOutLetters = function(typedArray) {
      for(i=0;i<typedArray.length;i++) {
        var theLetter = typedArray[i]
        var theImg = new Image();
        // theImg.src = the source of the img from object
        // theImg.src =
      }
    };

    vm.alphaImages = ['/static/img/bImg.png', '/static/img/aImg.png']

    document.onkeypress = function(evt) {
      evt = evt || window.event;
      var charCode = evt.keyCode || evt.which;
      var charStr = String.fromCharCode(charCode);
      console.log(charStr);

      //add
      // vm.writeLetter(charStr);
    return charStr;
    };

// when finished typing, call writeOutLetters to translate to pics of handwriting
      vm.writeOutLetters(vm.typedArray);
  });