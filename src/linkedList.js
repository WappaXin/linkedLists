import {Node} from "./node.js"

export class LinkedList{
    constructor(arr = []){
        this.arr = arr;
    }

    append(value){
        if(this.arr[0] === undefined){
            this.arr[0] = new Node(value);
            return;
        }
        
        if(this.arr[0] !== undefined){
            step(this.arr[0]);
            return;
        }

        function step(object){
            if(object.nextNode === null){
                object.nextNode = new Node(value);
                return;
            }

            if(object.nextNode !== null){
                return step(object.nextNode);
            }
        }
    }

    prepend(value){
        if(this.arr[0] === undefined){
            this.arr[0] = new Node(value);
            return;
        }

        if(this.arr[0] !== undefined){
            this.arr[0] = new Node(value , this.arr[0]);
            return;
        }
    }

    size(){
        if(this.arr[0] === undefined){
            return 0;
        }

        if(this.arr[0] !== undefined){
            return step(this.arr[0]);
        }

        function step(object){
            if(object.nextNode === null){
                return 1;
            }

            if(object.nextNode !== null){
                return 1 + step(object.nextNode);
            }
        }
    }

    head(){
        if(this.arr[0] === undefined){
           return "No node";
        }

        if(this.arr[0] !== undefined){
           return this.arr[0];
        }
    }

    tail(){
        if(this.arr[0] === undefined){
           return "No node";
        }

        if(this.arr[0] !== undefined){
           return step(this.arr[0]);
        }

        function step(object){
            if(object.nextNode === null){
                return object;
            }

            if(object.nextNode !== null){
                return step(object.nextNode);
            }
        }

    }

    at(index){
        let lastNode = this.findIndexOf(this.tail().value);
        if(this.arr[0] === undefined){
            return "empty linkedList";
        }

        if(this.arr[0] !== undefined){
            if(index > lastNode || index < 0) return;
            return step(this.arr[0]);
        }

        function step(object , index1 = 0){
            if(index1 === index){
                return object;
            }

            if(index1 !== index){
                return step(object.nextNode , index1 + 1);
            }
        }
    }

    pop(){
        if(this.arr[0] === undefined){
            return "empty linkedList";
        //if there is only one element in the linked list then linkedList will be empty 
        }else if(this.arr[0].nextNode === null){
            this.arr = [];
        }

        // if linkedList contains more than 1
        if(this.arr[0].nextNode !== null){
            return step(this.arr[0]);
        }

        function step(object){
            if(object.nextNode.nextNode === null){
                object.nextNode = null; 
                return;
            }

            if(object.nextNode.nextNode !== null){
                return step(object.nextNode);
            }
        }
    }

    contains(value){
        if(this.arr[0] === undefined){
            return false;
        }

        if(this.arr[0] !== undefined){
            return step(this.arr[0]);
        }

        function step(object){
            if(object.value === value){
                return true;
            }else if(object.nextNode === null && object.value !== value){
                return false;
            }

            if(object.value !== value){
                return step(object.nextNode);
            }

        }
    }

    findIndexOf(value){
        if(this.arr[0] === undefined){
            return null;
        }

        if(this.arr[0] !== undefined){
            let index1 = step(this.arr[0]);

            if(isNaN(index1)){
                return null;
            }

            return index1;
        }

        function step(object , index2 = 0){
            if(object.value === value){
                // since we are adding 1 every time object doesn't contain given value,
                // If value is found then returning 0 would make the total index value-
                // -as if index starts from 0
                return 0;
            }else if( object.nextNode === null && object.value !== value ){
                return NaN;
            }

            if(object.value !== value){
                return 1 + step(object.nextNode , index2 + 1);
            }
        }
    }

    toString(){
        if(this.arr[0] === undefined){
            return "Empty linked list";
        }

        if(this.arr[0] !== undefined){
            return step(this.arr[0]);
        }

        function step(object){
            if(object.nextNode === null){
                return ` ( ${object.value} ) -> null ` ;
            }

            if(object.nextNode !== null){
                return `( ${object.value} ) ->` + step(object.nextNode);
            }
        }
    }
    
    insertAt(value , index){
        let lastNode = this.findIndexOf(this.tail().value);
        if(this.arr[0] === undefined){
            return `Empty linked list`;
        }

        if(this.arr[0] !== undefined){
            if(index === 0){
                this.prepend(value);
                return;
            // if index value is right after the last node then append it 
            }else if(index === lastNode + 1){
                this.append(value);
                return;
            }else if( index > lastNode + 1 || index < 0){
                return;
            }

            this.at(index - 1).nextNode = new Node(value , this.at(index));
            return;
        }
    }

    removeAt(index){
        let lastNode = this.findIndexOf(this.tail().value);
        if(this.arr[0] === undefined){
            return `Can't remove because it's an empty linked list`;
        }

        if(this.arr[0] !== undefined){
            if(index === 0){
                this.arr[0] = this.at(1);
                return;
            }else if(index === lastNode){
                this.pop();
                return;
            }else if(index > lastNode || index < 0){
                return;
            }

            this.at(index - 1).nextNode = this.at(index + 1);
        }
    }

    removeNodeContainingThisValue(value){
        // indexOfValue returns null if value not found
        let indexOfValue = this.findIndexOf(value); 
        if( indexOfValue === null ){
            return;
        }

        this.removeAt(indexOfValue);
    }

    displayLinkedList(){
        return this.arr[0];
    }

}