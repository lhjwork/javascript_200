// 객체 이해하기 29
// (속성 접근 / 추가 / 수정 / 삭제)

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
family.addFamily(10,'you','friend');

var printMembers = function() {
    var members = family.members;
    for(role in members) {
        console.log('role =>' + role + ', name =>' + members[role].name + ', age => ' + members[role].age);
    }
};

// printMembers();

var members = family.members;
members['nephew'] = {age : 3 , name : 'hyun'};
members.dog = {age:5, name: 'lyn'};
delete members.aunt;
// printMembers();
delete members['dog'];
// // printMembers();



console.log(family.getHeadCount());
// console.log(family);
