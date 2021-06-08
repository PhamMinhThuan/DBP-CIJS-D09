// Thêm chức năng render Navigation bar 
function addLi(item){
    let content = item.content;
    let contentA = item.contentA;
    let contentA1 = item.contentA1;
    let contentA2 = item.contentA2;
    let contentA3 = item.contentA3;
    let contentB = item.contentB;
    let contentB1 = item.contentB1;
    let contentB2 = item.contentB2;
    let contentB3 = item.contentB3;
    let contentC = item.contentC;
    let contentC1 = item.contentC1;
    let contentC2 = item.contentC2;
    let contentC3 = item.contentC3;
document.getElementById("navBar").innerHTML+=`
<li class="navBar__li">
<a class="navBar__a" href="">`+content+`</a>
<ul class="navBar1">
  <li class="navBar__li1">
    <a href="">`+contentA+`</a>
    <ul class="navBar2">
      <li class="navBar__li2"><a href="">`+contentA1+`</a></li>
      <li class="navBar__li2"><a href="">`+contentA2+`</a></li>
      <li class="navBar__li2"><a href="">`+contentA3+`</a></li>
    </ul>
  </li>
  <li class="navBar__li1">
    <a href="">`+contentB+`</a>
    <ul class="navBar2">
      <li class="navBar__li2"><a href="">`+contentB1+`</a></li>
      <li class="navBar__li2"><a href="">`+contentB2+`</a></li>
      <li class="navBar__li2"><a href="">`+contentB3+`</a></li>
    </ul>
  </li>
  <li class="navBar__li1">
    <a href="">`+contentC+`</a>
    <ul class="navBar2">
      <li class="navBar__li2"><a href="">`+contentC1+`</a></li>
      <li class="navBar__li2"><a href="">`+contentC2+`</a></li>
      <li class="navBar__li2"><a href="">`+contentC3+`</a></li>
    </ul>
  </li>
</ul>
</li>
`
}
// Array Navigation bar 
liList=[
    { 
      content: "Danh sách nhóm A",
      contentA: "Gia đình An",
      contentA1: "Ba An",
      contentA2: "Mẹ An",
      contentA3: "An",
      contentB: "Gia đình Anh",
      contentB1: "Ba Anh",
      contentB2: "Mẹ Anh",
      contentB3: "Anh",
      contentC: "Gia đình Ân",
      contentC1: "Ba Ân",
      contentC2: "Mẹ Ân",
      contentC3: "Ân"
    },
    { 
      content: "Danh sách nhóm B",
      contentA: "Gia đình Bàng",
      contentA1: "Ba Bàng",
      contentA2: "Mẹ Bàng",
      contentA3: "Bàng",
      contentB: "Gia đình Bốn",
      contentB1: "Ba Bốn",
      contentB2: "Mẹ Bốn",
      contentB3: "Bốn",
      contentC: "Gia đình Bánh",
      contentC1: "Ba Bánh",
      contentC2: "Mẹ Bánh",
      contentC3: "Bánh"
    },
    { 
      content: "Danh sách nhóm C",
      contentA: "Gia đình Cường",
      contentA1: "Ba Cường",
      contentA2: "Mẹ Cường",
      contentA3: "Cường",
      contentB: "Gia đình Công",
      contentB1: "Ba Công",
      contentB2: "Mẹ Công",
      contentB3: "Công",
      contentC: "Gia đình Chúng",
      contentC1: "Ba Chúng",
      contentC2: "Mẹ Chúng",
      contentC3: "Chúng"
    }
]
// render
for(item of liList){
    addLi(item);
}