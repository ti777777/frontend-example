export class DomParser {
  static parse(json: object, hierarchy: number = 0) {
  }

  static print(json: object, hierarchy: number = 0) {
    let space = "   ";
    let intent = "";
    for (var i = 0; i < hierarchy; i++) {
      intent = intent + space;
    }
    for (let [key, value] of Object.entries(json)) {
      if (typeof value == "object") {
        if (Array.isArray(value)) {
          console.log(`${intent}"${key}":[`);
          value.forEach((obj) => {
            if (typeof obj === "string") {
              console.log(`${intent}${space}"${obj}",`);
            } else if (typeof obj === "boolean") {
              console.log(`${intent}${space}${obj},`);
            } else if (typeof obj === "number")
              console.log(`${intent}${space}${obj},`);
            else {
              console.log(` ${intent}{`);
              this.print(obj, hierarchy + 1);
              console.log(` ${intent}},`);
            }
          });
          console.log(`${intent}]`);
        } else {
          console.log(`${intent}"${key}":{`);
          this.print(value, hierarchy + 1);
          console.log(`${intent}},`);
        }
      } else {
        if (typeof value === "boolean"){
          console.log(`${intent}"${key}" : ${value},`);
        } else if (typeof value === "number"){
          console.log(`${intent}"${key}" : ${value},`);
        } else{ 
          console.log(`${intent}"${key}" : "${value}",`);
        }
      }
    }
  }
}
