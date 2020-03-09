class Person {
  constructor(private name: string) {
    this.name = name
  }


  public get getName(): string {
    return this.name
  }

}

const max = new Person('Maxim')

function logInfo(data: string) {
  console.log(data)
}
logInfo('I am log string')

