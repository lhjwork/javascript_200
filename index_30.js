//  단축 속성명
// ES6부터 추가된 단축 속서으로 객체를 정의하는 방법

var address = "Seoul";
var members = {};
var addFamily = function(age, name, role){
    this.members[role] = {
        age,
        name,
    }
};
var getHeadCount = function(){
    return Object.keys(this.members).length;
}

var family = {address , members, addFamily, getHeadCount };

family.addFamily(30, 'chole', 'aunt');
family.addFamily(3, 'lyn', 'niece');
family.addFamily(10, 'kongsig','dog');
console.log(family.getHeadCount());

