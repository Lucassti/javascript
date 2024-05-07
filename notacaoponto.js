const obj1 = {}
obj1.membro1="bola"
obj1.desc="Bola um objeto maravilhoso redondo com fisíca legal."
console.log(obj1.desc)

function obj(membro1){
    this.membro1 = membro1
    console.log(membro1);
}

const obj1 = new obj("Cadeira")