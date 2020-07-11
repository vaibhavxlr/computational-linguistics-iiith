var Eng = [
["John ate an apple before afternoon",	
"before afternoon John ate an apple",	
"John before afternoon ate an apple"], 

["some students like to study in the night",
    "at night some students like to study"
    ],

["John and Mary went to church",
     "Mary and John went to church"
        ],

['John and Mary went to church',
    'Mary and John went to church'
            ],

['did he go to market',	
    'he did go to market'
    ],

[
'the woman who called my sister sells cosmetics',
'the woman who sells cosmetics called my sister',
'my sister who sells cosmetics called the woman',
'my sister who called the woman sells cosmetics'
],

['the woman who called my sister sells cosmetics',
    'the woman who sells cosmetics called my sister',
   ' my sister who sells cosmetics called the woman',
    'my sister who called the woman sells cosmetics'
    ],

['John ate an apple so did she',
    'she ate an apple so did John'
    ],

['the teacher returned the book after she noticed the error',
    'the teacher noticed the error after she returned the book',
    'after the teacher returned the book she noticed the error',
    'after the teacher noticed the error she returned the book',
    'she returned the book after the teacher noticed the error',
    'she noticed the error after the teacher returned the book',
    'after she returned the book the teacher noticed the error',
    'after she noticed the error the teacher returned the book'
    ],

['I told her that I bought a book yesterday',
    'I told her yesterday that I bought a book',
    'yesterday I told her that I bought a book',
    'I bought a book that I told her yesterday',
    'I bought a book yesterday that I told her',
    'yesterday I bought a book that I told her'
    ]

];

var hin = [

        ['राम और श्याम बाजार गयें',
        'राम और श्याम गयें बाजार',
        'बाजार गयें राम और श्याम',
        'गयें बाजार राम और श्याम'
        ],

        ['राम सोया और श्याम भी',
            'श्याम सोया और राम भी',
            'सोया श्याम और राम भी',
           ' सोया राम और श्याम भी'
        ],

        ['राम सोया और श्याम भी',
            'श्याम सोया और राम भी',
            'सोया श्याम और राम भी',
            'सोया राम और श्याम भी'
        ],

        ['राम खाकर सोया',
            'खाकर राम सोया',
            'राम सोया खाकर',
            'खाकर सोया राम',
            'सोया राम खाकर',
            'सोया खाकर राम'
        ],
        
        [
            'बिल्लियों को मारकर कुत्ता सो गया',
            'मारकर बिल्लियों को कुत्ता सो गया',	 
            'बिल्लियों को मारकर सो गया कुत्ता',	
            'मारकर बिल्लियों को सो गया कुत्ता',	
            'कुत्ता सो गया बिल्लियों को मारकर',	
            'कुत्ता सो गया मारकर बिल्लियों को',	
            'सो गया कुत्ता बिल्लियों को मारकर',
            'सो गया कुत्ता मारकर बिल्लियों को'

        ],

        [
            'एक लाल किताब वहाँ है',
            'एक लाल किताब है वहाँ',
            'वहाँ है एक लाल किताब',
           ' है वहाँ एक लाल किताब'

        ],


        [
            'एक बड़ी सी किताब वहाँ है',
            'एक बड़ी सी किताब है वहाँ',
            'बड़ी सी एक किताब वहाँ है',
            'बड़ी सी एक किताब है वहाँ',
            'वहाँ है एक बड़ी सी किताब',
            'वहाँ है बड़ी सी एक किताब',
            'है वहाँ एक बड़ी सी किताब',
            'है वहाँ बड़ी सी एक किताब'

        ]

]

//document.write(Eng[0][0])

function randomize_forbuttons(ans) {

    var final_ans = [];
    for(i = 0; i < ans.length; i++) {
        var index = Math.floor(Math.random() * ans.length);
        final_ans[i] = ans[index];
    }
   // document.write(final_ans)
    return final_ans;
}

function forEng() {

    var numl = Math.floor(Math.random() * 10);
    var sen = Eng[numl][0];
    var ans = sen.split(" ");
    //document.write(ans);
   randomize_forbuttons(ans);
}

function forhin() {

    var numl = Math.floor(Math.random() * 7);
    var sen = hin[numl][0];
    var ans = sen.split(" ");
    //document.write(ans);
   randomize_forbuttons(ans);
}


function getOption(a) {
   document.getElementById('bol').innerHTML = 'Form a  sentence (Declarative or Interrogative or any other type) from the given words'
   document.getElementById('ital').innerHTML = '(select the buttons in proper order)'
    
   if(a == 'english') {
        forEng();
    }
    else if(a == 'hindi') {
        forhin();
    }
}