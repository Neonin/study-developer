class DateBase {
  constructor(data) {
    if (DateBase.exists) {
      return DateBase.instance
    }

    DateBase.instance = this
    DateBase.exists = true
    this.data = data
  }

  getData() {
    return this.data
  }
}

const mongo = new DateBase('MongoDB')
console.log(mongo.getData())

const mysql = new DateBase('MySql')
console.log(mysql.getData())
