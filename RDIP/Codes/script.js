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

['The teacher returned `the book after she noticed the error',
    'The teacher noticed `the error after she returned the book',
    'after The teacher returned `the book she noticed the error',
    'after The teacher noticed `the error she returned the book',
    'she returned The book after `the teacher noticed the error',
    'she noticed The error after `the teacher returned the book',
    'after she returned The book `the teacher noticed the error',
    'after she noticed The error `the teacher returned the book'
    ],

['I told her that i bought a book yesterday',
    'I told her yesterday that i bought a book',
    'yesterday I told her that i bought a book',
    'I bought a book that i told her yesterday',
    'I bought a book yesterday that i told her',
    'yesterday I bought a book that i told her'
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

//var backup;

// function restart() {
//     le
//     for (x of final_ans) {

//         buttonList += `<button id = ${x}  value = ${x} onclick = "printelem(this.value);">${x}</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`
//     }
//     //console.log(typeof(res[0]))
//     // for (x in res) {
//     //     if(x != ' ')
//     //      document.getElementById(x).style.visibility = 'visible';
//     // }
// }
//let backup;
//ans = "";

window.res = "";
var ithave = [];
var final_str = "";

function printelem(val) {
    //console.log(typeof(val))
    document.getElementById(val).style.visibility = 'hidden';
    res += val + " " 
    let res_holder = res.split(" ");
    let para;
    
    // console.log(res_holder.length)
    // console.log(ithave.length)

    if(res_holder.length - 1 == ithave.length) {
        para = `<b style = "color:blue">Formed Sentence </b><i>(after selecting words):</i><br><h1>${res}</h1> <button style = "padding-bottom:20px; margin-left:20%" onclick = "randomize_forbuttons();">Re-form the sentence</button><br><br><button style = "padding-bottom:20px; margin-left:15%" onclick = " check_if_correct()">Check the correctness of this sentence</button>`
    }
    else {
        para = `<b style = "color:blue">Formed Sentence </b><i>(after selecting words):</i><br><h1>${res}</h1><button style = "padding-bottom:20px; margin-left:20%" onclick = "randomize_forbuttons();">Re-form the sentence</button> `
        // final_str = Arrays.toString(res_holder);
        // console.log(final_holder);
        //console_log(res_holder);
        //final_str = res;
    }

    document.getElementById('final').innerHTML = para;

}

// function givecorrect() {
    
   
//     let hehe = "";
//     for(i = 0; i < Eng.length; i++) {
        
//         if(res.localeCompare(Eng[i][0] + " ") == 0) {
//             console.log(Eng[i][0])
//         console.log(res)
//             for(j = 0; j < Eng[i].length; j++) {
//                 hehe += `<p>${Eng[i][j]}</p><br>`
//             }
            
        
//         //return;
//         }
//     }

//     for(i = 0; i < hin.length; i++) {
//         if(res.localeCompare(hin[i][0] ) == 0) {
//             console.log(Eng[i][0])
//         console.log(res)
//             for(j = 0; j < hin[i].length; j++) {
//                 hehe += `<p>${hin[i][j]}</p><br>`
//             }
//         }
    
  
//     }
// document.getElementById('ans2').innerHTML = hehe;  
// }

function check_if_correct() {
    
    //console.log(res)
    //let ans1 = "";
    let flag1 = 0, flag2 = 0;
    let ans1 = `<h3 style = "color:red;margin-left:18%; margin-top:-5%;">Wrong Answer!!!</h3><button style = "padding-bottom:20px; margin-top:-5%; margin-left:20%" onclick = "givecorrect();">Get Correct Sentence</button>`
        for(i = 0; i < Eng.length; i++) {
            for(j = 0; j < Eng[i].length; j++) {
                
                //console.log(res === Eng[i][j])
              
                if(res === Eng[i][j] + " ") {
                    ans1 = `<h3 style = "margin-left:18%; margin-top:-5%; color:green;">Right Answer!!!</h3>`;
                   // document.getElementById('ans').innerHTML = ans1;
                    flag1 = 1;    
                    break;
                    //document.getElementById('ans').innerHTML = ans;
                }
                if(flag1)
                break;
            }
         }
            if(!flag1)
               { for(i = 0; i < hin.length; i++) {
                    for(j = 0; j < hin[i].length; j++) {
                        
                        //console.log(res === Eng[i][j])
                    
                        if(res === hin[i][j] + " ") {
                            ans1 = `<h3 style = "margin-left:18%; margin-top:-5%; color:green;">Right Answer!!!</h3>`;
                        // document.getElementById('ans').innerHTML = ans1;
                            flag2 = 1;    
                            break;
                            //document.getElementById('ans').innerHTML = ans;
                        }
                    
                    }
                if(flag2)
                    break;
               }
            }

        document.getElementById('ans').innerHTML = ans1;
        

}


function randomize_forbuttons() {
    // let ans = backup;
    
    document.getElementById('but').innerHTML = "";
    document.getElementById('final').innerHTML = "";
    document.getElementById('ans').innerHTML = "";

     res = "";
    let temp = [...ithave];
    
    // console.log(ans);
     //console.log(temp);
    let final_ans = [];
    //console.log('reach')
    let len = temp.length;
    let count = 1;
    for(i = 0; i < len; i++) {
        var index = Math.floor(Math.random() * (len - count));
       // console.log(ans[index])
        final_ans.push(temp[index]);
        
        temp.splice(index, 1);
        count++;
    }
    let buttonList = "";

    for (x of final_ans) {
    
        buttonList += `<button style = "padding-bottom:20px" id = ${x}  value = ${x} onclick = "printelem(this.value);">${x}</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`
    
    }
    
    document.getElementById('but').innerHTML = buttonList;
    

}




function forEng() {
    
    var numl = Math.floor(Math.random() * 10);
    var sen = Eng[numl][0];
    let temp = sen.split(" ");
    ithave = [...temp];
    //window.ithave = temp;
    //backup = ans;
   // document.write(ans);
    randomize_forbuttons();

    
}


function forhin() {

    var numl = Math.floor(Math.random() * 7);
    var sen = hin[numl][0];
    let temp = sen.split(" ");
    ithave = [...temp];
    //backup = ans;\=
    //document.write(ans);
    randomize_forbuttons();
    

}


function getOption(a) {

   document.getElementById('bol').innerHTML = 'Form a  sentence (Declarative or Interrogative or any other type) from the given words'
   document.getElementById('ital').innerHTML = '(select the buttons in proper order)'
   
   
   if(a === 'english' || a === 'hindi') {

    var x = document.getElementById('but'); 
    x.style.visibility = 'visible';
    

   }

   if(a === 'english') {

        forEng();
    
    }
    else if(a === 'hindi') {
        
        forhin();
    
    }

}