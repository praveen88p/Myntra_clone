let bagItemsObject;
const CONVENIENCE_FEES = 99;
onLoad();
function onLoad(){
    loadbagItemsObject();
    displayBagItems();
    displayBagSummary() ;

}
function displayBagSummary() {
  let bagSummaryElement = document.querySelector('.bag-summary');
  let totalItem = bagItemsObject.length;
  let totalMRP = 0;
  let totalDiscount = 0;

  bagItemsObject.forEach(bagItems => {
    totalMRP += bagItems.orignal_price;
    totalDiscount += bagItems.orignal_price - bagItems.current_price;
  });
  let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;
  

  bagSummaryElement.innerHTML = `
    <div class="bag-details-container">
    <div class="price-header">PRICE DETAILS (${totalItem} Items) </div>
    <div class="price-item">
      <span class="price-item-tag">Total MRP</span>
      <span class="price-item-value">₹${totalMRP}</span>
    </div>
    <div class="price-item">
      <span class="price-item-tag">Discount on MRP</span>
      <span class="price-item-value priceDetail-base-discount">-₹${totalDiscount}</span>
    </div>
    <div class="price-item">
      <span class="price-item-tag">Convenience Fee</span>
      <span class="price-item-value">₹99</span>
    </div>
    <hr>
    <div class="price-footer">
      <span class="price-item-tag">Total Amount</span>
      <span class="price-item-value">₹${finalPayment}</span>
    </div>
  </div>
  <button class="btn-place-order">
    <div class="css-xjhrni">PLACE ORDER</div>
  </button>
  `;
}



function loadbagItemsObject(){
  
    bagItemsObject = bagItems.map(itemsID=>{
        for(let i =0;i<items.length;i++){
               if(itemsID==items[i].items_id){
                return items[i];
               
               }
        }
    })
  
}


function displayBagItems(){
   
    let containerElement = document.querySelector(".bag-items-container");
    let innerHTML ='';
    bagItemsObject.forEach(bagItems=> {
        innerHTML += generateItemsHtml(bagItems);
        console.log(innerHTML);
    });
    containerElement.innerHTML =innerHTML;
}

function removeFromBag(itemId){
    bagItems = bagItems.filter(bagItemId =>bagItemId!=itemId);
    localStorage.setItem('bagItems',JSON.stringify(bagItems));
    loadbagItemsObject()
    displayBagIcon()
    displayBagItems();
    displayBagSummary();
}

function generateItemsHtml(item){
    return `
    <div class="bag-item-container">
    <div class="item-left-part">
      <img class="bag-item-img" src="../${item.items_image}">
    </div>
    <div class="item-right-part">
      <div class="company">${item.company_name}</div>
      <div class="item-name">${item.items_name}</div>
      <div class="price-container">
        <span class="current-price">Rs ${item.current_price}</span>
        <span class="original-price">Rs ${item.orignal_price}</span>
        <span class="discount-percentage">(${item.discount}% OFF)</span>
      </div>
      <div class="return-period">
        <span class="return-period-days">${item.return_period} days</span> return available
      </div>
      <div class="delivery-details">
        Delivery by
        <span class="delivery-details-days">${item.delivery_date}</span>
      </div>
    </div>

    <div class="remove-from-cart" onclick="removeFromBag(${item.items_id})">X</div>
  </div>
  `;
}