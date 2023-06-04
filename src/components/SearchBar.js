import React from 'react'

export default function SearchBar() {
    return (
        <div>
            <div className="mobile-search-option pb-3 d-lg-none hover-style-default">
  <div className="container-fluid">
    <div className="header-account-list">
      <div className="dropdown-search">
        <form action="#">
          <input placeholder="Search entire store here ..." type="text" />
          <div className="search-category">
            <select className="bootstrap-select" name="poscats">
              <option value={0}>All categories</option>
              <option value={104}>
                Fresh Food
              </option>
              <option value={183}>
                - - Fresh Fruit
              </option>
              <option value={187}>
                - - - - Bananas
              </option>
              <option value={188}>
                - - - - Apples &amp; Pears
              </option>
              <option value={189}>
                - - - - Berries &amp; Cherries
              </option>
              <option value={190}>
                - - - - Oranges &amp; Citrus Fruit
              </option>
              <option value={191}>
                - - - - Grapes
              </option>
              <option value={184}>
                - - Fresh Vegetables
              </option>
              <option value={192}>
                - - - - Potatoes &amp; Sweet Potatoes
              </option>
              <option value={193}>
                - - - - Onions &amp; Leeks
              </option>
              <option value={194}>
                - - - - Carrots &amp; Root Vegetables
              </option>
              <option value={195}>
                - - - - Broccoli &amp; Cauliflower
              </option>
              <option value={196}>
                - - - - Cabbages &amp; Greens
              </option>
              <option value={185}>
                - - Fresh Salad &amp; Dips
              </option>
              <option value={197}>
                - - - - Lettuce &amp; Salad bags
              </option>
              <option value={198}>
                - - - - Tomatoes
              </option>
              <option value={199}>
                - - - - Cucumber
              </option>
              <option value={200}>
                - - - - Celery
              </option>
              <option value={201}>
                - - - - Peppers
              </option>
              <option value={186}>
                - - Milk, Butter &amp; Eggs
              </option>
              <option value={202}>
                - - - - Milk
              </option>
              <option value={203}>
                - - - - Spreads &amp; Margarine
              </option>
              <option value={204}>
                - - - - Fresh Cream &amp; Custard
              </option>
              <option value={205}>
                - - - - Eggs
              </option>
              <option value={206}>
                - - - - Baking &amp; Cooking
              </option>
            </select>
          </div>
          <button type="submit"><i className="ion-ios-search-strong" /></button>
        </form>
      </div>
    </div>
  </div>
</div>

        </div>
    )
}
