import React from "react";
import { Link } from "gatsby";
import { multilanguage } from "redux-multilanguage";

const NavMenuItem = ({ item, sidebarMenu }) => {	
  return item && item.menuChild === null ? (
    <li>
      <Link to={`/${item.menuLink}`}>{item.title}</Link>
    </li>
  ) : (
    <li>
      <Link to={`/${item.menuLink}`}>
        {item.title}
        {sidebarMenu ? (
          <span>
            <i className="fa fa-angle-right"></i>
          </span>
        ) : (
          <i className="fa fa-angle-down" />
        )}
      </Link>
      <ul className="mega-menu">
        {item.menuChild &&
          item.menuChild
            .sort((a, b) => (a.order > b.order ? 1 : -1))
            .map((itemSubmenu) => (
              <li key={itemSubmenu.id}>
                <ul>
                  <li className="mega-menu-title">
                    <Link to={`/shop?${itemSubmenu.menuLink}`}>
                      {itemSubmenu.title}
                    </Link>
                  </li>
                  {itemSubmenu.subMenu &&
                    itemSubmenu.subMenu.map((itemSubmenuItem) => (
                      <li key={itemSubmenuItem.id}>
                        <Link to={`/shop?${itemSubmenuItem.url}`}>
                          {itemSubmenuItem.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </li>
            ))}
      </ul>
    </li>
  );
};

export default multilanguage(NavMenuItem);
