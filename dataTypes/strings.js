//// STRINGS ////

// escapes:
"\n"                // new line

"   \", \'    "     // use quotes 
alert( 'I\'m the Walrus!' ); // I'm the Walrus!

"\\"                // backslash
alert( `The backslash: \\` ); // The backslash: \

// examples with unicode:
alert( "\u00A9" ); // ©
alert( "\u{20331}" ); // 佫, a rare Chinese hieroglyph (long Unicode)
alert( "\u{1F60D}" ); // 😍, a smiling face symbol (another long Unicode)

// to get a character at postition:
let str = `Hello`;

// the first character
alert( str[0] ); // H
alert( str.charAt(0) ); // H

// the last character
alert( str[str.length - 1] ); // o

// iterate over characters:
for (let char of "Hello") {
  alert(char); // H,e,l,l,o (char becomes "H", then "e", then "l" etc)
}