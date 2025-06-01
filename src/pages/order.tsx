import { Box, Page, Text, Button } from "zmp-ui";
import React, { useState } from "react";

// Dữ liệu mẫu
const tables = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  name: `Bàn ${i + 1}`,
}));

const menuItems = [
  {
    id: 1,
    name: "Phở Bò",
    price: 50000,
    image: "https://cdn.tgdd.vn/Files/2021/07/30/1372387/cach-nau-pho-bo-ngon-chuan-vi-tai-nha-202307071350544210.jpg",
  },
  {
    id: 2,
    name: "Bún Chả",
    price: 45000,
    image: "https://static.vinwonders.com/production/bun-cha-ha-noi.jpg",
  },
  {
    id: 3,
    name: "Cơm Tấm",
    price: 40000,
    image: "https://cdn.tgdd.vn/2020/07/CookProduct/comtam-1200x676.jpg",
  },
];

function OrderPage() {
  const [selectedTable, setSelectedTable] = useState(null);
  const [orders, setOrders] = useState({}); // { tableId: [items] }

  const handleAddToCart = (item) => {
    if (!selectedTable) {
      alert("Vui lòng chọn bàn trước khi gọi món.");
      return;
    }
    const tableId = selectedTable.id;
    setOrders((prev) => {
      const current = prev[tableId] || [];
      return {
        ...prev,
        [tableId]: [...current, item],
      };
    });
  };

  return (
    <Page>
      <Box p={4}>
        {!selectedTable ? (
          <>
            <Text.Title size="large">Chọn Bàn</Text.Title>
            <Box className="grid grid-cols-2 gap-4 mt-4">
              {tables.map((table) => (
                <Box
                  key={table.id}
                  className="rounded-xl shadow p-4 text-center bg-white cursor-pointer"
                  onClick={() => setSelectedTable(table)}
                >
                  <Text bold>{table.name}</Text>
                </Box>
              ))}
            </Box>
          </>
        ) : (
          <>
            <Text.Title size="large">Gọi món - {selectedTable.name}</Text.Title>
            <Box mt={4} className="space-y-4">
              {menuItems.map((item) => (
                <Box key={item.id} className="rounded-xl shadow p-4 bg-white">
                  <Box flex className="gap-4">
                    <img
                      src={item.image}
                      width={80}
                      height={80}
                      alt={item.name}
                      className="rounded-lg"
                    />
                    <Box className="flex-1">
                      <Text bold>{item.name}</Text>
                      <Text size="small">{item.price.toLocaleString()}đ</Text>
                      <Button
                        size="small"
                        onClick={() => handleAddToCart(item)}
                        className="mt-2"
                      >
                        Thêm
                      </Button>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          </>
        )}
      </Box>
    </Page>
  );
}

export default OrderPage;
