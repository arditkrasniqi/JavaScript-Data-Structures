// ArrayList Data Structure JavaScrpt Implementation
// Ardit Krasniqi
// https://www.facebook.com/spytr0n

function ArrayList(){

    // Index for adding elements
    var index = 0;

    // the array
    var array = [];

    // returns the size of the ArrayList
    this.size = function(){
        return array.length;
    }

    //isEmpty method
    this.isEmpty = function(){
        if(array.length === 0){
            return true;
        }
        return false;
    }

    // adding elements to ArrayList
    this.add = function(val){
        if(val.trim() === ''){
            throw new Error('Can\'t add empty values');
        }
        array[index++] = val;
    }

    // arraylist contains method
    this.contains = function(val){
        if(val.trim() === ''){
            throw new Error('Empty values can\'t be used');
        }
        for(i=1;i<index;i++){
            if(array[i] === val){
                return true;
            }
        }
        return false;
    }

    // indexOf method
    this.indexOf = function(el){
        if(el === ''){
            throw new Error('Empty values can\'t be used');
        }
        for(i=0;i<index;i++){
            if(el === array[i]){
                return i;
            }
        }
        return -1;
    }

    // replacing a element
    this.set = function(i,val){
        if(i > this.size() || i < 0){
            throw new Error('Index must be between 0 - and the array size');
        }
        array[i] = val;
    }

    // getting the element using index
    this.get = function(i){
        if(i > index){
            throw new Error('Undefined value at index: '+i);
        }
        return array[i];
    }

    // removing a element from ArrayList
    this.remove = function(i){
        if(i > index){
            throw new Error("Undefined element at index: "+i);
        }else if(i < 0){
            throw new Error("You cant use negative values");
        }
        array[i] = undefined;
        fixUndef();
    }

    // clearing the ArrayList
    this.clear = function(){
        array.length = 0;
        index = 0;
    }

    // removing a range of elements
    this.removeRange = function(pos1,pos2){
        if((pos1 < 0 && pos1 < 0)){
            throw new Error('Negative numbers can\'t be used');
        }else if(pos1 > this.size() && pos2 > this.size()){
            throw new Error('Indexes can\'t be greater than arraylist size');
        }else if(pos1 > pos2){
            throw new Error('First index can\'t be greater than second Index');
        }else{
            if(pos1 > index){
                throw new Error('You can\'t remove undefined elements');
            }
            for(y=pos1;y<=pos2;y++){
                if(y > index){
                    return;
                }
                array[y] = undefined;
            }
            fixUndef();
        }
    }

    // listing all the elements of array
    this.toString = function(){
        for(i=0;i<index;i++){
            console.log(i+" - "+array[i]);
        }
    }

    //sorting the arraylist
    this.sort = function(){
        array.sort();
    }

    //clone method
    this.clone = function(el){
        var el = [];
        for(i=0;i<array.length;i++){
            el[i] = array[i];
        }
        return el;
    }

    // removing undefined elements
    var fixUndef = function(){
        var ar = [];
        var pos = 0;
        for(i=0;i<array.length;i++){
            if(array[i] !== null && array[i] !== undefined){
                ar[pos++] = array[i];
            }
        }
        array.length = ar.length;
        index = array.length;
        for(i=0;i<ar.length;i++){
            array[i] = ar[i];
            // console.log(i+" - " + array[i] + " : " + ar[i]);
        }
        ar.length = 0;
    }
}
