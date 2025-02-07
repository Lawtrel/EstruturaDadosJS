// Definindo a classe Node (Nó)
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  // Definindo a classe Lista Encadeada
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    // Método para adicionar um nó ao final da lista
    add(value) {
      const newNode = new Node(value);
      if (this.head === null) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next !== null) {
          current = current.next;
        }
        current.next = newNode;
      }
      this.size++;
    }

    static Mesclar(list1, list2) {
        let aux = new Node(0);
        let tail = aux;

        let l1 = list1.head;
        let l2 = list2.head;

        while (l1 !== null && l2 !== null) {
            if (l1.value < l2.value) {
                tail.next = l1;
                l1 = l1.next;
            } else {
                tail.next = l2;
                l2 = l2.next;
            }
            tail = tail.next;
        }

        if (l1 !== null) {
            tail.next = l1;
        } else {
            tail.next = l2;
        }

        const Mesclar = new LinkedList();
        Mesclar.head = aux.next;
        return Mesclar;
    }
  
    // Método para imprimir a lista
    printList() {
      let current = this.head;
      let listValues = [];
      while (current !== null) {
        listValues.push(current.value);
        current = current.next;
      }
      console.log(listValues.join(' , '));
    }
  }
  
  // Exemplo de uso
  const list = new LinkedList();
  const list2 = new LinkedList();

  list.add(10);
  list.add(20);
  list.add(30);
  list.printList(); // Saída: 10 -> 20 -> 30
  
  list2.add(11);
  list2.add(12);
  list2.add(13);
  list2.printList()

  const mesclar = LinkedList.Mesclar(list, list2);
  mesclar.printList(); 