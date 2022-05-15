import React from "react";
import { Link } from "react-router-dom";

const ProductListItems = ({ product }) => {
  const { price, category, subs, type, duration, skillLevel, site } = product;

  return (
    <ul className="list-group">
      <li className="list-group-item">
        Price{" "}
        <span className="label label-default label-pill pull-xs-right">
          € {price}
        </span>
      </li>

      {category && (
        <li className="list-group-item">
          Category{" "}
          <Link
            to={`/category/${category.slug}`}
            className="label label-default label-pill pull-xs-right"
          >
            {category.name}
          </Link>
        </li>
      )}

      {subs && (
        <li className="list-group-item">
          Sub Categories
          {subs.map((s) => (
            <Link
              key={s._id}
              to={`/sub/${s.slug}`}
              className="label label-default label-pill pull-xs-right"
            >
              {s.name}
            </Link>
          ))}
        </li>
      )}

      <li className="list-group-item">
        Type{" "}
        <span className="label label-default label-pill pull-xs-right">
          {type}
        </span>
      </li>

      <li className="list-group-item">
        Duration{" "}
        <span className="label label-default label-pill pull-xs-right">
          {duration}
        </span>
      </li>

      <li className="list-group-item">
        Skill Level{" "}
        <span className="label label-default label-pill pull-xs-right">
          {skillLevel}
        </span>
      </li>

      <li className="list-group-item">
        Site{" "}
        <span className="label label-default label-pill pull-xs-right">
          {site}
        </span>
      </li>
    </ul>
  );
};

export default ProductListItems;
