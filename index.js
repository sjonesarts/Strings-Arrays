let dna = "TCG-TAC-GAC-TAC-CGT-CAG-ACT-TAA-CCA-GTC-CAT-AGA-GCT";

//a) Replace the gene "GCT" with "AGG", and then print the altered strand.
dna.replace ("GTC" , "AGG");
console.log (dna);

//b) Look for the gene "CAT" with ``indexOf()``. If found print, "CAT gene found", otherwise print, "CAT gene NOT found".
if (dna.indexOf ("cat") > 0) {
  console.log ("CAT gene found")
} else if (dna.indexOf ("cat") < 0) {
  console.log ("CAT gene NOT found")
}


//c) Use .slice() to print out the fifth gene (set of 3 characters) from the DNA strand.
dna.slice (16,19)


//d) Use a template literal to print, "The DNA strand is ___ characters long."
console.log(`The DNA strand is ${dna.length - 12} characters long.`)
//logic error: I don't think the "-" should count as DNA character length, but I couldn't figure out how to exclude them without just subtacting them out.

//e) Just for fun, apply methods to ``dna`` and use another template literal to print, 'taco cat'.
console.log(`${dna.slice(4,7).toLowerCase()}o ${dna.slice(dna.indexOf('CAT'),dna.indexOf('CAT')+3).toLowerCase()}`);