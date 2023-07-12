// 속성 계산명
// 속성 이름을 정의하는 다른 방법. 대괗호 [] 안에 식을 넣거나 변수를 대입하여 동족으로 
// 객체 속성들을 생성가능하다.

var obj = {};
for(var i = 0; i< 4; i++){
    obj['key'+i] = i;

}

var profile = 'chole:30';
var person = {
    [profile]: true,
    [profile.split(':')[0]]:profile.split(':')[1]
};

console.log(person)