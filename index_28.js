// 객체 이해하기
// 참조 자료형인 객체에 대해알아본다.


var family =  {
    'address': "Seoul",
    members:{},
    addFamily : function(age, name, role) {
        this.members[role] = {
            age,
            name
        }
    },
    getHeadCount : function() {
        return Object.keys(this.members).length;
    },

};

family.addFamily(30,'chloe','aunt');
family.addFamily(3,'jin','my');
// family.addFamily(10,'you','friend');


console.log(family.getHeadCount());
console.log(family);
