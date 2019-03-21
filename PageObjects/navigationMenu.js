var NavigationMenu = function() {
    //Selectors
    // //li[@class="coupons-store"]/a[.='Coupons']
    const couponsNavigationLink = element(by.xpath(`//li[@class="coupons-store"]/a[.='Coupons']`));

    const storesNavigationLink = element.all(by.css('li.coupons-store>a'))
        .filter(function(elem) {
            return elem.getText().then(function(text) {
              return text === 'Stores';
            });
        }).first();
    
    this.clickNavigationMenuItem = function(menuName) {
        element(by.xpath(`//div[@class='drawer']//ul[1]//a[.='${ menuName }']`)).click();
    }

    const getTheAppNavigationLink = element(by.css('li#get-the-app>a'));

    //Methods    
    this.clickCouponLink = function() {
        couponsNavigationLink.click();
    }

    this.clickStoresLink = function() {
        storesNavigationLink.click();
    }

    this.clickAppNavigationLink = function() {
        getTheAppNavigationLink.click();
    }
}

    

module.exports = new NavigationMenu();