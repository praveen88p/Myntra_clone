
let bagItems;
onLoad();

function onLoad(){
    let bagItemStr = localStorage.getItem('bagItems');
    bagItems = bagItemStr ? JSON.parse(bagItemStr):[];
    displayToHome();
    displayBagIcon();
}

function addToBag(itemsId){
   bagItems.push(itemsId);
   localStorage.setItem('bagItems',JSON.stringify(bagItems));
   displayBagIcon();
}
function displayBagIcon(){
    
    let bagItemCountElement = document.querySelector('.bag-item-count');
    if(bagItems.length>0){
        bagItemCountElement.hidden =false;
        bagItemCountElement.innerText = bagItems.length;
    }
    else{
        bagItemCountElement.hidden =true;
    }
    
}

function displayToHome(){
    let inner_HTML = "";
    let itemContainer = document.querySelector(".items-container");
    if(!itemContainer){
        return;
    }
    items.forEach((item) => {
        inner_HTML += `<div class="item-container">
          <img  class="item-image" src="${item.items_image}" alt="image">
          <div class="rating">${item.rating.stars}⭐|${item.rating.noOFReviews}</div>
          <div class="company-name">${item.company_name}</div>
          <div class="item-name">${item.items_name}</div>
          <div class="price">
              <span  class="current-price">Rs ${item.current_price}</span>
              <span class="orignal-price">Rs ${item.orignal_price}</span>
              <span class="discount">(${item.discount}% OFF)</span>
          </div>
          <button class="btn-add-bag" onclick="addToBag(${item.items_id})" >Add to Bag</button>
          </div>`;
      });
      
      
      itemContainer.innerHTML = inner_HTML;
      
}
