
let fs=require('fs')

let d = String(fs.readFileSync('e.lo>
// console.log(d)
let vars ={}
d.forEach(e=>{
f=e
e=e.replace(/<->/g,'==')
e=e.replace(/[+]/g,'!=')
e=e.replace(/->/g,' !=1 | ')
e=e.replace(/[:]/g,'=>')
let t=e.split(' ')
// console.log(t)

  if(t[0]=='prop'){
vars[t[1]]=t[2]
console.log('>> '+f)
eval(`${t[1]}=${t[2]}`)
console.log('New propositon added '+>
}
else{
console.log('>> '+f)
console.log(eval(e))
}
})
