import { DomParser } from './dom2json';
import './style.css'


let obj =
  [{
    "name": "json-dom",
    "private": true,
    "version": "0.0.0",
    "version2": 0,
    "type": "module",
    "scripts": {
      "dev": "vite",
      "build": "tsc && vite build",
      "preview": ["123","456"],
      "preview2": [123,456],
      "preview3": [true,false]
    },
    "devDependencies": {
      "typescript": "^4.6.4",
      "vite": "^3.0.0"
    }
  }]


let obj2 = {"devDependencies": {
  "typescript": "^4.6.4",
  "vite": "^3.0.0"
}};

DomParser.print(obj)


let d = ["123","456"]
//console.log(typeof(d))
