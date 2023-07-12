var family = {
    'addrss':'Seoul',
    members :{},
    addFamily: function(age, name, role){
        this.members[role] = {
            age,
            name
        }
    },

    getHeadCount: function(){
        return Object.keys(this.members).length;
    }
}

family.addFamily(20, 'jin');

console.log('test', family.getHeadCount());