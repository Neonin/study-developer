// function Log(constructor: Function) {
//   console.log(constructor)
// }

// function Log2(target: any, propName: string | Symbol) {
//   console.log(target)
//   console.log(propName)
// }

// function Log3(target: any, propName: string | Symbol, descriptor: PropertyDescriptor) {
//   console.log(target)
//   console.log(propName)
//   console.log(descriptor)
// }

// @Log
// class Component2 {
//   @Log2
//   name: string

//   constructor(name: string) {
//     this.name = name
//   }

//   @Log3
//   get componentName() {
//     return this.name
//   }

//   @Log3
//   logName(): void {
//     console.log(`Component name: ${this.name}`)
//   }
// }

interface ComponentDecorator {
  selector: string
  template: string
}

function Component2() {
  return function (Constructor: Function) {

  }
}

@Component2()
class CardComponent {

  constructor(public name: string) {
  }

  logName(): void {
    console.log(`Component name: ${this.name}`)
  }
}