class Hero {
    constructor(name, age, type) {
      this.name = name;
      this.age = age;
      this.type = type;
    }
  
    // Corrigido: Retorna corretamente o tipo de ataque
    atack() {
      if (this.type === "Mago") {
        return "Magia";
      } else if (this.type === "Guerreiro") {
        return "Espada";
      } else if (this.type === "Monge") {
        return "Artes marciais";
      } else if (this.type === "Ninja") {
        return "Shuriken";
      } else {
        return "Ataque do herói";
      }
    }
  
    // Corrigido: Usa `this.type` e chama `this.atack()`
    message() {
      console.log(`O ${this.type} atacou usando ${this.atack()}`);
    }
  }
  
  // Criando heróis corretamente
  let harryPotter = new Hero("Harry Potter", 21, "Mago");
  let ragnar = new Hero("Ragnar", 42, "Guerreiro");
  let dalai = new Hero("Dalai Lahma", 76, "Monge");
  let jackieChan = new Hero("Jackie Chan", 108, "Ninja");
  
  // Chamando os métodos para exibir as mensagens de ataque
  harryPotter.message();
  ragnar.message();
  dalai.message();
  jackieChan.message();