var app = angular.module('postscriptaApp', [])
  .controller('AlphabetDisplayController', function() {
    console.log('CTRL is HERE');
    var vm = this;

    vm.typedArray = [];
    vm.handwrittenArray = [];

    // example of array of objects, maybe this structure makes more sense?
    // vs. just an object
    // vm.bImg = [
    //   {code:'Bb', sorc: '/static/img/bImg.png'}
    // ];

//CREATE DICTIONARY FOR LETTER TO IMAGE SOURCE
    // store obj with key being string of letter typed (first lower case)
    // and value being src for image corresponding to that letter
    // eventually, refactor to JSON
    var alphabetList = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o'];


    // eventually, abstract out to a service to create alphabet, instantiate here
    for(i=0;i<=25;i++){
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
        console.log('typed array', typedArray[i]);
        var theImg = new Image();
        console.log('I AM WRITING LETTERS');
        // theImg.src = "/static/img/" + typedArray[i] + "Img.png";
        // console.log('the image src', theImg.src);
        // vm.handwrittenArray.push(theImg.src);
        theImg.src = "/static/img/" + typedArray[i] + "Img.png";
        // var theImgSrcReal = String.fromCharCode(theImgSrc);
        vm.handwrittenArray.push(theImg.src);
        console.log('handwritten array', vm.handwrittenArray);

        // theImg.src = the source of the img from object
        // theImg.src =
        // or do we need to add both img and src to an object, since need a new image
        // instantiated for displaying on page?
        // add to new array for display using src of image, handwrittenArray
        // return theImg;
      }
    };

    vm.alphaImages = ['/static/img/aImg.png', '/static/img/bImg.png']

    // write out letters in a form and then submit to trigger transcribe
    document.onkeypress = function(evt) {
      evt = evt || window.event;
      var charCode = evt.keyCode || evt.which;
      var charStr = String.fromCharCode(charCode);
      console.log(charStr);

      //add typed key (charStr) to typedArray

      vm.typedArray.push(charStr);
      console.log(vm.typedArray);
      // if(charCode === "") {
      //   console.log('CALL WRITE OUT LETTERS');
      //   vm.writeOutLetters(typedArray);
      // }
    return charStr;
    };

// when finished typing, call writeOutLetters to translate to pics of handwriting
      vm.writeOutLetters(vm.typedArray);

    vm.clickForText = function() {
      // for()
      vm.writeOutLetters(vm.typedArray);
    }
  });



// app.config(['$interpolateProvider', function($interpolateProvider) {
//   $interpolateProvider.startSymbol('{a');
//   $interpolateProvider.endSymbol('a}');
// }]);
