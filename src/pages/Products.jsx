import React, { useState, useEffect } from "react";
import { useProducts } from "../hooks/useProducts";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";

export const Products = () => {
  const { products } = useProducts();
  const { Meta } = Card;

  console.log(products);

  return (
    <div className="flex flex-col gap-2 p-4">
      <h1>Products</h1>
      <section className="flex flex-wrap gap-1 items-start justify-center">
        {products?.map((product) => (
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src={product.image}
                className="w-full object-center rounded-t-lg h-[350px]"
              />
            }
          >
            <Meta
              title={product.title}
              description={product.description.slice(0, 50)}
            />
          </Card>
        ))}
      </section>
    </div>
  );
};
