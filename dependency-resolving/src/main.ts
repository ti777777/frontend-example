import { container } from './base'


const modules = container()
console.log(modules.moduleA)
const modules2 = container()
console.log(modules2.moduleA)
