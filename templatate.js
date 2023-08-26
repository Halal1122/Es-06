const name = 'Helal Uddin';
const age = 24;
const address = 'chunati, lohagara, chittagong';
const bowName = 'saima';
const sosorBari = 'BBadia';

// const sentence = 'amr Name ' + name +".amr bows "+ age+". amr badi "+ address+".amr bower name "+ bowName+". sasor badi "+ sosorBari;
// console.log(sentence) সাধারণ ভাবে

const subject = ['Bangla', 'English', 'math']
const sentence1 = ` 
amr name ${name}, 
amr bowes ${age}, 
amr boi golo ${subject.map(subject => subject).join(' ')},
amr badi ${address}, 
amr bower name ${bowName}, 
sosor badi ${sosorBari}
`;
console.log(sentence1)