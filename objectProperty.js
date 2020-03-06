const Students=[
    {id:21, Name:'Omarsani'},
    {id:22, Name:'Shakib'},
    {id:23, Name:'Manna'},
    {id:24, Name:'Dipjol'}
];


const name = Students.map(n=>n.Name);
const Ids= Students.map(id=>id.id);
const finds = Students.filter(s=>s.id>22);
const finds2 = Students.find(s=>s.id>20);
console.log(finds2);